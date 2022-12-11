from django.shortcuts import redirect, render
from django.urls import reverse
from django.utils.deprecation import MiddlewareMixin


class validation(MiddlewareMixin):
    def process_request(self, request):
        print(request.session.get("permission"))
        if request.path_info == "/login/":
            return
        if request.session.get("permission") == "超级管理员":
            return
        
        return redirect(reverse("login"))

    def process_response(self, request, response):

        return response
