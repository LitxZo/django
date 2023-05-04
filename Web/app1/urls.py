from app1.views import vueResponse
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path("get_feedback/",vueResponse.showInfo),
]