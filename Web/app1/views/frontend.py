import os

from app1.models import File, Record, UserInfo, WorkOrder
from app1.utils.ebcrypt import md5
from ckeditor.fields import RichTextFormField
from django.core.exceptions import ValidationError
from django.http import FileResponse
from django.shortcuts import HttpResponse, redirect, render
from django.urls import reverse

from django import forms
