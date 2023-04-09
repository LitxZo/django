import os
from app1.models import Record, UserInfo, WorkOrder, File
from app1.utils.ebcrypt import md5
from django.core.exceptions import ValidationError
from django.shortcuts import HttpResponse, redirect, render
from django.urls import reverse
from django.http import FileResponse

from ckeditor.fields import RichTextFormField

from django import forms


class workorder_form(forms.ModelForm):
    content = RichTextFormField(label='内容',config_name='default')
    class Meta:
        model = WorkOrder
        fields = ["number", "title", "type",
                  "status", "do_time", "content", "village"]

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
        widget=forms.ClearableFileInput(attrs={"multiple": True, "lay-verify": "file"}),
        label="请选择文件",
    )
    
def workorder_create(request):

    if request.method == "GET":
        form = workorder_form()
        # fileform = file_form()
        return render(request, "workorder_add.html", {"form": form})
    creator = request.session.get("id")
    form = workorder_form(data=request.POST)
    # fileform = file_form(request.POST, request.FILES)
    if form.is_valid():
        # if fileform.is_valid():
        #     files = request.FILES.getlist("file")
        #     workorder_id = request.POST.get("number")
        #     path = os.path.join('./upload', workorder_id)
        #     folder = os.path.exists(path)
        #     print(workorder_id, path)
        #     if not folder:                   #判断是否存在文件夹如果不存在则创建为文件夹
        #         os.makedirs(path)            #makedirs 创建文件时如果路径不存在会创建这个路径

        #     for file in files:
        #         # 写入到服务器本地
        #         destination = open(os.path.join(path, file.name), 'wb+')
        #         for chunk in file.chunks():
        #             destination.write(chunk)
        #         destination.close()
        #         File.objects.create(
        #             workorder_number = workorder_id,
        #             file_name = file.name,
        #             file_path = os.path.join(path, file.name)
        #         )
        workorder_num = form.cleaned_data["number"]
        form.save()
        print(creator)
        WorkOrder.objects.filter(number = workorder_num).update(creator = creator)
        return redirect(reverse("my_workorder"))
    


def workorder_create2(request):

    if request.method == "GET":
        form = workorder_form()
        # fileform = file_form()
        return render(request, "workorder_add2.html", {"form": form})
    form = workorder_form(data=request.POST)
    creator = request.session.get("id")
    # fileform = file_form(request.POST, request.FILES)
    
    if form.is_valid():
        # if fileform.is_valid():
        #     files = request.FILES.getlist("file")
        #     workorder_id = request.POST.get("number")
        #     path = os.path.join('./upload', workorder_id)
        #     folder = os.path.exists(path)
        #     print(workorder_id, path)
        #     if not folder:                   #判断是否存在文件夹如果不存在则创建为文件夹
        #         os.makedirs(path)            #makedirs 创建文件时如果路径不存在会创建这个路径

        #     for file in files:
        #         # 写入到服务器本地
        #         destination = open(os.path.join(path, file.name), 'wb+')
        #         for chunk in file.chunks():
        #             destination.write(chunk)
        #         destination.close()
        #         File.objects.create(
        #             workorder_number = workorder_id,
        #             file_name = file.name,
        #             file_path = os.path.join(path, file.name)
        #         )
        workorder_num = form.cleaned_data["number"]
        form.save()
        WorkOrder.objects.filter(number = workorder_num).update(creator = creator)
        return redirect(reverse("my_workorder2"))
    return render(request, "workorder_add2.html", {"form": form})


def workorder_list(request):
    # if request.session.get("permission") != "超级管理员" and request.session.get("permission") != "贲集村管理员":
    #     return redirect(reverse("no_permission"))
    data_dict = {}
    value = request.GET.get("q")
    if value:
        data_dict["number__contains"] = value
    workorder = WorkOrder.objects.filter(village=1 ,**data_dict).all()
    typelist = []
    statuslist = []

    for i in workorder:
        typelist.append(i.get_type_display())
        statuslist.append(i.get_status_display())


    workorder_e = zip(workorder, typelist, statuslist)
    # print(typelist, statuslist,workorder_e,lengh)
    return render(request, "workorder_list.html", {"workorder": workorder_e})


def workorder_list2(request):
    # if request.session.get("permission") != "超级管理员" and request.session.get("permission") != "蒋庄村管理员":
    #     return redirect(reverse("no_permission2"))
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
    content = RichTextFormField(label='内容',config_name='default')
    # content = forms.CharField(
    #     label="记录内容",
    #     widget=forms.Textarea(attrs={"class": "layui-textarea"})
    # )


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
    if request.session.get("permission") != "超级管理员" and request.session.get("permission") != "贲集村管理员":
        return redirect(reverse("no_permission"))
    record = Record.objects.filter(number=id).all()

    return render(request, "workorder_record.html", {"record": record})


def record2(request, id):
    if request.session.get("permission") != "超级管理员" and request.session.get("permission") != "蒋庄村管理员":
        return redirect(reverse("no_permission2"))
    record = Record.objects.filter(number=id).all()
    return render(request, "workorder_record2.html", {"record": record})


class edit_form(forms.ModelForm):
    class Meta:
        content = RichTextFormField(label='内容',config_name='default')
        model = WorkOrder
        fields = ["number", "title", "type",
                  "status", "do_time", "content", "village"]
        widgets = {
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
    workorder = WorkOrder.objects.filter(id=id).first()
    creator = workorder.creator
    handler_id = str(request.session.get("id"))
    if request.session.get("permission") != "超级管理员" and request.session.get("permission") != "贲集村管理员" and handler_id != creator:
        return redirect(reverse("no_permission"))
    
    handler = UserInfo.objects.filter(id=handler_id).first()
    handler_name = request.session.get("name")
    record = ""
    workorder_dict = {}

    workorder_dict["type"] = workorder.get_type_display()
    workorder_dict["status"] = workorder.get_status_display()
    workorder_dict["do_time"] = workorder.do_time
    workorder_dict["content"] = workorder.content


    if request.method == "GET":
        form = edit_form(instance=workorder)
        fileform = file_form()
        return render(request, "workorder_edit.html", {"workorder": workorder, "form": form})

    form = edit_form(data=request.POST, instance=workorder)
    fileform = file_form(request.POST, request.FILES)
    
  
    
    if form.is_valid():
        

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
    workorder = WorkOrder.objects.filter(id=id).first()
    creator = workorder.creator
    handler_id = str(request.session.get("id"))
    if request.session.get("permission") != "超级管理员" and request.session.get("permission") != "蒋庄村管理员" and handler_id != creator:
        return redirect(reverse("no_permission2"))


    handler = UserInfo.objects.filter(id=handler_id).first()
    handler_name = request.session.get("name")
    record = ""
    workorder_dict = {}

    workorder_dict["type"] = workorder.get_type_display()
    workorder_dict["status"] = workorder.get_status_display()
    workorder_dict["do_time"] = workorder.do_time
    workorder_dict["content"] = workorder.content
    if request.method == "GET":
        form = edit_form(instance=workorder)
        fileform = file_form()
        return render(request, "workorder_edit2.html", {"workorder": workorder, "form": form})

    form = edit_form(data=request.POST, instance=workorder)
    fileform = file_form(request.POST, request.FILES)
    if form.is_valid():
       

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



def file_lis1(request, num):
    workorder = WorkOrder.objects.filter(number=num).first()
    creator = workorder.creator
    handler_id = str(request.session.get("id"))
    if request.session.get("permission") != "超级管理员" and request.session.get("permission") != "贲集村管理员" and handler_id != creator:
        return redirect(reverse("no_permission"))
    workorder_num = num
    if request.method == "GET":
        fileform = file_form()
        file_list = File.objects.filter(workorder_number = workorder_num).all()
        return render(request, "file_list.html",{"file_list":file_list, "fileform": fileform})
    
    fileform = file_form(request.POST, request.FILES)
    

    if fileform.is_valid():
        files = request.FILES.getlist("file")
        path = os.path.join('./upload', str(workorder_num))
        folder = os.path.exists(path)
        print(workorder_num, path)
        if not folder:                   #判断是否存在文件夹如果不存在则创建为文件夹
            os.makedirs(path)            #makedirs 创建文件时如果路径不存在会创建这个路径

        for file in files:
            # 写入到服务器本地
            destination = open(os.path.join(path, file.name), 'wb+')
            for chunk in file.chunks():
                destination.write(chunk)
            destination.close()
            File.objects.create(
                workorder_number = workorder_num,
                file_name = file.name,
                file_path = os.path.join(path, file.name)
            )
    return redirect("/workorder/"+str(workorder_num)+"/filelist")

def file_lis2(request, num):
    workorder = WorkOrder.objects.filter(number=num).first()
    creator = workorder.creator
    handler_id = str(request.session.get("id"))
    if request.session.get("permission") != "超级管理员" and request.session.get("permission") != "蒋庄村管理员" and handler_id != creator:
        return redirect(reverse("no_permission2"))
    
    workorder_num = num
    if request.method == "GET":
        fileform = file_form()
        file_list = File.objects.filter(workorder_number = workorder_num).all()
        return render(request, "file_list2.html",{"file_list":file_list, "fileform": fileform})
    
    fileform = file_form(request.POST, request.FILES)
    

    if fileform.is_valid():
        files = request.FILES.getlist("file")
        path = os.path.join('./upload', str(workorder_num))
        folder = os.path.exists(path)
        print(workorder_num, path)
        if not folder:                   #判断是否存在文件夹如果不存在则创建为文件夹
            os.makedirs(path)            #makedirs 创建文件时如果路径不存在会创建这个路径

        for file in files:
            # 写入到服务器本地
            destination = open(os.path.join(path, file.name), 'wb+')
            for chunk in file.chunks():
                destination.write(chunk)
            destination.close()
            File.objects.create(
                workorder_number = workorder_num,
                file_name = file.name,
                file_path = os.path.join(path, file.name)
            )
    return redirect("/workorder2/"+str(workorder_num)+"/filelist")

def file_download(rerquest, id):
     workorder_num = File.objects.filter(id = id).first().workorder_number
     file_name = File.objects.filter(id = id).first().file_name
     path = os.path.join('./upload',str(workorder_num), file_name)
     file = open(path, 'rb')
     response = FileResponse(file)
     response['Content-Type'] = 'application/octet-stream'
     response['Content-Disposition'] = "attachment;filename=" + file_name # 注意filename不支持中文
     return response


def file_delete1(request, id):
    if File.objects.filter(id =id).exists() :
        workorder_num = File.objects.filter(id = id).first().workorder_number
        file_name = File.objects.filter(id = id).first().file_name
        path = os.path.join('./upload',str(workorder_num), file_name)
        os.remove(path)
        File.objects.filter(id = id).delete()
        return redirect("/workorder/"+str(workorder_num)+"/filelist")
    else :
        return redirect("/workorder/"+str(workorder_num)+"/filelist")
        

def file_delete2(request, id):
    if File.objects.filter(id =id).exists() :
        workorder_num = File.objects.filter(id = id).first().workorder_number
        file_name = File.objects.filter(id = id).first().file_name
        path = os.path.join('./upload',str(workorder_num), file_name)
        os.remove(path)
        File.objects.filter(id = id).delete()
        return redirect("/workorder2/"+str(workorder_num)+"/filelist")
    else :
        return redirect("/workorder2/"+str(workorder_num)+"/filelist")
        


def my_workorder(request):
    data_dict = {}
    value = request.GET.get("q")
    if value:
        data_dict["number__contains"] = value
    id = request.session.get("id")
    workorder = WorkOrder.objects.filter(creator = id, **data_dict, village=1).all()
    typelist = []
    statuslist = []

    for i in workorder:
        typelist.append(i.get_type_display())
        statuslist.append(i.get_status_display())


    workorder_e = zip(workorder, typelist, statuslist)
    return render(request, "my_worklist.html",{"workorder":workorder_e})

def my_workorder2(request):
    data_dict = {}
    value = request.GET.get("q")
    if value:
        data_dict["number__contains"] = value
    id = request.session.get("id")
    workorder = WorkOrder.objects.filter(creator = id, **data_dict, village=2).all()
    typelist = []
    statuslist = []

    for i in workorder:
        typelist.append(i.get_type_display())
        statuslist.append(i.get_status_display())


    workorder_e = zip(workorder, typelist, statuslist)
    return render(request, "my_worklist2.html",{"workorder":workorder_e})
