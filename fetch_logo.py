import urllib.request, re; html = urllib.request.urlopen('http://www.eswarcollegeofengg.org/').read().decode('utf-8'); print(re.findall(r'src=\"([^\"]+)\"', html))
