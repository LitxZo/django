from django.shortcuts import render


def start(request):

    name = '甘雨'
    return render(request, 'start.html', {'name': name})


def index(request):
    return render(request, 'layout.html')

def test_meeting(request):
    return render(request, 'test_meeting.html')
# Create your views here.
