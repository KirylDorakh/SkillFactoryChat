from django.shortcuts import render
from django.views.generic import ListView, DetailView

from .models import Chat, Message

from django.shortcuts import render


def index(request):
    return render(request, "chats/index.html")


def room(request, room_name):
    return render(request, "chats/room.html", {"room_name": room_name})


class HomePageView(ListView):
    model = Chat
    context_object_name = 'chats'
    template_name = 'home.html'


class ChatView(DetailView):
    model = Chat
    context_object_name = 'chat'
    template_name = 'chats/chat.html'
