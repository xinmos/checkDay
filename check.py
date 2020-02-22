import requests

url = "https://www.dxever.com/Wxminiprog/Disease/login"
param = {"studno": "姓名","password": "密码"}
headers = {'x-requested-with': 'XMLHttpRequest'}
r = requests.post(url, data=param, headers=headers)

token = r.json()['data']

urlCheck = "https://www.dxever.com/Wxminiprog/Disease/addLog"
checkParams = {
		  "token": token,
		  "curlocation": "你的住址",
		  "goout": "0",
                  "hp": "0",
                  "ncp": "0",
                  "isncp": "0",
                  "touchncp": "0",
                  "hubei": "0",
                  "ps": ""
    }
r2 = requests.post(urlCheck, data=checkParams, headers=headers)

print(r2.json()['meta']['message'])
