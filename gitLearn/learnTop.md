# git 学习上篇
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
         使用`git commit -a -m '提交说明'`命令即可跳过`git add`这一步操作直接把跟踪过的文件提交到本地跳过提交到暂存区的操作
       - #### 移除文件
         如果需要从暂存区移除掉文件我们需要`git rm`命令，此命令用来删除文件，同时记录删除的操作，而用`rm`删除文件，仅仅是删除了物理文件，没有将文件从git记录中删除
       - #### 移动文件
         git中提供`git mv`命令进行文件重命名，这个命令相当于运行了下边的三段代码：<br>
         ```
         $ mv '旧的文件名' '新的文件名'
         $ git rm '旧的文件名'
         $ git add '新的文件名'
         ```
     - ### 查看提交历史
       - #### git log 命令
         当输入`git log`命令不加参数的时候如图 2-1：按照提交时间的顺序列出所有更新<br>
         ![git log](../assets/0201.png '查看历史')<br>
         我们常用`git log -p -2`加-p参数展开显示每次提交的差异信息，-2 则是显示最近两次提交的数据<br>
         我们可以在`git log -p`命令后边再加参数`--word-diff`来显示更详细的单词之间的前后差异<br>
         git还提供了比如在`git log`命令后边加`--stat`的参数查看摘要如图2-2：<br>
         ![2-2](../assets/0202.png '2-2')<br>
         还有常用的`--pretty`选项  可以有`oneline`，`short`，`full`，`fuller`<br>
         最有意思的是`format`参数，如图2-3：可以定制化显示想要结果，其中的参数如图2-4<br>
         ![2-3](../assets/0203.png '2-3')<br>
         ![2-4](../assets/0204.png '2-4')<br> 
         在使用`git log --oneline`和`git log --pretty`时可以配合`--graph`选项 可以看到每次提交的图形关系如图2-5：<br>
         ![2-5](../assets/0205.png '2-5')<br>
         如图2-6：这里是详细的`git log`参数<br>
         ![2-6](../assets/0205.png '2-6')<br>
       - #### 限制输出长度
         按照时间的限制显示如命令参数`--since`，和`--until`,如查看近两周的提交记录<br>
         `$ git log --since=2.weeks`<br>
         还可以给出具体的时间格式，某一天。除此我们还可以给出更多参数查看相关信息如`--author`显示提交的作者，用`--grpe`搜素提交说明中的提交信息，图2-7列出了常用的参数：<br>
         ![2-7](../assets/0207.png '2-7')<br>       
     - ### 撤销操作
       有时候我们提交完了才发现漏掉了几个文件没有添加，此时可以运行带有 --amend选的提交命令如下：<br>
       `$ git commit --amend`<br>
       这个命令会将暂存区中的文件提交。如果上次提交之后没有做任何修改，那么快照会保持不变。
       - #### 取消暂存的文件
         如果同时提交了多个文件但是需要单独提交的  我们需要执行命令<br>
         `$ git reset HEAD <file>` <br>
         如上命令`$ git reset HEAD '要撤销的文件'`即可将需要的文件取消暂存
       - #### 撤销对文件的修改
         如果你不想对某个文件的修改保存，我们需要执行命令:<br>
         `$ git checkout --'要撤销的文件名'` <br>
         如上执行该命令 所有的修改将被撤销掉。
     - ### 远程仓库的使用
       - #### 查看远程仓库
         如果已经配置过自己的远程仓库则可以通过命令来查看：<br>
         `$ git remote`<br>
         如上该命令会列出你指定的每一个远程服务器的简写。<br>
         也可以加上`-v`参数，来显示需要读写的远程仓库使用法人git保存的简写与其对应的url地址，如同3-1：<br>
         ![3-1](../assets/0301.png '3-1')<br>
         如上，如果有多位贡献者 我们可以很清楚的看到  方便我们拉去对应的贡献下来
       - #### 添加远程仓库
         我们可以通过命令`$ git remote add <shortname> <url>`来添加我们的远程仓库<url>, 同时指定一个简写<shortname> 如图3-2；<br>
         ![3-2](../assets/0302.png '3-2')<br>
         如上，我们可以使用 pd代替url 通过命令:<br>
         `$ git fetch pd`<br>
         来拉取远程仓库你所没有的文件内容,
       - #### 从远程仓库抓取与拉取
         就像上边提到的  我们可以通过命令`$ git fetch [remote-name]`,来获取远程仓库的数据，需要注意的是命令`$ git fetch ...`这个命令只会吧远程仓库最新的内如抓取到本地仓库，而需要我们自己手动去合并<br>
         当然我们可以通过命令<br>
         `$ git pull`<br>
         来拉取远程仓库的数据并尝试和本地的数据进行合并
       - #### 推送到远程仓库
         我们可以通过命令<br>
         `$ git push [remote-name] [branch-name]`<br>
         如上  通过 简写url -> [remote-name] 将分支 -> [branch-name]推送到远程仓库
       - #### 查看远程仓库
         如果想查看某个远程仓库的更多信息，我们可以使用命令:<br> 
         `$ git remote show [remote-name]`<br>
         我们可以看大如下图4-1，显示你当前提交`$ git push`所提交到的地址分支，以及你`$ git pull`操作所拉取的地址分支<br>
         ![4-1](../assets/0401.png '4-1')<br>
       - #### 远程仓库的移除与重命名
         我们可以通过命令`$ git remote rename`来更改远程仓库的简写名称如下代码  我们将简写名`aubrey`改成`song`<br>
         `$ git remote rename aubrey song`<br>
         我们可以通过命令`$ git remoote rm [remote-name]`进行删除该名字的远程库镜像<br>
     - ### 打标签
       - #### 列出标签
         我们只需要执行命令`$ git tag`列出已经有的标签<br>
         你可以在上边的命令后边加上参数查看特定的标签，例如使用命令`$ git tag -1 v1.2.3*`<br>
       - #### 创建标签
         git 有两种标签类型 一种是'轻量级标签'另外一种是'附注标签'<br>
         一个轻量标签很像一个不会改变的分支 - 它只是一个特定提交的引用。<br>
         然而，附注标签是存储在 Git 数据库中的一个完整对象。 它们是可以被校验的；其中包含打标签者的名字、电子邮件地址、日期时间；还有一个标签信息；并且可以使用 GNU Privacy Guard （GPG）签名与验证。 通常建议创建附注标签，这样你可以拥有以上所有信息；但是如果你只是想用一个临时的标签，或者因为某些原因不想要保存那些信息，轻量标签也是可用的。<br>
       - #### 附注标签
         在git中创建附注标签的方式很简单，我们只需要在`$ git tag `的命令后边加上参数`-a`，如图4-2<br>
         ![4-2](../assets/0402.png '4-2')<br>
         如上-m 后边的叙述是我们必须要加的是关于该标签的说明<br>
         接下来我们可以通过命令`$ git show v1.0.1` 来查看该标签信息与之对应的提交信息<br>
       - #### 轻量级标签
         我们只需要执行命令`$ git tag v1.0.1w`不需要添加其他任何参数进行添加标签，用该方法添加的标签在使用命令`$ git show v1.0.1w`时不会有过多的信息显示出来
       - #### 后期打标签
         如图4-3当我们需要给`change`这个提交进行添加标签 ，我们需要执行命令`$ git tag -a v1.0.0 6aba358`如图4-4可以看到添加标签成功<br>
         图4-3<br>
         ![4-3](../assets/0403.png '0403')<br>
         图4-4<br>
         ![4-4](../assets/0404.png '4-4')<br> 
       - #### 共享标签
         默认情况下命令`$ git push `并不会把添加的标签带到服务器，创建完标签之后你必须显式的将标签上传到服务器，这个过程就像共享分支一样，所以你可以运行命令<br>
         `$ git push [remote-name] [tag-name]`<br>
         如果想把本地所有不在服务器的标签都上传到服务器，我们可以使用命令<br>
         `$ git push --tags`<br>
         如上其实我们就是在`$ git push `命令后边添加参数`--tags`将所有在本地的标签添加推到服务器
       - #### 删除标签
         我们可以使用命令<br>
         `$ git tag -d [tag-name]`<br>
         删除一个本地轻量级标签  ，如果想删除掉远程服务器的标签则需要执行命令:<br>
         `$ git push [remote-name] :refs/tags/[tag-name]`
       - #### 检出标签
         如果想查看某个标签所指向的文件版本，我们可以执行命令`$ git checkout`，此命令具有副作用
     - ### git 别名
         我们可以通过编辑 git config 进行命令的别名修改，这使得我们更加方便的使用git命令如下：     
         `$ git config --golbal alias.ct commit`<br>
          如上我们可以通过`git ct` 代替`git commit`命令
#### 上篇结束
  