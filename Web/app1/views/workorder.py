from app1.models import Record, UserInfo, WorkOrder
from app1.utils.ebcrypt import md5
from django.core.exceptions import ValidationError
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

    def clean_number(self):
        data = self.cleaned_data["number"]
        exists = WorkOrder.objects.filter(number=data).exists()
        if exists:
            raise ValidationError("工单号已存在")
        
        return data


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
    data_dict = {}
    value = request.GET.get("q")
    if value:
        data_dict["number__contains"] = value
    workorder = WorkOrder.objects.filter(village=1 ,**data_dict).all()
    typelist = []
    statuslist = []
    lengh = range(len(workorder))
    for i in workorder:
        typelist.append(i.get_type_display())
        statuslist.append(i.get_status_display())
        print(lengh, i)

    workorder_e = zip(workorder, typelist, statuslist)
    # print(typelist, statuslist,workorder_e,lengh)
    return render(request, "workorder_list.html", {"workorder": workorder_e})


def workorder_list2(request):
    data_dict = {}
    value = request.GET.get("q")
    if value:
        data_dict["number__contains"] = value
    workorder = WorkOrder.objects.filter(village=2 ,**data_dict).all()
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


class record_form(forms.Form):
    content = forms.CharField(
        label="记录内容",
        widget=forms.Textarea(attrs={"class": "layui-textarea"})
    )


def handle(request, id):

    if request.session.get("permission") != "超级管理员" and request.session.get("permission") != "贲集村管理员":
        return redirect(reverse("no_permission"))

    workorder_id = id
    handler_id = request.session.get("id")
    handler = UserInfo.objects.filter(id=handler_id).first()
    handler_name = request.session.get("name")
    workorder = WorkOrder.objects.filter(id=workorder_id).first()
    if request.method == "GET":
        post_form = record_form()
        return render(request, "workorder_handle.html", {"form": post_form, "handler_name": handler_name})

    post_form = record_form(data=request.POST)
    if post_form.is_valid():
        post_content = post_form.cleaned_data["content"]
        Record.objects.create(
            handler=handler,
            content=post_content,
            number=workorder,
        )
        return redirect(reverse("workorder_list"))


def handle2(request, id):

    if request.session.get("permission") != "超级管理员" and request.session.get("permission") != "蒋庄村管理员":
        return redirect(reverse("no_permission2"))

    workorder_id = id
    handler_id = request.session.get("id")
    handler = UserInfo.objects.filter(id=handler_id).first()
    handler_name = request.session.get("name")
    workorder = WorkOrder.objects.filter(id=workorder_id).first()
    if request.method == "GET":
        post_form = record_form()
        return render(request, "workorder_handle2.html", {"form": post_form, "handler_name": handler_name})

    post_form = record_form(data=request.POST)
    if post_form.is_valid():
        post_content = post_form.cleaned_data["content"]
        Record.objects.create(
            handler=handler,
            content=post_content,
            number=workorder,
        )
        return redirect(reverse("workorder_list2"))


def record(request, id):
    record = Record.objects.filter(number=id).all()

    return render(request, "workorder_record.html", {"record": record})


def record2(request, id):
    record = Record.objects.filter(number=id).all()
    return render(request, "workorder_record2.html", {"record": record})


class edit_form(forms.ModelForm):
    class Meta:
        model = WorkOrder
        fields = ["number", "title", "type",
                  "status", "do_time", "content", "village"]
        widgets = {
            "content": forms.Textarea(attrs={"class": "layui-textarea"}),
            "number": forms.TextInput(attrs={"readonly": True}),
        }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for name, field in self.fields.items():
            if name != "content":
                field.widget.attrs = {"class": "layui-input"}
            if name == "number" or name == "title":
                field.widget.attrs = {"class": "layui-input", "readonly": True}


def edit(request, id):
    if request.session.get("permission") != "超级管理员" and request.session.get("permission") != "贲集村管理员":
        return redirect(reverse("no_permission"))

    workorder_id = id
    workorder = WorkOrder.objects.filter(id=workorder_id).first()
    if request.method == "GET":
        form = edit_form(instance=workorder)
        return render(request, "workorder_edit.html", {"workorder": workorder, "form": form})

    form = edit_form(data=request.POST, instance=workorder)
    if form.is_valid():
        form.save()
        return redirect(reverse("workorder_list"))

def edit2(request, id):
    if request.session.get("permission") != "超级管理员" and request.session.get("permission") != "蒋庄村管理员":
        return redirect(reverse("no_permission"))

    workorder_id = id
    workorder = WorkOrder.objects.filter(id=workorder_id).first()
    if request.method == "GET":
        form = edit_form(instance=workorder)
        return render(request, "workorder_edit2.html", {"workorder": workorder, "form": form})

    form = edit_form(data=request.POST, instance=workorder)
    if form.is_valid():
        form.save()
        return redirect(reverse("workorder_list2"))
