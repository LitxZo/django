from app1.models import UserInfo
from django.shortcuts import redirect, render
from django.urls import reverse

from django import forms


class LoginForm(forms.ModelForm):
    class Meta:
        model = UserInfo
        fields = ["name", "password"]

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for name, field in self.fields.items():
            field.widget.attrs = {"class": "layui-input"}


def login(request):
    if request.method == "GET":
        form = UserInfo()
        return render(request, "login.html", {"form": form})

    return render(request, "index.html")
