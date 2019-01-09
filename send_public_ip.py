#!/usr/bin/python
# -*- coding: UTF-8 -*-

import requests
public_ip = requests.get('http://ip.42.pl/raw').text

import smtplib
from email.mime.text import MIMEText
from email.header import Header

# µÚÈý·½ SMTP ·þÎñ
mail_host="smtp.qq.com"  #ÉèÖÃ·þÎñÆ÷
mail_user="81549958"    #ÓÃ»§Ãû
mail_pass=""   #¿ÚÁî


sender = 'wuchenchen1217@gmail.com'
receivers = ['81549958@qq.com']  # ½ÓÊÕÓÊ¼þ£¬¿ÉÉèÖÃÎªÄãµÄQQÓÊÏä»òÕßÆäËûÓÊÏä

message = MIMEText(public_ip, 'plain', 'utf-8')
message['From'] = Header("wuchenchen1217@gmail.com", 'utf-8')
message['To'] =  Header("public_ip(header)", 'utf-8')

subject = 'public_ip(subject)'
message['Subject'] = Header(subject, 'utf-8')

smtpObj = smtplib.SMTP_SSL()
smtpObj.connect(mail_host, 465)    # 25 Îª SMTP ¶Ë¿ÚºÅ

smtpObj.set_debuglevel(1)
smtpObj.ehlo()
smtpObj.starttls()
smtpObj.ehlo()

smtpObj.login(mail_user,mail_pass)
smtpObj.ehlo()

smtpObj.sendmail(sender, receivers, message.as_string())
smtpObj.quit()
print("mail sent successful")
