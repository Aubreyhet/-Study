# git 学习
   - ## 一、起步
     - ### 关于版本控制
        什么是版本控制？我们为什么要关心它？版本控制是一种记录一个或若干文件内容变化，以便将来查询特定版本修订情况的系统。
     - ### Git简史
     - ### Git基础
       - #### 直接记录快照，而非差异比较

         Git和其他版本控制系统的主要差别在于，git只关心文件数据的整体是否发生变化，而大多数其他系统则只关心文件内容的具体差异。这类系统每次记录有哪些文件作了更新，以及都更新了哪些行的什么内容，如图

         ![图1-1](../assets/0104.png '图1-1')
    
         图1-1中其他系统在每个版本中记录着各个文件的机体差异<br>
         git 并不保存这些变化前后的差异数据。实际上，git更像是把变化的文件作快照后就在一个微型的文件系统中。每次提交更新时他会纵览一遍所有文件的指纹信息并对文件作一快照，然后保存一个指向这次快照的索引为提高性能，若文件没有变化，git不会再次保存，而只对上次保存的快照作一链接。git的工作就像下图1-2

         ![图1-2](../assets/0104.png '图1-2')

         图1-2 git  保存每次更新时的文件快照<br>
         这是Git同其他系统的重要区别。他完全颠覆了传统版本的控制的套路，并对各个环节的实现方式作了新的设计。git更像是个小型的文件系统，但他同时还提供了许多以此为基础的超强工具，而不是一个简单的VCS。

       - #### 近乎所有操作都是本地操作

         在git中绝大多数操作都只需要访问本地文件和资源，不用联网。但如果用CVCS的话，差不多所有操作都需要联网。因为git在本地磁盘上就保存着所有当前项目的历史更新，所以处理起来飞快。<br>
         举个例子，如果要浏览器项目的历史更新摘要，git不用跑到外边的服务器上去取数据回来，而直接从本地数据库读取后展示给你看。所以任何时候你都可以马上翻阅，无需等待。如果想要看当前版本的文件和一个月前的版本之间有何差异，git会取出一个月前的快照和当前文件作一次差异运算， 而不用请求远程服务器来做这件事，或是把老版本的文件拉到本地来做比较。<br>
       - #### 时刻保持数据完整性

         在保存到git之前所有的数据都要进行内容的校验和计算，并将此结果作为数据的唯一标识和索引，换句话说，不可能在你修改了文件或者目录之后，git一无所知。这项特性为git的设计哲学，建在整体架构的最底层。所以如果文件在传输时变得不完整或者磁盘损坏导致文件数据缺失，git都能立即觉察。<br>
         git使用SHA-1算法计算数据的校验和，通过对文件的内容或者目录的结构计算出一个SHA-1哈希值，作为指纹字符串。该字符串由40个十六进制字符（0-9及a-f）组成，看起来就像是<br>
          ` 24b9da6552252987aa493b52f8696cd6d3b00373`<br>
         git 的工作完全依赖于指纹字符串，所以你会经常看到这样的哈希值。实际上所有保存在git数据库里边的东西都是用此哈希值来作索引的，而不是靠文件名。
       - #### 多数操作仅添加数据
        
         常用的git操作大多仅仅是把数据添加到数据库。因为任何一种不可逆的操作，比如删除数据，都会使回退或者重现历史版本变得困难重重。在别的VCS中若还未提交更新，就有可能丢失或者混淆修改的内容，但在git中，一单提交快照之后就完全不用担心丢失数据，特别是养成定期推送到其他仓库的习惯的话
       - #### 文件的三种状态 

        
     - ### 安装Git
       - #### 从源代码安装git

          若是条件允许，从源代码安装有很多好处，至少可以安装最新的版本。Git 的每个版本都在不断尝试改进用户体验，所以能通过源代码自己编译安装最新版本就再好不过了。有些 Linux 版本自带的安装包更新起来并不及时，所以除非你在用最新的 distro 或者 backports，那么从源代码安装其实该算是最佳选择。

          Git 的工作需要调用 curl，zlib，openssl，expat，libiconv 等库的代码，所以需要先安装这些依赖工具。在有 yum 的系统上（比如 Fedora）或者有 apt-get 的系统上（比如 Debian 体系），可以用下面的命令安装：<br>
          ```
          $ yum install curl-devel expat-devel gettext-devel \
            openssl-devel zlib-devel

          $ apt-get install libcurl4-gnutls-dev libexpat1-dev gettext \
            libz-dev libssl-dev
          ```
          之后从下边的git官方下载最新版本源代码<br>
          ` http://git-scm.com/download`<br>
          然后编译并安装：<br>
          ```
          $ tar -zxf git-1.7.2.2.tar.gz
          $ cd git-1.7.2.2
          $ make prefix=/usr/local all
          $ sudo make prefix=/usr/local install
          ```
          现在就可以使用git命令了，用git把git项目仓库克隆到本地，以便日后随时更新<br>
          ` $ git clone git://git.kernel.org/pub/scm/git/git.git`<br>

       - #### 在linux上安装git
         如果在Linux上安装预编译好的git二进制安装包，可以直接使用系统提供的包管理工具。在Fedora上用yum安装：<br>
         ` $ yum install git-core`<br>
         在 Ubuntu 这类 Debian 体系的系统上，可以用 apt-get 安装：<br>
         ` $ apt-get install git`<br>
       - #### 在mac上安装
         在mac上安装有两种方法最简单的是用git图形化工具安装，如图1-3 ，下载地址：<br>
         ` http://sourceforge.net/projects/git-osx-installer/`<br>
         ![图1-3](../assets/0106.png '图1-3') <br>
         另外一种是MacPorts(` http://www.macports.org`)安装。如果已经安装好了macports，使用以下命令安装git：<br>
         ` $ sudo port install git-core +svn +doc +bash_completion +gitweb` <br>
         这种方式不需要自己安装依赖库了<br>
       - #### 在windows上安装git
         在windows上安装git有一个叫msysGit项目提供了安装包，可以到github的页面上下载exe文件并运行：<br>
         `http://msysgit.github.com/`<br>
         完成安装之后，就可以使用命令行的 git 工具（已经自带了 ssh 客户端）了，另外还有一个图形界面的 Git 项目管理工具。<br>

     - ### 初次运行Git前的配置
       - #### 用户信息
         第一个要配置的是用户名和电子邮箱地址（这里使用的全局配置）<br>
         ```
         $ git config --global user.name '用户名'
         $ git config --global user.email '邮箱地址'
         ```
         如果用了 --global 选项，那么更改的配置文件就是位于你用户主目录下的那个，以后你所有的项目都会默认使用这里配置的用户信息。如果要在某个特定的项目中使用其他名字或者电邮，只要去掉 --global 选项重新配置即可，新的设定保存在当前项目的 .git/config 文件里。<br>
       - #### 文本编辑器
         接下来要设置的是默认使用的文本编辑器。Git 需要你输入一些额外消息的时候，会自动调用一个外部文本编辑器给你用。默认会使用操作系统指定的默认编辑器，一般可能会是 Vi 或者 Vim。如果你有其他偏好，比如 Emacs 的话，可以重新设置：<br>
         `$ git config --global core.editor emacs`<br>
       - #### 差异分析工具
         在解决冲突时使用到的差异分析工具，比如 vimdiff ：<br>
         `$ git config --global merge.tool vimdiff`<br>
       - #### 查看配置信息
         要检查自己的配置信息，使用`git config --list`命令：<br>
         ```
         $ git config --list
         user.name = 用户名
         user.email = 邮箱地址
         ...
         ```

     - ### 获取帮助
       - #### 获取帮助
         如果想要了解更多关于git的使用，可以使用以下三种方式查看：<br>
         ```
         $ git help <verb>
         $ git <verb> help
         $ man git-<verb>
         ```
         比如要看config的用法：<br>
         `$ git config help`<br>
   - ## 二、git基础

     - ### 取得项目的Git仓库

       - #### 在工作目录中初始化新仓库
         `$ git init`<br>
         初始化完成后在当前目录下会出现一个名为.git 的文件夹，所有git所需要的文件和资源都在这个文件里边
         如果当前有几个文件需要纳入版本控制，需要先用`git add`命令告诉git 开始对这些文件进行跟踪：<br>
         ```
         $ git add *.c
         $ git add REAMDE
         ...
         ```
       - #### 从现有仓库克隆
         克隆仓库的命令格式为`git clone [url]`，比如要克隆Ruby 语言的 Git 代码仓库 Grit，可以用下面的命令：<br>
         `$ git clone git://github.com/schacon/grit.git`<br>
         这样会在当前目录下创建一个grit的项目文件。其中包括.git 文件夹，用于保存下载下来的所有版本记录，然后从中取出最新的版本文件拷贝。你还可以创建自定义的文件名如：<br>
         `$ git cione git://github.com/aubreyhet/first.js myfile`<br>
         如此创建了一个名为myfile的文件夹除了名不一样之外其他的都一样

     - ### 记录每次更新到仓库
       - #### 检查当前文件状态
         命令`git status` 确定哪些文件处于什么状态，如：<br>
         ```
         $ git status
         On branch master
         nothing to commit, working directory clean
         ```
         如上，说明工作区，暂存区没有文件更改，没有未跟踪的文件
       - #### 跟踪新文件
         命令`git add .`，开始跟踪一个新文件 . 表示所有文件 如果时指定文件直接跟指定文件名即可，如：<br>
         `$ git add index.js`<br>
         此时再执行`git status`，如下：<br>
         ```
         $ git status
         On branch master
         Changes to be committed:
            (use "git reset HEAD <file>..." to unstage)

                 new file:   index.js
         ```
         只要是在“Changes to be committed”下边，就说明文件文件处于暂存状态，此时文件的状态处于暂存状态
       - #### 暂存已修改文件
         此时我们对已跟踪的index.js文件进行修改再执行`git status`查看文件状态如下：<br>
         ```
         $ git status index.js
         On branch master
         Changes to be committed:
             (use "git reset HEAD <file>..." to unstage)

                 new file:   index.js
         ```
         此时文件在Changes to be committed: 下边,说明该文件发生了改变没有放到暂存区，要放到暂存区需要执行命令`git add index.js`，再次执行`git status` 查看文件状态，可以看到文件处于“Changes to be committed”下边，说明此时文件已经处于暂存状态 <br>
       - #### 忽略某些文件
         有时我们不需要某些文件被git托管，比如git配置文件，日志文件等，则需要忽略文件。我们可以创建一个名为`.gitignore`的文件，列出我们需要忽略的文件，如下在这个文件中：<br>
         ```
         # 忽略所有 .a 结尾的文件
         *.a
         # 但 lib.a 除外
         !lib.a
         # 仅仅忽略项目根目录下的 TODO 文件，不包括 subdir/TODO
         /TODO
         # 忽略 build/ 目录下的所有文件
         build/
         # 会忽略 doc/notes.txt 但不包括 doc/server/arch.txt
         doc/*.txt
         # 忽略 doc/ 目录下所有扩展名为 txt 的文件
         doc/**/*.txt
         ```
         如上我们忽略了除lib.a以外的所有以.a结尾文件 忽略根文件夹下边的TODO文件 忽略build文件夹下边的所有文件 忽略doc文件下的直属的.txt文件

       - #### 查看已暂存和未暂存的更新
         如果我们想看具体的文件状态显然`git status`是满足不了的，此时我们需要`git diff`命令；来查看详细状态，此命令比较的是工作区域与暂存区域的快照，可以看见详细的修改信息
       - #### 提交更新
         我们通过上边的命令`git add .`只是将文件提交到暂存区，我们需要将更改的文件提交到本地仓则需要执行`git commit`命令，这种方式会启用文本编辑 以用来编辑此次提交文件的说明

         我们也可以使用在commit后边加参数的形式添加更改说明，如：`git commit -m '提交说明'` 
       - #### 跳过使用暂存区域
       - #### 移除文件
       - #### 移动文件
     - ### 查看提交历史
     - ### 撤销操作
     - ### 远程仓库的使用
     - ### 打标签
     - ### 技巧和窍门
     - ### 小结
   - ## 三、git分支
     - ### 所谓分支
     - ### 分支的新建与合并
     - ### 分支的管理
     - ### 利用分支进行的开发工作流程
     - ### 远程分支
     - ### 分支的变基
     - ### 小结
   - ## 四、服务器上的git
     - ### 协议
     - ### 在服务器上部署git
     - ### 生成SSH公钥
     - ### 架设服务器
     - ### 公共访问
     - ### GitWeb
     - ### GitOSis
     - ### Gitolite
     - ### git守护进程
     - ### git托管服务
     - ### 小结
   - ## 五、分布式git
     - ### 分布式工作流程
     - ### 为项目做贡献
     - ### 项目的管理
     - ### 小结
   - ## 六、git工具
     - ### 修订版本安装
     - ### 交互式暂存
     - ### 储藏
     - ### 重写历史
     - ### 使用Git调试
     - ### 子模块
     - ### 子树合并
     - ### 总结
   - ## 七、自定义git
     - ### 配置Git
     - ### Git属性
     - ### Git挂钩
     - ### Git强制策略实例
     - ### 总结
   - ## 八、git与其他系统
     - ### Git与Subversion
     - ### 迁移到Git
     - ### 总结
   - ## 九、git内部原理
     - ### 底层命令和高层命令
     - ### Git对象
     - ### Git References
     - ### Packfiles
     - ### The Refspec
     - ### 传输协议
     - ### 维护及数据恢复
     - ### 总结