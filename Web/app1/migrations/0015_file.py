# Generated by Django 4.1 on 2023-03-02 08:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0014_address_info'),
    ]

    operations = [
        migrations.CreateModel(
            name='File',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file_name', models.CharField(max_length=50)),
                ('file_path', models.CharField(max_length=100)),
            ],
        ),
    ]
