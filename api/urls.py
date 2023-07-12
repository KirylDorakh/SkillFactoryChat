from django.urls import path
from .views import (ListChat, DetailChat, PrivateChat, ChatNameUpdateView, ChatMembersUpdateView,
                    ListUser, DetailUser, AvatarUpdateView, UsernameUpdateView)

urlpatterns = [
    path('', ListChat.as_view()),
    path('chat/<int:pk>/', DetailChat.as_view()),
    path('privatechats/', PrivateChat.as_view()),
    path('chat/title/<int:pk>/', ChatNameUpdateView.as_view()),
    path('chat/members/<int:pk>/', ChatMembersUpdateView.as_view()),

    path('users/', ListUser.as_view()),
    path('users/<int:pk>', DetailUser.as_view()),
    path('users/avatar/<int:pk>', AvatarUpdateView.as_view()),
    path('users/username/<int:pk>', UsernameUpdateView.as_view()),
]
