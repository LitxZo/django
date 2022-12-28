# Generated by Django 4.1.3 on 2022-12-15 12:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("app1", "0006_village"),
    ]

    operations = [
        migrations.AddField(
            model_name="userinfo",
            name="village",
            field=models.ForeignKey(
                default=1,
                on_delete=django.db.models.deletion.CASCADE,
                to="app1.village",
                verbose_name="所属村落",
            ),
        ),
    ]