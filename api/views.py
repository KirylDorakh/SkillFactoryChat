from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response

from chats.models import Chat
from django.contrib.auth import get_user_model

# chat
from .serializers import ChatSerializer, ChatNameUpdateSerializer, ChatMembersUpdateSerializer
# user
from .serializers import UserSerializer, AvatarUpdateSerializer, UsernameUpdateSerializer

# from .permissions import IsAuthorOrReadOnly
# permission_classes = (IsAuthorOrReadOnly,)


class ListChat(generics.ListCreateAPIView):
    queryset = Chat.objects.all()
    serializer_class = ChatSerializer


class PrivateChat(APIView):

    def get(self, requset):
        members_list = requset.GET.getlist('members')
        members_list = [int(elem) for elem in members_list]
        print(requset.GET, f'members_list={members_list}')
        list_of_chats = Chat.objects.filter(private=True).filter(members__id__in=members_list)

        if list_of_chats:
            data = []
            for chat in list_of_chats:
                print(set(members_list), set(chat.members.values_list('id', flat=True)))
                if set(chat.members.values_list('id', flat=True)) == set(members_list):
                    data.append({
                        'id': chat.id,
                        'title': chat.title,
                        'members': [member.id for member in chat.members.all()],
                        'author': chat.author.id,
                        'private': chat.private
                    })
                    break
            return Response(data)
        return Response({'detail': 'chat not found'}, status=404)


class DetailChat(generics.RetrieveUpdateDestroyAPIView):
    queryset = Chat.objects.all()
    serializer_class = ChatSerializer


class ChatNameUpdateView(generics.UpdateAPIView):
    serializer_class = ChatNameUpdateSerializer
    queryset = Chat.objects.all()


class ChatMembersUpdateView(generics.UpdateAPIView):
    serializer_class = ChatMembersUpdateSerializer
    queryset = Chat.objects.all()


class ListUser(generics.ListAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer


class DetailUser(generics.RetrieveUpdateDestroyAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer


class AvatarUpdateView(generics.UpdateAPIView):
    serializer_class = AvatarUpdateSerializer
    queryset = get_user_model().objects.all()


class UsernameUpdateView(generics.UpdateAPIView):
    serializer_class = UsernameUpdateSerializer
    queryset = get_user_model().objects.all()
