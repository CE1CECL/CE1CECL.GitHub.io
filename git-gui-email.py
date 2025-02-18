#!/usr/bin/python2
import sys
import webbrowser
try:
	from urllib.parse import quote
except:
	from urllib import quote
if len(sys.argv) > 1:
	to = sys.argv[1]
else:
	to = ''
for line in sys.stdin:
	line = line.strip()
	if line.startswith('Subject:'):
		subject = line[len('Subject:'):].strip()
		break
body = ''
for line in sys.stdin:
	body += line
webbrowser.open('mailto:?To={}&Subject={}&Body={}'.format(quote(to), quote(subject), quote(body)))
