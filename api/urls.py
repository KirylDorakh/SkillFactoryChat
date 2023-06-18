from django.urls import path
from .views import ListChat, DetailChat, ListUser, DetailUser, AvatarUpdateView

urlpatterns = [
    path('', ListChat.as_view()),
    path('<int:pk>/', DetailChat.as_view()),

    path('users/', ListUser.as_view()),
    path('users/<int:pk>', DetailUser.as_view()),
    path('users/avatar/<int:pk>', AvatarUpdateView.as_view()),
]
