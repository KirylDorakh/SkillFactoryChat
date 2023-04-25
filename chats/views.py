from django.shortcuts import render
from django.views.generic import ListView, DetailView

from .models import Chat, Message


class HomePageView(ListView):
    model = Chat
    context_object_name = 'chats'
    template_name = 'home.html'


class ChatView(DetailView):
    model = Chat
    context_object_name = 'chat'
    template_name = 'chats/chat.html'
