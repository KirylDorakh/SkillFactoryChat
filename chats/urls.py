from django.urls import path

from .views import (HomePageView,
                    ChatView,
                    )

urlpatterns = [
    path('', HomePageView.as_view(), name='home'),
    path('chat/<int:pk>/', ChatView.as_view(), name='chat'),

]
