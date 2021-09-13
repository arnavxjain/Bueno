from bs4 import BeautifulSoup
import requests
import re

lat = 19
lon = 72

MAP = f"https://www.google.com/maps/search/cafe+near+me/@{lat},{lon},15z/data=!3m1!4b1"
page = requests.get(MAP).text

doc = BeautifulSoup(page, "html.parser")

pageText = doc.find(class_="a4gq8e-aVTXAb-haAclf-jRmmHf-hSRGPd")

# results classname
# class="a4gq8e-aVTXAb-haAclf-jRmmHf-hSRGPd"