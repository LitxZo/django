from django.db import models


class UserInfo(models.Model):
    name = models.CharField(max_length=32)
    password = models.CharField(max_length=64)
    phonenum = models.BigIntegerField()
    permission = models.ForeignKey(to="Permission" ,to_field="id",null=True, blank=True, on_delete=models.SET_NULL)

class Permission(models.Model):
    role = models.CharField(max_length=32)
    


# Create your models here.
