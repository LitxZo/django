from app1.models import UserInfo, WorkOrder
from app1.utils.ebcrypt import md5
from django.shortcuts import HttpResponse, redirect, render
from django.urls import reverse

from django import forms


class workorder_form(forms.ModelForm):
  class Meta:
    model = "WorlOrder"
    title = ["number","title","type","status","do_time","content","village"]

    
  

def workorder_create(request):

  return render(request, "workorder_create.html")