import sys
from PyQt5 
from bs4 import BeautifulSoup
import urllib.request

#import lxml

source = urllib.request.urlopen('https://pythonprogramming.net/parsememcparseface/')
soup = BeautifulSoup(source, 'lxml')
js_test = soup.find('p', class_='jstest')
print(js_test.text)