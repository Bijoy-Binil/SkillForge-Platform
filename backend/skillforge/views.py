from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework import status
from .serializers import UserSerializer
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework.views import APIView

# Create your views here.




class RegisterView(APIView):
    permission_classes = [AllowAny]
    
    def get(self, request):
        users = User.objects.all().values_list('username', flat=True)
        return Response({"users": list(users)})

    
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class ProtectedView(APIView):
    permission_classes = [IsAuthenticated]    

    def get(self,request):
        return Response({"Message":"You are authenticated!!"})
