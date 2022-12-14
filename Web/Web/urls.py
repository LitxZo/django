"""Web URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from app1.views import chat, init, permission, users
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path("start/", init.start),
    path("index/", init.index),
    path("meeting/", init.test_meeting),
    path("users/", users.user_list, name="user_list"),
    path("users/add/", users.user_add),
    path("users/delete/", users.user_delete),
    path("users/<int:id>/edit/", users.user_change),
    path("login/", permission.login, name="login"),
    path("logout/", permission.logout),
    path("member/", chat.member_list),
    path("chat_list/", chat.chat_list, name="chat_list"),
    path("no_permission/", permission.no_permission, name="no_permission"),
    path("chat/<int:id>/send", chat.chat_send),
]
