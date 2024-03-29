# Generated by Django 4.1 on 2023-03-02 08:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0015_file'),
    ]

    operations = [
        migrations.AddField(
            model_name='file',
            name='workorder_number',
            field=models.CharField(default=1, max_length=10, verbose_name='工单号'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='file',
            name='file_name',
            field=models.CharField(max_length=50, verbose_name='文件名'),
        ),
        migrations.AlterField(
            model_name='file',
            name='file_path',
            field=models.CharField(max_length=100, verbose_name='文件目录'),
        ),
    ]
