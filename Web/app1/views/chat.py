from app1.models import UserInfo
from app1.utils.ebcrypt import md5
from django.shortcuts import redirect, render
from django.urls import reverse

from django import forms


def member_list(request):
  if request.session.get("permission") != "超级管理员" and request.session.get("permission") != "村落1管理员":
      return redirect(reverse("no_permission"))
  users = UserInfo.objects.all()

  return render(request, "member_list.html",{"users":users})


def chat_ui(request):

  return render(request, "chat.html")