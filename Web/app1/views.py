from app1.models import UserInfo
from django.shortcuts import redirect, render
from django.urls import reverse

from django import forms


def start(request):

    name = '甘雨'
    return render(request, 'start.html', {'name': name})


def index(request):
    return render(request, 'index.html')


def test_meeting(request):
    return render(request, 'test_meeting.html')


def user_list(request):
    users = UserInfo.objects.all()

    return render(request, "user_list.html", {"users": users})


def user_add(request):
    if request.method == "GET":
        return render(request, "user_add.html")

    user_name = request.POST.get("name")
    user_password = request.POST.get("password")
    user_phonenum = request.POST.get("phonenum")

    UserInfo.objects.create(
        name=user_name, password=user_password, phonenum=user_phonenum)
    return redirect(reverse("user_list"))


def user_delete(request):
    nid = request.GET.get("nid")
    UserInfo.objects.filter(id=nid).delete()

    return redirect(reverse("user_list"))


def user_change(request):
    nid = request.GET.get("nid")
    name = request.GET.get("name")
    password = request.GET.get("password")
    phone = request.GET.get("phonenum")

    if request.method == "GET":
        return render(request, "user_change.html", {"name": name, "password": password, "phonenum": phone})

    c_name = request.POST.get("name")
    c_password = request.POST.get("password")
    c_phonenum = request.POST.get("phonenum")

    UserInfo.objects.filter(id=nid).update(name=c_name)
    UserInfo.objects.filter(id=nid).update(password=c_password)
    UserInfo.objects.filter(id=nid).update(phonenum=c_phonenum)
    return redirect(reverse("user_list"))

# Create your views here.
