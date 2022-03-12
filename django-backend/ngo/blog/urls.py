from django.urls import path
from . import views
from django.conf import settings

urlpatterns = [
    # path('register/', views.RegisterAPI.as_view(), name = 'register'),
    # path('login/', views.LoginAPI.as_view(), name = 'login'),
    path('room/',views.room_list, name = 'room'),
    path('messages/<str:id>/', views.room_msgs, name ='msg'),
    path('slots/', views.booking_list, name= 'slots'),
    path('user/', views.user_list, name= 'users')
]