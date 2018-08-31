from rest_framework import generics

from .models import Todo

from .serializers import TodoSerializer

# two views will list all our todos 
# and provide a detail view of a single todo object

class ListTodo(generics.ListCreateAPIView):
	queryset = Todo.objects.all()
	serializer_class = TodoSerializer

class DetailTodo(generics.RetrieveUpdateDestroyAPIView):
	queryset = Todo.objects.all()
	serializer_class = TodoSerializer