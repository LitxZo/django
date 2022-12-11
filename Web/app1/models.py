from django.db import models


class UserInfo(models.Model):
    name = models.CharField(verbose_name="用户名",max_length=32)
    password = models.CharField(verbose_name="密码",max_length=64)
    phonenum = models.BigIntegerField(verbose_name="手机号")
    permission = models.ForeignKey(verbose_name="权限",to="Permission" ,to_field="id",null=True, blank=True, on_delete=models.SET_NULL)

class Permission(models.Model):
    role = models.CharField(max_length=32)
    


# Create your models here.
