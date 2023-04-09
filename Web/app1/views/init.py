import json

import cv2
from app1.models import UserInfo, address_info
from django.http import HttpResponse, StreamingHttpResponse
from django.shortcuts import redirect, render
from django.urls import reverse

from django import forms


def start(request):

    name = ''
    return render(request, 'start.html', {'name': name})


def index(request):
    address_point = address_info.objects.all()
    address_longitude = []
    address_latitude = []
    address_data = []
    address_url = []
    for i in range(len(address_point)):
        address_longitude.append(address_point[i].longitude)
        address_latitude.append(address_point[i].latitude)
        address_data.append(address_point[i].data)
        address_url.append(address_point[i].url)

    print(address_longitude)
    print(address_latitude)
    print(address_data)
    print(address_url)
    return render(request, 'index.html', {'address_longitude': json.dumps(address_longitude),
                                          'address_latitude': json.dumps(address_latitude),
                                          'address_data': json.dumps(address_data),
                                          'address_url': json.dumps(address_url)})


def index2(request):
    address_point = address_info.objects.all()
    address_longitude = []
    address_latitude = []
    address_data = []
    address_url = []
    for i in range(len(address_point)):
        address_longitude.append(address_point[i].longitude)
        address_latitude.append(address_point[i].latitude)
        address_data.append(address_point[i].data)
        address_url.append(address_point[i].url)

    return render(request, 'index2.html', {'address_longitude': json.dumps(address_longitude),
                                           'address_latitude': json.dumps(address_latitude),
                                           'address_data': json.dumps(address_data),
                                           'address_url': json.dumps(address_url)})


def test_meeting(request):
    return render(request, 'test_meeting.html')


def gen_display(camera):
    """
    视频流生成器功能。
    """
    while True:
        # 读取图片
        ret, frame = camera.read()
        if ret:
            # 将图片进行解码
            ret, frame = cv2.imencode('.jpeg', frame)
            if ret:
                # 转换为byte类型的，存储在迭代器中
                yield (b'--frame\r\n'
                       b'Content-Type: image/jpeg\r\n\r\n' + frame.tobytes() + b'\r\n')


def video(request):
    """
    视频流路由。将其放入img标记的src属性中。
    例如：<img src='https://ip:port/uri' >
    """
    # 视频流相机对象
    camera = cv2.VideoCapture(
        "C:/SSD/Vs Code/django/Web/static/video/video.mp4")
    # 使用流传输传输视频流
    return StreamingHttpResponse(gen_display(camera), content_type='multipart/x-mixed-replace; boundary=frame')
