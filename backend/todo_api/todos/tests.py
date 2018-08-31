from django.test import TestCase

from .models import Todo


class TodoModelTest(TestCase):

	@classmethod
	def setUpTestData(cls):
		Todo.objects.create(title='first todo list')
		Todo.objects.create(description="some todo's list items here")

	def test_title_content(self):
		todo = Todo.objects.get(id=1)
		expected_object_name = todo.title
		self.assertEquals(expected_object_name, 'first todo list')

	def test_description_content(self):
		todo = Todo.objects.get(id=2)
		expected_object_name = todo.description
		self.assertEquals(expected_object_name, "some todo's list items here")