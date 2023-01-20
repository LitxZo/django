from app1.models import UserInfo, message
from app1.utils.ebcrypt import md5
from django.shortcuts import redirect, render
from django.urls import reverse
from django.utils.timezone import now

from django import forms


def member_list(request):
    if request.session.get("permission") != "超级管理员" and request.session.get("permission") != "贲集村管理员" :
        return redirect(reverse("no_permission"))
    # if request.session.get("permission") == "超级管理员":
    #     users = UserInfo.objects.filter().all()
    #     return render(request, "member_list.html", {"users": users})
    # if request.session.get("permission") == "贲集村管理员":
    #     users = UserInfo.objects.filter(village=1).all()
    #     return render(request, "member_list.html", {"users": users})
    # if request.session.get("permission") == "蒋庄村管理员":
    #     users = UserInfo.objects.filter(village=2).all()
    #     return render(request, "member_list.html", {"users": users})
    data_dict = {}
    value = request.GET.get("q")
    if value:
        data_dict["name__contains"] = value
    uid = request.session.get("id")
    users = UserInfo.objects.filter(village=1, **data_dict).exclude(id=uid).all()
    return render(request, "member_list.html", {"users": users})

def member_list2(request):
    if request.session.get("permission") != "超级管理员" and request.session.get("permission") != "蒋庄村管理员":
        return redirect(reverse("no_permission2"))

    data_dict = {}
    value = request.GET.get("q")
    if value:
        data_dict["name__contains"] = value
    uid = request.session.get("id")
    users = UserInfo.objects.filter(village=2, **data_dict).exclude(id=uid).all()

    return render(request, "member_list.html", {"users": users})


class ChatForm(forms.Form):
    message = forms.CharField(
        label="信息内容",
        widget=forms.Textarea(attrs={"class": "layui-textarea"})
    )


def chat_list(request):
    id = request.session.get("id")
    message_list = message.objects.filter(recipient_id=id).exclude(id=id).all()


    if request.method == "GET":
        post_form = ChatForm()
        return render(request, "chat.html", {"message_list": message_list, "form": post_form})

def chat_list2(request):
    id = request.session.get("id")
    message_list = message.objects.filter(recipient_id=id).exclude(id=id).all()


    if request.method == "GET":
        post_form = ChatForm()
        return render(request, "chat2.html", {"message_list": message_list, "form": post_form})


def chat_send(request, id):
    sender_id = request.session.get("id")
    sender_name = request.session.get("name")
    recipient_id = id
    recipient_name = UserInfo.objects.filter(id=id).first().name


    message_list = message.objects.filter(recipient_id=sender_id).all()

    if request.method == "GET":
        post_form = ChatForm()
        return render(request, "send.html", {"form": post_form, "recipient_name": recipient_name})

    post_form = ChatForm(data=request.POST)
    if post_form.is_valid():
        post_message = post_form.cleaned_data["message"]
        message.objects.create(
            sender_id=sender_id,
            recipient_id=recipient_id,
            sender=sender_name,
            recipient=recipient_name,
            message=post_message,
        )
        return redirect(reverse("chat_list"))

def chat_send2(request, id):
    sender_id = request.session.get("id")
    sender_name = request.session.get("name")
    recipient_id = id
    recipient_name = UserInfo.objects.filter(id=id).first().name


    message_list = message.objects.filter(recipient_id=sender_id).all()

    if request.method == "GET":
        post_form = ChatForm()
        return render(request, "send2.html", {"form": post_form, "recipient_name": recipient_name})

    post_form = ChatForm(data=request.POST)
    if post_form.is_valid():
        post_message = post_form.cleaned_data["message"]
        message.objects.create(
            sender_id=sender_id,
            recipient_id=recipient_id,
            sender=sender_name,
            recipient=recipient_name,
            message=post_message,
        )
        return redirect(reverse("chat_list2"))
