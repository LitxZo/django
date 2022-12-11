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

