from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

posts = {
    "header":{
        "alg": "HS256",
        "typ": "JWT"
    },
    "payload":{
        "sub": "1234567890",
        "name": "John Doe",
        "iat": 1516239022
    },
    "verify_signature":{
        "secret_key":"your-256-bit-secret",
        "secret_value":True,
    }
}

def home(request):
    # return HttpResponse('test')
    return render(request, 'index.html')
