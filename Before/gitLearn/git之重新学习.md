## git 命令

### 环境配置

- 设置用户信息
  - 设置用户名称
    - git config --global user.name "用户名"
  - 设置用户邮箱
    - git config --global user.email "用户邮箱"
- 查看本地 git 配置
  - git config --list
- 初始化一个本地仓库
  - git init 在当前目录执行就初始化当前文件夹
  - git clone 远程仓库地址 相对于第一种的创建仓库的方式
- git 生成密钥命令
  - ssh-keygen -t rsa -C "victordu6694@gmail.com"
- git 暂存区 工作区（工作目录） 版本库
  - 查看 git 仓库的状态
    - git status
    - git status -s 输出简洁内容
  - 将未跟踪的文件加入到暂存区
    - git add 指定文件名
    - git add . 将所有未跟踪文件加入到暂存区
  - 将加入到暂存区的文件恢复致未跟踪状态(取消暂存)
    - git reset HEAD 文件名
  - 将暂存区的文件添加到版本库
    - git commit -m '提交的消息'
