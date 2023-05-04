from django.conf import settings
from django.shortcuts import redirect, render
from django.urls import reverse
from django.utils.deprecation import MiddlewareMixin


class validation(MiddlewareMixin):
    def process_request(self, request):
        ip = request.META.get('REMOTE_ADDR')
        if ip in settings.WHITE_LIST:
            return
    
        if request.path_info == "/login/":
            return
        if request.session.get("permission"):
            return
        
        return redirect(reverse("login"))

    def process_response(self, request, response):

        return response
