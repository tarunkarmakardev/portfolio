from django.contrib import admin
from .models import Contact, Skill, Project, Resume

# Register your models here.


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('firstname', 'lastname', 'email', 'message')
    list_display_links = ('firstname', 'lastname', 'email', 'message')
    list_filter = ('firstname', 'lastname', 'email')
    search_fields = ['email', 'message']


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('skill_name', 'icon_html')
    list_display_links = ('skill_name', 'icon_html')


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'proj_url', 'github_url')
    list_display_links = ('title', 'proj_url', 'github_url')
    list_filter = ('title', 'proj_url', 'github_url')
    search_fields = ['description', 'title']


@admin.register(Resume)
class Resume(admin.ModelAdmin):
    list_display = ('date',)
    readonly_fields = ('date',)
