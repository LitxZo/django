from app1.models import UserInfo
from app1.utils.ebcrypt import md5
from django.shortcuts import redirect, render
from django.urls import reverse

from django import forms


class LoginForm(forms.Form):

    name = forms.CharField(
        label="用户名",
        widget=forms.TextInput
    )
    password = forms.CharField(
        label="密码",
        widget=forms.PasswordInput
    )

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for name, field in self.fields.items():

            field.widget.attrs = {"class": "layui-input"}

    def clean_password(self):
        pwd = self.cleaned_data.get("password")
        return md5(pwd)


def login(request):

    if request.method == "GET":

        form = LoginForm()
        return render(request, "login.html", {"form": form})

    form = LoginForm(data=request.POST)
    if form.is_valid():
        admin_obj = UserInfo.objects.filter(**form.cleaned_data).first()
        if not admin_obj:
            form.add_error("password", "用户名或密码错误")
            return render(request, "login.html", {"form": form})

        request.session["permission"] = UserInfo.objects.filter(
            **form.cleaned_data).first().permission.role

        print(UserInfo.objects.filter(
            **form.cleaned_data).first().permission.role, "登陆成功")

        return render(request, "index.html")


def logout(request):
    request.session.clear()
    print("已清除session")

    return redirect("/login")

def no_permission(request):
    return render(request, "no_permission.html")
