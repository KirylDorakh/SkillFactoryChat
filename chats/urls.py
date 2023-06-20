from django.urls import path

from .views import (HomePageView,
                    ChatView,
                    index, room
                    )

urlpatterns = [
    path('', HomePageView.as_view(), name='home'),
    path('chat/<int:pk>/', ChatView.as_view(), name='chat'),

    # tutorial
    path('index', index, name='index'),
    path('index/<str:room_name>/', room, name="room"),
]
