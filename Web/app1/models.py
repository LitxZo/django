from django.db import models


class UserInfo(models.Model):
    name = models.CharField(verbose_name="用户名",max_length=32)
    password = models.CharField(verbose_name="密码",max_length=64)
    phonenum = models.BigIntegerField(verbose_name="手机号")
    permission = models.ForeignKey(verbose_name="权限",to="Permission" ,to_field="id",default=2,on_delete=models.CASCADE)

class Permission(models.Model):
    role = models.CharField(max_length=32)
    

class message(models.Model):
    sender_id = models.CharField(verbose_name="发信人id", max_length=32)
    recipient_id = models.CharField(verbose_name="收信人id", max_length=32)
    sender = models.CharField(verbose_name="发信人", max_length=32)
    recipient = models.CharField(verbose_name="收信人", max_length=32)
    message = models.TextField(verbose_name="信息内容")
    time = models.TimeField(verbose_name="发送时间",auto_now=True)

