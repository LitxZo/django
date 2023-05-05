import os

from app1.models import File, Record, UserInfo, WorkOrder
from app1.utils.ebcrypt import md5
from ckeditor.fields import RichTextFormField
from django.core.exceptions import ValidationError
from django.http import FileResponse, JsonResponse
from django.shortcuts import HttpResponse, redirect, render
from django.urls import reverse
import json
from django.views.decorators.http import require_http_methods

from django import forms

@require_http_methods(["GET"])
def showInfo(request):
    response = {}
    try:
        response["list"] = [
            {
                "title": "群众反馈1",
                "name": "王磊",
                "date": "2022-1-1",
                "ishandle": "是"
            },
            {
                "title": "群众反馈2",
                "name": "李江",
                "date": "2022-3-1",
                "ishandle": "是"
            },
            {
                "title": "群众反馈3",
                "name": "王磊",
                "date": "2022-5-2",
                "ishandle": "是"
            },

        ]
        response["err_num"] = 0
        response["msg"] = "success"

    except Exception as e :
        response["msg"] = str(e)
        response["err_num"] = 1

    return JsonResponse(response)
