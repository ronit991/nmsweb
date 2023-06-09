from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse, JsonResponse

# Create your views here.
def home(request):
    context = {}
    template = loader.get_template( 'home.html' )

    return HttpResponse( template.render(context, request) )

def newProjectNotification(request):
    statusMsg = 'Success'
    statusCode = 200
    try:
        name    = request.GET['clientName']
        company = request.GET['clientCompany']
        email   = request.GET['clientEmail']
        phoneNo = request.GET['clientPhoneNo']
        message = request.GET['clientMessage']
        
        print(name)
        print(company)
        print(email)
        print(phoneNo)
        print(message)
    except:
        statusMsg = 'Unexpected Server Error'
        statusCode = 500
    
    return JsonResponse({'status': statusMsg}, status = statusCode)


def about(request):
    context = {}
    template = loader.get_template( 'about.html' )

    return HttpResponse( template.render(context, request) )


def test(request):
    context = {}
    template = loader.get_template( 'test.html' )

    return HttpResponse( template.render(context, request) )