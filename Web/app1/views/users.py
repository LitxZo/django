from app1.models import UserInfo
from app1.utils.ebcrypt import md5
from django.shortcuts import HttpResponse, redirect, render
from django.urls import reverse

from django import forms


def user_list(request):
    users = UserInfo.objects.filter(village=1).all()

    return render(request, "user_list.html", {"users": users})

def user_list2(request):
    users = UserInfo.objects.filter(village=2).all()

    return render(request, "user_list2.html", {"users": users})


class UserForm(forms.ModelForm):
    class Meta:
        model = UserInfo
        fields = ["name", "password", "phonenum", "village", "permission"]
        # widgets = {
        #     "name": forms.TextInput(attrs={"class":"layui-input"})
        # }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for name, field in self.fields.items():
            # if name == "village":
            #     continue

            field.widget.attrs = {"class": "layui-input"}

    def clean_password(self):
        pwd = self.cleaned_data.get("password")
        return md5(pwd)


def user_add(request):
    if request.session.get("permission") != "超级管理员":
        return redirect(reverse("no_permission"))
    if request.method == "GET":
        #     return render(request, "user_add.html")

        # user_name = request.POST.get("name")
        # user_password = request.POST.get("password")
        # user_phonenum = request.POST.get("phonenum")

        # UserInfo.objects.create(
        #     name=user_name, password=user_password, phonenum=user_phonenum)
        form = UserForm()

        # return redirect(reverse("user_list"))
        return render(request, "user_add.html", {"form": form})

    form = UserForm(data=request.POST)
    if form.is_valid():
        form.save()
        return redirect(reverse("user_list"))

    return render(request, "user_add.html", {"form": form})


def user_add2(request):
    if request.session.get("permission") != "超级管理员":
        return redirect(reverse("no_permission"))
    if request.method == "GET":
        form = UserForm()
        return render(request, "user_add2.html", {"form": form})

    form = UserForm(data=request.POST)
    if form.is_valid():
        form.save()
        return redirect(reverse("user_list2"))

    return render(request, "user_add2.html", {"form": form})


def user_delete(request):
    if request.session.get("permission") != "超级管理员":
        return redirect(reverse("no_permission"))
    nid = request.GET.get("nid")
    UserInfo.objects.filter(id=nid).delete()

    return redirect(reverse("user_list"))


def user_delete2(request):
    if request.session.get("permission") != "超级管理员":
        return redirect(reverse("no_permission"))
    nid = request.GET.get("nid")
    UserInfo.objects.filter(id=nid).delete()

    return redirect(reverse("user_list2"))



def user_change(request, id):
    if request.session.get("permission") != "超级管理员":
        return redirect(reverse("no_permission"))
    # nid = request.GET.get("nid")
    # name = request.GET.get("name")
    # password = request.GET.get("password")
    # phone = request.GET.get("phonenum")

    user_info = UserInfo.objects.filter(id=id).first()
    if request.method == "GET":
        # return render(request, "user_change.html", {"name": name, "password": password, "phonenum": phone})

        form = UserForm(instance=user_info)
        return render(request, "user_change.html", {"form": form})

    # c_name = request.POST.get("name")
    # c_password = request.POST.get("password")
    # c_phonenum = request.POST.get("phonenum")

    # UserInfo.objects.filter(id=nid).update(name=c_name)
    # UserInfo.objects.filter(id=nid).update(password=c_password)
    # UserInfo.objects.filter(id=nid).update(phonenum=c_phonenum)
    form = UserForm(data=request.POST, instance=user_info)
    if form.is_valid():
        form.save()
        return redirect(reverse("user_list"))

    return render(request, "user_change.html", {"form": form})


def user_change2(request, id):
    if request.session.get("permission") != "超级管理员":
        return redirect(reverse("no_permission2"))


    user_info = UserInfo.objects.filter(id=id).first()
    if request.method == "GET":
        # return render(request, "user_change.html", {"name": name, "password": password, "phonenum": phone})

        form = UserForm(instance=user_info)
        return render(request, "user_change2.html", {"form": form})

    form = UserForm(data=request.POST, instance=user_info)
    if form.is_valid():
        form.save()
        return redirect(reverse("user_list2"))

    return render(request, "user_change2.html", {"form": form})
