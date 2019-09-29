# css3
## 选择器
   ### 基本选择器及其扩展
   - 通配符选择器
      *
   - id选择器
      `#`
   - 类选择器
      .
   - 元素选择器
      元素名
   - 后代选择器
      空格
   - 分组选择器
      ，(结合符)
   - 直接后代选择器
      >
   ### css3属性选择器
   - 存在和值属性选择器
      - E[attr] 含有attr属性的E元素 不管值为什么
      - E[attr='val'] 选择属性attr值为val的元素
      - E[attr~='val'] 选择属性attr值中包含val的元素
   - 子串值属性选择器
      - E[attr|='val'] 选择attr属性的值以val(包含val)或val-开头的元素
      - E[attr^='val'] 选择attr属性的值以val(包含val)开头的元素
      - E[attr$='val'] 选择attr属性的值以val(包含val)结尾的元素
      - E[attr*='val'] 选择attr属性的值值中包含val的元素
   - 伪类和伪元素选择器
      - 链接伪类 注 :link, :visited, :target 是用于链接元素的
         - :link 表示一个超链接，并指向一个未访问的地址的所有锚
         - :visited 表示一个超链接，并指向一个已访问的地址的所有锚
         - :target 表示一个元素  这个元素是uri后边的片段
      - 动态伪类
         - :hover 鼠标划过的时候
         - :active 鼠标点上去的时候
      - 表单伪类
         - :checked 选框选中之后
      - 结构性伪类
         - :nth-child(n) 顺数第n个子元素
         - :frist-child 第一个子元素
         - :last-child  最后一个子元素
         - :nth-last-child(n) 倒数第n个子元素
         - :only-child 只能有一个子元素
         - :nth-of-type(n) 顺数找到第n个该类型的元素
         - :frist-of-type 第一个该类型的元素
         - :last-of-type 最后一个该类型的元素
         - :nth-last-of-type(n) 倒数找到第n个该类型元素
         - :only-of-type 只有一个该类型元素
         - :not 排除元素选择器
         - :empty 为空选择器
      - 伪元素选择器
         - ::before 元素之前的伪类元素
         - ::after 元素之后的伪类元素
         - ::frist-letter 元素的第一个字符
         - ::frist-line 元素的第一行
         - ::selection 鼠标选中文字改变样式
## 自定义字体
## 新的UI方案
## 过渡
## 2D/3D变形
## 动画
## 布局扩展
