# HTML5
## 语义标签使用 （块级）ie9及以上兼容
    - header 头部
    - nav 导航
    - main 主体内容
    - article 左侧
    - aside 右侧
    - footer 底部
## 表单type新增属性
    - email 邮箱属性
    - tel 电话号码 移动端打开input自动弹出数字键盘
    - url 输入网址属性   必须输入网址格式
    - number 数字属性 input右边出现加减按钮 只能输入数字小数点 配合 max：min：限制数字范围
    - search 可清空搜索框
    - range 范围滑条 配合max min
    - color 颜色拾取
    - time 时间选取
    - date 年月日时间选取
    - datetime 日期时间 (只有在mac系统下的safari浏览器上兼容)
    - datetime-local 日期时间控件
    - month 月
    - week 周
    - file 上传文件
## 表单其他新增属性
    - placeholder 提示文本
    - autofocus 网页打开输入框自动获取焦点
    - autocomplete 自动提示 两个前提： 一个是：表单成功提交过 另外一个是input要有一个name属性
    - required 必须输入字段 
    - pattern 正则表达式验证
    - multiple 配合file添加多个文件 配合Email添加多个邮箱地址以,号分割
    - form 属性联动form表单值为form表单id值
## 新增表单元素
    - <form action="">
            <!-- 可以输入的下拉选择框 -->
            专业：<input type="text" list="sub">
            <!-- 使用datalist创建选择列表 -->
            <datalist id="sub">
                <!-- 创建选项值：value：具体的值 label:提示信息，辅助值 -->
                <option value="前端" label="人数多">
                <option value="java" label="不知到"></option>
                <option value="c" label="这个"></option>
                <option value="php" label="也是"></option>
            </datalist>

            <!-- 可以输入的下拉选择框 -->
            网址：<input type="url" list="url">
            <!-- 使用datalist创建选择列表 -->
            <datalist id="url">
                <!-- 创建选项值：value：具体的值  如果input的type值为url 这里的vaule必须要有http label:提示信息，辅助值 -->
                <option value="http://www.baidu.com"></option>
                <option value="http://www.souhu.com"></option>
                <option value="http://www.douban.com"></option>
                <option value="http://www.jingdong.com"></option>
            </datalist>
        </form>
## 新增表单事件
    - oninput 事件  输入框的值每改变一次该事件触发一次    包括复制粘贴
    - oninvalid 当验证不通过的时候触发
## 进度条
    - progress
    - meter

## 新增的多媒体标签
    - audio 播放音频
        - src 文件地址
        - controls 音频控制器面板
        - autoplay 是否自动播放
        - loop 循环
    - video 播放视频
        - src 文件地址
        - controls 音频控制器面板
        - autoplay 是否自动播放
        - loop 循环
        - widht 宽度
        - height 高度
        - poster 设置封面 默认是视频播放的第一帧
    - source 配合video使用 当文件格式不支持当前浏览器可以播放的文件格式时可以添加多个文件供浏览器选择
## 获取元素 dom操作
    - querySelector 获取满足条件的一个元素
    - querySelectorAll 获取满足条件的一组元素
## 操作元素类样式 配合classlist使用
    - add 为元素添加指定名称的样式，一次只能添加一个样式
    - remove 为元素移除指定名称的样式（不是移除class属性）
    - toggle 切换元素的样式，如果之前没有指定名称的样式则添加，如果有则移除
    - contains 判断元素是否包含指定名称的样式，返回true/false
## 自定义属性
    - 定义 规范 data-开头 后边必须有一个字符  名称都使用小写 不要有任何特殊字符 不要使用纯数字
    - 取值 必须使用驼峰命名法将data后边的名称连接获取
## 网络监听接口
    - ononline:网络接通之后触发这个事件
    - onoffline:网络断开时触发这个事件
## 全屏接口
    - 