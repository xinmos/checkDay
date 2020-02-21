# checkDay
大学印象每日健康报送自动打卡

### 准备工作
1. 复制代码修改姓名、密码、城市
2. [安装nodejs](https://www.runoob.com/nodejs/nodejs-install-setup.html)
3. 执行以下代码安装依赖
```
npm install jquery
npm install jsdom
```

### 系统自动执行
#### linux系统下
- 键入：crontab  -e
- 添加调度任务 0 8 * * * node xxx.js
  - 举例如下：
  
|分|时|日|月|星期|命令|说明|
|:----:|:----:|:----:|:----:|:----:|:----:|:----:|
|5|*|*|*|*|ls|指定每小时的第5分钟执行一次ls命令|
|30|5|*|*|*|ls|指定每天的 5:30 执行ls命令|
|30|7|8|*|*|ls|指定每月8号的7：30分执行ls命令|
|30|5|8|6|*|ls|指定每年的6月8日5：30执行ls命令|
|30|6|*|*|0|ls|指定每星期日的6:30执行ls命令[注：0表示星期天，1表示星期1]|

- 查看任务 crontab -l
##### [更多cron知识](http://blogjava.net/freeman1984/archive/2010/09/23/332715.html)
