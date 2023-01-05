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

from app1.views import chat, init, permission, users, workorder
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path("start/", init.start),
    path("index/", init.index),
    path("index2/", init.index2),
    path("meeting/", init.test_meeting),
    path("users/", users.user_list, name="user_list"),
    path("users2/", users.user_list2, name="user_list2"),
    path("users/add/", users.user_add),
    path("users2/add/", users.user_add2),
    path("users/delete/", users.user_delete),
    path("users2/delete/", users.user_delete2),
    path("users/<int:id>/edit/", users.user_change),
    path("users2/<int:id>/edit/", users.user_change2),
    path("login/", permission.login, name="login"),
    path("logout/", permission.logout),
    path("member/", chat.member_list),
    path("member2/", chat.member_list2),
    path("chat_list/", chat.chat_list, name="chat_list"),
    path("chat_list/", chat.chat_list2, name="chat_list2"),
    path("no_permission/", permission.no_permission, name="no_permission"),
    path("no_permission2/", permission.no_permission2, name="no_permission2"),
    path("chat/<int:id>/send", chat.chat_send),
    path("chat2/<int:id>/send", chat.chat_send2),
    path("workorder/add/", workorder.workorder_create),
    path("workorder2/add/", workorder.workorder_create2),
    path("workorder/list/", workorder.workorder_list, name="workorder_list"),
    path("workorder2/list/", workorder.workorder_list2, name="workorder_list2"),
    path("workorder/<int:id>/record/", workorder.record, name="workorder_record"),
    path("workorder2/<int:id>/record/", workorder.record2, name="workorder_record2"),
    path("workorder/<int:id>/handle",workorder.handle),
    path("workorder2/<int:id>/handle",workorder.handle2),

]
