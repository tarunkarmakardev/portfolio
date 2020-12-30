from django.shortcuts import render, redirect
from .models import Contact, Skill, Project, Resume
from .forms import ContactForm

from django.conf import settings 
from django.core.mail import send_mail, EmailMessage 
from django.template.loader import render_to_string

# Email notification to admin:

def notify_admin(firstname, email, message):
    subject, from_email, to = "Thank you for visiting Tarun Karmakar's portfolio", settings.EMAIL_HOST_USER, settings.EMAIL_HOST_USER
    text_content = f"Hello Tarun!, {firstname} just contacted you. They said: {message}. Email: {email} "
    html_message = render_to_string('core/email_templates/notify_admin_email.html', {'firstname': firstname, 'message':message, 'email':email})
    send_mail( subject, text_content, from_email, [to], html_message=html_message )





# Create your views here.-----------------------------------------


def index(request):

    skills = Skill.objects.all()
    projects = Project.objects.all()
    try:
        resume= Resume.objects.latest('date')
    except:
        resume= " "

    form = ContactForm()

    if request.method == "POST":
        form = ContactForm(request.POST)
        firstname= request.POST['firstname']
        email_address = request.POST['email']
        visitor_message = request.POST['message']

        if form.is_valid():
            form.save()
            # Sending email to user
            subject = "Thank you for visiting Tarun Karmakar's portfolio"
            message = f"Hello {firstname}, your message has been successfully received and I'll get back to you soon."
            email_from = settings.EMAIL_HOST_USER 
            recipient_list = [email_address, ] 
            html_message = render_to_string('core/email_templates/thankyou_email.html', {'firstname': firstname})
            send_mail( subject, message, email_from, recipient_list, html_message=html_message )
            # Sending email to admin
            notify_admin(firstname, email_address, visitor_message)

            return redirect('thankyou')
        
    context = {
        'skills': skills,
        'projects': projects,
        'resume': resume,
        'form': form
    }   

    return render(request, "core/index.html", context)


def message_sent(request):

    return render(request, "core/thankyou.html")
