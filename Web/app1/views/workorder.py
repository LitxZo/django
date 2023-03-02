import os
from app1.models import Record, UserInfo, WorkOrder, File
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


class file_form(forms.Form):
    file = forms.FileField(
        widget=forms.ClearableFileInput(attrs={"multiple": True}),
        label="请选择文件",
    )
    
def workorder_create(request):

    if request.method == "GET":
        form = workorder_form()
        fileform = file_form()
        return render(request, "workorder_add.html", {"form": form, "fileform": fileform})
    form = workorder_form(data=request.POST)
    fileform = file_form(request.POST, request.FILES)
    
    if form.is_valid():
        if fileform.is_valid():
            files = request.FILES.getlist("file")
            workorder_id = request.POST.get("number")
            path = os.path.join('./upload', workorder_id)
            folder = os.path.exists(path)
            print(workorder_id, path)
            if not folder:                   #判断是否存在文件夹如果不存在则创建为文件夹
                os.makedirs(path)            #makedirs 创建文件时如果路径不存在会创建这个路径

            for file in files:
                # 写入到服务器本地
                destination = open(os.path.join(path, file.name), 'wb+')
                for chunk in file.chunks():
                    destination.write(chunk)
                destination.close()
                File.objects.create(
                    workorder_number = workorder_id,
                    file_name = file.name,
                    file_path = os.path.join(path, file.name)
                )
        form.save()
        return redirect(reverse("workorder_list"))
    


def workorder_create2(request):

    if request.method == "GET":
        form = workorder_form()
        fileform = file_form()
        return render(request, "workorder_add.html", {"form": form, "fileform": fileform})
    form = workorder_form(data=request.POST)
    fileform = file_form(request.POST, request.FILES)
    
    if form.is_valid():
        if fileform.is_valid():
            files = request.FILES.getlist("file")
            workorder_id = request.POST.get("number")
            path = os.path.join('./upload', workorder_id)
            folder = os.path.exists(path)
            print(workorder_id, path)
            if not folder:                   #判断是否存在文件夹如果不存在则创建为文件夹
                os.makedirs(path)            #makedirs 创建文件时如果路径不存在会创建这个路径

            for file in files:
                # 写入到服务器本地
                destination = open(os.path.join(path, file.name), 'wb+')
                for chunk in file.chunks():
                    destination.write(chunk)
                destination.close()
                File.objects.create(
                    workorder_number = workorder_id,
                    file_name = file.name,
                    file_path = os.path.join(path, file.name)
                )
        form.save()
        return redirect(reverse("workorder_list2"))
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
    handler_id = request.session.get("id")
    handler = UserInfo.objects.filter(id=handler_id).first()
    handler_name = request.session.get("name")
    record = ""
    workorder = WorkOrder.objects.filter(id=workorder_id).first()
    workorder_dict = {}
    workorder_number = workorder.number

    workorder_dict["type"] = workorder.get_type_display()
    workorder_dict["status"] = workorder.get_status_display()
    workorder_dict["do_time"] = workorder.do_time
    workorder_dict["content"] = workorder.content


    if request.method == "GET":
        form = edit_form(instance=workorder)
        fileform = file_form()
        return render(request, "workorder_edit.html", {"workorder": workorder, "form": form, "fileform": fileform})

    form = edit_form(data=request.POST, instance=workorder)
    fileform = file_form(request.POST, request.FILES)
    
  
    
    if form.is_valid():
        if fileform.is_valid():
            files = request.FILES.getlist("file")
            path = os.path.join('./upload', workorder_number)
            folder = os.path.exists(path)
            print(workorder_number, path)
            if not folder:                   #判断是否存在文件夹如果不存在则创建为文件夹
                os.makedirs(path)            #makedirs 创建文件时如果路径不存在会创建这个路径

            for file in files:
                # 写入到服务器本地
                destination = open(os.path.join(path, file.name), 'wb+')
                for chunk in file.chunks():
                    destination.write(chunk)
                destination.close()
                File.objects.create(
                    workorder_number = workorder_number,
                    file_name = file.name,
                    file_path = os.path.join(path, file.name)
                )

        new_workorder_dict = form.cleaned_data
        if new_workorder_dict["type"] == "0":
            new_workorder_dict["type"] = "类型1"
        elif new_workorder_dict["type"] == "1":
            new_workorder_dict["type"] = "类型2"
        elif new_workorder_dict["type"] == "2":
            new_workorder_dict["type"] = "类型3"
        elif new_workorder_dict["type"] == "3":
            new_workorder_dict["type"] = "类型4"
        if new_workorder_dict["status"] == "0" :
            new_workorder_dict["status"] = '工单已退回'
        elif new_workorder_dict["status"] == "1" :
            new_workorder_dict["status"] = '新建-保存'
        elif new_workorder_dict["status"] == "2" :
            new_workorder_dict["status"] = '提交-等待审批'
        elif new_workorder_dict["status"] == "3" :
            new_workorder_dict["status"] = '已审批-等待执行'
        elif new_workorder_dict["status"] == "4" :
            new_workorder_dict["status"] = '已执行-等待确认'
        elif new_workorder_dict["status"] == "5" :
            new_workorder_dict["status"] = '工单已完成'

        if workorder_dict["content"] != new_workorder_dict["content"]:
            record += "修改了工单内容：" + workorder_dict["content"] +"-->"+ new_workorder_dict["content"] + "\r"
        if workorder_dict["type"] != new_workorder_dict["type"]:
            record += "修改了工单类型：" + workorder_dict["type"] +"-->"+ new_workorder_dict["type"] + "\r"
        if workorder_dict["status"] != new_workorder_dict["status"]:
            record += "修改了工单状态："  + workorder_dict["status"] +"-->"+ new_workorder_dict["status"] + "\r"
        if workorder_dict["do_time"] != new_workorder_dict["do_time"]:
            record += "修改了处理时间：" + str(workorder_dict["do_time"]) +"-->"+ str(new_workorder_dict["do_time"]) + "\r"
        print(record)
        form.save()
        Record.objects.create(
            handler=handler,
            content=record,
            number=workorder,
        )
        return redirect(reverse("workorder_list"))

def edit2(request, id):
    if request.session.get("permission") != "超级管理员" and request.session.get("permission") != "蒋庄村管理员":
        return redirect(reverse("no_permission"))

    workorder_id = id
    handler_id = request.session.get("id")
    handler = UserInfo.objects.filter(id=handler_id).first()
    handler_name = request.session.get("name")
    record = ""
    workorder = WorkOrder.objects.filter(id=workorder_id).first()
    workorder_dict = {}
    workorder_number = workorder.number

    workorder_dict["type"] = workorder.get_type_display()
    workorder_dict["status"] = workorder.get_status_display()
    workorder_dict["do_time"] = workorder.do_time
    workorder_dict["content"] = workorder.content

    
    workorder = WorkOrder.objects.filter(id=workorder_id).first()
    if request.method == "GET":
        form = edit_form(instance=workorder)
        fileform = file_form()
        return render(request, "workorder_edit2.html", {"workorder": workorder, "form": form, "fileform":fileform})

    form = edit_form(data=request.POST, instance=workorder)
    fileform = file_form(request.POST, request.FILES)
    if form.is_valid():
        if fileform.is_valid():
            files = request.FILES.getlist("file")
            path = os.path.join('./upload', workorder_number)
            folder = os.path.exists(path)
            print(workorder_number, path)
            if not folder:                   #判断是否存在文件夹如果不存在则创建为文件夹
                os.makedirs(path)            #makedirs 创建文件时如果路径不存在会创建这个路径

            for file in files:
                # 写入到服务器本地
                destination = open(os.path.join(path, file.name), 'wb+')
                for chunk in file.chunks():
                    destination.write(chunk)
                destination.close()
                File.objects.create(
                    workorder_number = workorder_number,
                    file_name = file.name,
                    file_path = os.path.join(path, file.name)
                )

        new_workorder_dict = form.cleaned_data
        if new_workorder_dict["type"] == "0":
            new_workorder_dict["type"] = "类型1"
        elif new_workorder_dict["type"] == "1":
            new_workorder_dict["type"] = "类型2"
        elif new_workorder_dict["type"] == "2":
            new_workorder_dict["type"] = "类型3"
        elif new_workorder_dict["type"] == "3":
            new_workorder_dict["type"] = "类型4"
        if new_workorder_dict["status"] == "0" :
            new_workorder_dict["status"] = '工单已退回'
        elif new_workorder_dict["status"] == "1" :
            new_workorder_dict["status"] = '新建-保存'
        elif new_workorder_dict["status"] == "2" :
            new_workorder_dict["status"] = '提交-等待审批'
        elif new_workorder_dict["status"] == "3" :
            new_workorder_dict["status"] = '已审批-等待执行'
        elif new_workorder_dict["status"] == "4" :
            new_workorder_dict["status"] = '已执行-等待确认'
        elif new_workorder_dict["status"] == "5" :
            new_workorder_dict["status"] = '工单已完成'

        if workorder_dict["content"] != new_workorder_dict["content"]:
            record += "修改了工单内容：" + workorder_dict["content"] +"-->"+ new_workorder_dict["content"] + "\r"
        if workorder_dict["type"] != new_workorder_dict["type"]:
            record += "修改了工单类型：" + workorder_dict["type"] +"-->"+ new_workorder_dict["type"] + "\r"
        if workorder_dict["status"] != new_workorder_dict["status"]:
            record += "修改了工单状态："  + workorder_dict["status"] +"-->"+ new_workorder_dict["status"] + "\r"
        if workorder_dict["do_time"] != new_workorder_dict["do_time"]:
            record += "修改了处理时间：" + str(workorder_dict["do_time"]) +"-->"+ str(new_workorder_dict["do_time"]) + "\r"
        form.save()
        Record.objects.create(
            handler=handler,
            content=record,
            number=workorder,
        )
        return redirect(reverse("workorder_list2"))
