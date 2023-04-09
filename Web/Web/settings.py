"""
Django settings for Web project.

Generated by 'django-admin startproject' using Django 4.1.3.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.1/ref/settings/
"""
import os
from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = "django-insecure-g&175=7mpi9!x3or*p*4^8z%r@ityb4lzi@4^*fw@f2vet$__v"

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "app1.apps.App1Config",
    'ckeditor',
]
LOGIN_URL = "/login/"
MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "app1.middleware.auth.validation",
]

ROOT_URLCONF = "Web.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "Web.wsgi.application"


# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

DATABASES = {
    'default': {
        # 连接数据库类型 在末尾写入mysql即可
        'ENGINE': 'django.db.backends.mysql',
        # 数据库地址
        'HOST': '127.0.0.1',
        # 端口
        'PORT': 3306,
        # 数据库名
        'NAME': 'vmanage',
        # 用户
        'USER': 'root',
        # 密码
        'PASSWORD': '123'
    }
}


# Password validation
# https://docs.djangoproject.com/en/4.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {"NAME": "django.contrib.auth.password_validation.MinimumLengthValidator", },
    {"NAME": "django.contrib.auth.password_validation.CommonPasswordValidator", },
    {"NAME": "django.contrib.auth.password_validation.NumericPasswordValidator", },
]


# Internationalization
# https://docs.djangoproject.com/en/4.1/topics/i18n/

# LANGUAGE_CODE = "en-us"
LANGUAGE_CODE = "zh-hans"

TIME_ZONE = "UTC"

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.1/howto/static-files/

STATIC_URL = "/static/"
STATICFILES_DIRS = [
    # 把新增加的添加到内置的STATICFILES_DIRS内
    os.path.join(os.path.join(BASE_DIR, 'static')),
]


# Default primary key field type
# https://docs.djangoproject.com/en/4.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

# CKEDITOR_CONFIGS = {
#     # django-ckeditor默认使用default配置
#     'default': {
#         # 编辑器宽度自适应
#         'width':'auto',
#         'height':'300px',
#         # tab键转换空格数
#         'tabSpaces': 4,
#         # 工具栏风格
#         'toolbar': 'Custom',
#         # 工具栏按钮
#         'toolbar_Custom': [
#             # 预览、表情
#             ['Preview','Smiley'],
#             # 字体风格
#             ['Bold', 'Italic', 'Underline', 'RemoveFormat', 'Blockquote'],
#             # 字体颜色
#             ['TextColor', 'BGColor'],
#             #格式、字体、大小
#             ['Format','Font','FontSize'],
#             # 链接
#             ['Link', 'Unlink'],
#             # 列表
#             ['Image', 'NumberedList', 'BulletedList'],
#             #居左，居中，居右
#             ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
#             # 最大化
#             ['Maximize']
#         ],
#         # 加入代码块插件
#         'extraPlugins': ','.join(['codesnippet','image2','filebrowser','widget', 'lineutils']),
#     },
#     #评论
#     'comment': {
#         # 编辑器宽度自适应
#         'width': 'auto',
#         'height': '140px',
#         # tab键转换空格数
#         'tabSpaces': 4,
#         # 工具栏风格
#         'toolbar': 'Custom',
#         # 工具栏按钮
#         'toolbar_Custom': [
#             # 表情 代码块
#             ['Smiley', 'CodeSnippet'],
#             # 字体风格
#             ['Bold', 'Italic', 'Underline', 'RemoveFormat', 'Blockquote'],
#             # 字体颜色
#             ['TextColor', 'BGColor'],
#             # 链接
#             ['Link', 'Unlink'],
#             # 列表
#             ['NumberedList', 'BulletedList'],
#         ],
#         # 加入代码块插件
#         'extraPlugins': ','.join(['codesnippet']),
#     }
# }
