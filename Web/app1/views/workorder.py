from app1.models import UserInfo, WorkOrder
from app1.utils.ebcrypt import md5
from django.shortcuts import HttpResponse, redirect, render
from django.urls import reverse

from django import forms


class workorder_form(forms.ModelForm):
    class Meta:
        model = WorkOrder
        fields = ["number", "title", "type",
                  "status", "do_time", "content", "village"]
        widgets = {
            "content": forms.Textarea(attrs={"class": "layui-textarea"})
        }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for name, field in self.fields.items():
            if name != "content":
                field.widget.attrs = {"class": "layui-input"}


def workorder_create(request):

    if request.method == "GET":
        form = workorder_form()
        return render(request, "workorder_add.html", {"form": form})
    form = workorder_form(data=request.POST)
    if form.is_valid():
        form.save()
        return redirect(reverse("workorder_list"))
    return render(request, "workorder_add.html", {"form": form})


def workorder_create2(request):

    if request.method == "GET":
        form = workorder_form()
        return render(request, "workorder_add2.html", {"form": form})
    form = workorder_form(data=request.POST)
    if form.is_valid():
        form.save()
        return redirect(reverse("workorder_list"))
    return render(request, "workorder_add2.html", {"form": form})


def workorder_list(request):
    workorder = WorkOrder.objects.filter(village=1).all()
    typelist = []
    statuslist = []
    lengh = range(len(workorder))
    for i in workorder:
        typelist.append(i.get_type_display())
        statuslist.append(i.get_status_display())
        print(lengh,i)

    workorder_e = zip(workorder,typelist,statuslist)
    # print(typelist, statuslist,workorder_e,lengh)
    return render(request, "workorder_list.html", {"workorder": workorder_e})


def workorder_list2(request):
    workorder = WorkOrder.objects.filter(village=2).all()
    typelist = []
    statuslist = []
    lengh = range(len(workorder))
    for i in workorder:
        typelist.append(i.get_type_display())
        statuslist.append(i.get_status_display())
        print(lengh, i)

    workorder_e = zip(workorder, typelist, statuslist)
    # print(typelist, statuslist,workorder_e,lengh)
    return render(request, "workorder_list2.html", {"workorder": workorder_e})
