from django.db import models

from ckeditor.fields import RichTextField

class UserInfo(models.Model):
    name = models.CharField(verbose_name="用户名", max_length=32)
    password = models.CharField(verbose_name="密码", max_length=64)
    phonenum = models.CharField(verbose_name="手机号", max_length=64)

    permission = models.ForeignKey(
        verbose_name="权限", to="Permission", to_field="id", default=2, on_delete=models.CASCADE)
    village = models.ForeignKey(
        verbose_name="所属村落", to="village", to_field="id", default=1, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Permission(models.Model):
    role = models.CharField(max_length=32)

    def __str__(self):
        return self.role


class village(models.Model):
    village = models.CharField(max_length=32)

    def __str__(self):
        return self.village


class message(models.Model):
    sender_id = models.CharField(verbose_name="发信人id", max_length=32)
    recipient_id = models.CharField(verbose_name="收信人id", max_length=32)
    sender = models.CharField(verbose_name="发信人", max_length=32)
    recipient = models.CharField(verbose_name="收信人", max_length=32)
    message = models.TextField(verbose_name="信息内容")
    time = models.DateTimeField(verbose_name="发送时间", auto_now_add=True)


class WorkOrder(models.Model):
    type_choices = (('0', '类型1'), ('1', '类型2'), ('2', '类型3'), ('3', '类型4'))
    status_choices = (('0', '工单已退回'), ('1', '新建-保存'), ('2', '提交-等待审批'),
                      ('3', '已审批-等待执行'), ('4', '已执行-等待确认'), ('5', '工单已完成'))
    number = models.CharField(max_length=10, verbose_name='工单号')
    title = models.CharField(max_length=50, verbose_name='标题')
    type = models.CharField(
        max_length=10, choices=type_choices, default='0', verbose_name='工单类型')
    status = models.CharField(
        max_length=10, choices=status_choices, default='0', verbose_name='工单状态')
    do_time = models.DateTimeField(default='', verbose_name='安排时间')
    add_time = models.DateTimeField(auto_now_add=True, verbose_name='创建时间')
    content = RichTextField( verbose_name='工单内容')
    village = models.ForeignKey(
        verbose_name="所属村落", to="village", to_field="id", default=1, on_delete=models.CASCADE)
    
class File(models.Model):
    workorder_number = models.CharField(max_length=10, verbose_name='工单号', null= False)
    file_name = models.CharField(max_length=50 ,verbose_name='文件名')
    file_path = models.CharField(max_length=100, verbose_name='文件目录')

class Record(models.Model):
    handler = models.ForeignKey(
        verbose_name="处理人", to="UserInfo", to_field="id", on_delete=models.CASCADE)
    content = RichTextField(verbose_name='处理记录')
    number = models.ForeignKey(
        verbose_name="工单id", to="WorkOrder", to_field="id", on_delete=models.CASCADE)
    handle_time = models.DateTimeField(auto_now_add=True, verbose_name='处理时间')


class address_info(models.Model):
    longitude = models.FloatField()
    latitude = models.FloatField()
    data = models.CharField(max_length=255)
    url = models.CharField(max_length=255)