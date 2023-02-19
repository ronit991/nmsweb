from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse

# Create your views here.
def home(request):
    context = {}
    template = loader.get_template( 'home.html' )

    return HttpResponse( template.render(context, request) )