# Generated by Django 4.1.3 on 2022-12-16 14:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("app1", "0007_userinfo_village"),
    ]

    operations = [
        migrations.AlterField(
            model_name="userinfo",
            name="phonenum",
            field=models.CharField(max_length=64, verbose_name="手机号"),
        ),
    ]
