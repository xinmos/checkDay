const jsdom = require('jsdom');
const {JSDOM} = jsdom;
const {document} = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;
const window = document.defaultView;
const $ = require('jquery')(window); 
//1.登陆获取token
$.ajax({
    type: 'POST',
    url: "https://www.dxever.com/Wxminiprog/Disease/login",
    data: {
            studno: "姓名",
            password: "密码"
        },
    success: function success(data) {
        //console.log(data.data);
        //2.提交数据
        $.ajax({
            type: 'POST',
            url: "https://www.dxever.com/Wxminiprog/Disease/addLog",
            data: {
                      token: data.data,
                      curlocation: "你的城市",
                      goout: "0",
                      hp: "0",
                      ncp: "0",
                      isncp: "0",
                      touchncp: "0",
                      hubei: "0",
                      ps: "0"
                  },
            success: function success(data) {
                //console.log(data);
                console.log("打卡成功");
            },
            dataType: 'json'
        });
    },
    dataType: 'json'
});
