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
                "标题": "群众反馈1",
                "申请人": "王磊",
                "申请时间": "2022-1-1",
                "是否处理": "是"
            },
            {
                "标题": "群众反馈2",
                "申请人": "王磊",
                "申请时间": "2022-1-1",
                "是否处理": "是"
            },
            {
                "标题": "群众反馈3",
                "申请人": "王磊",
                "申请时间": "2022-1-1",
                "是否处理": "是"
            },

        ]
        response["err_num"] = 0
        response["msg"] = "success"

    except Exception as e :
        response["msg"] = str(e)
        response["err_num"] = 1

    return JsonResponse(response)
