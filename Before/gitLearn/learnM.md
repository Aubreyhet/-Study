# git 学习中篇
   - ## 三、git分支
     - ### 所谓分支
       - #### 分支简介
         我们已经知道在版本回退中，git将每次提交穿成一条时间线，这条时间线就是一个分支，截至目前git里边就只有一条分支，这个分支就是git的主分支，这个分支就是master，实际上HEAD指向的是这个主分支，而主分支指向的是提交<br>
         一开始，HEAD指向的是主分支即master，而主分支指向的是提交如图4-5：<br>
         ![4-5](../assets/0405.png '4-5')<br>
     - ### 分支的新建与合并
       - #### 分支创建
         每次提交主分支master都向前移动一步，这样随着你不断提交，主分支也越来越长<br>
         当我们创建分支的时候例如创建dev分支，我们使用代码<br>
         `$ git branch dev` 创建dev分支<br>
         `$ git checkout dev` 使HEAD指向dev<br>
         此时我们可以用一段命令完成分支的创建与指向，如下：<br>
         `$ git checkout -b dev`<br>
         现在我们可以在分支dev上进行操作，修改文件，将我们的修改跟踪到暂存区 提交到本地仓 接下来  我们就要的操作就是要合并我们的分支dev到主分支master上边，首先我们需要切换到主分支master上<br>
         `$ git checkout master`<br>
         此时HEAD指向如图4-6<br>
         ![4-6](../assets/0406.png '4-6')<br>
         现在我们将dev分支上的贡献合并到主分支上，执行如下命令：
         `$ git merge dev`<br>
         `$ git merge `命令用于将一个分支合并到当前分支，合并完成后我们可以执行命令`$ git branch -d dev`将dev分支安全的删除掉
       - #### 遇到冲突时的合并操作
         当两个分支在同一个地方同时进行了修改并且提交如图4-7：<br>
         ![4-7](../assets/0407.png '4-7')<br>
         此时git无法进行上边的快速合并，如果执行命令`$ git merge `进行合并, git会抛出一个错误如图4-8：<br>
         ![4-7](../assets/0408.png)<br>
         此时我们必须要手动进行冲突的修改，git 会用`<<<<<<<`, `=======`,`>>>>>>>`，分别标记两个文件，我们需要修改文件并保存提交提交之后我们可以删掉子分支了，我们之前讲过的`$ git log `加参数也可以看见分支合并情况
     - ### 分支的管理
       - #### 分支管理
         我们可以通过命令`$ git branch `不加参数的时候就是查看分支，显示分支的个数，并且显示当前在哪个分支上
         我门可以通过给`$ git branch `添加参数`--merged`与`--no-merged`的方法查看已经合并并到当前分支的分支 ,
     - ### 利用分支进行的开发工作流程
       - #### bug分支
         在我们日常开发中bug就像家常便饭，所以我们需要git开一个修复bug的分支，当bug修复好之后合并到主分支，然后将临时的分支删掉。当你正在dev分支工作的时候没有提交的状态下发现现在创建不了分支，这是我们需要冻结当前的工作现场，登以后恢复现场继续工作，需要执行命令`$ git stash`,
         当我们创建完分支处理完bug之后，删除掉这个分支 接下来就应该重新回到我们的dev分支上来继续我们的工作，现在Git 是把stash内容保存在了一个地方，此时我们需要用`$ git stash apply`进行恢复，但是恢复后`stash`内容并没有删除我们需要用`$ git stash drop`来删除；另外一种方法就是用`$ git stash pop`,恢复的同时把stash内容也删掉了
     - ### 远程分支
       - #### 推送
         如果你想和其他人一起在名为serverfix的分支上工作，你可以像推送第一个分支那样推送，此时推送的这个分支是本地已经存在了的 并且已经提交到本地仓库的，命令如下：<br>
         `$ git push origin serverfix`<br>
         此时实际上git帮我们简化了代码，实际完整的代码应该是`$ git push origin [你要提交的分支名]:[提交到远程仓库的重新起的分支名]`
       - #### 抓取分支
         协同开发的时候大家都会往master 和dev分支上边提交自己的修改，
         使用命令`$ git checkout -b dev origin/dev`此时我们就在另外一个设备上拉取到远程仓库的dev分支，当这台设备上的人在dev分支进行修改提交 到远程仓库，此时你也进行了dev分支的修改并且是同一个地方
         此时就产生了冲突 ，提交会显示失败<br>
         此时需要把远程仓库pull到本地来  注意要指定本地dev分支与远程origin/dev分支的链接，命令如下：<br>
         `$ git branch --set-upstream-to=origin/dev dev` 再`pull`<br>
         此时我们需要解决冲突，需要手动解决，和之前在本地处理冲突的方式一样，解决后再提交，再push<br>
         因此，多人协作工作模式应该是这样的：<br>
          - 首先，可以试图用`$ git push origin <branch-name>`推送自己的修改；
          - 如果推送失败，则因为远程分支比你本地更新，需要先拉去pull下来，试图合并；
          - 如果合并有冲突，则解决冲突并在本地提交；
          - 没有冲突或解决掉冲突后，再用`$ git push origin <branch-name>`推送就能成功！
       - #### 删除远程仓库的分支
         假设你已经通过远程分支昨晚所有工作了，此时你可以与逆行一个带有`--delete`的`$ git push `命令进行对远程仓库分支的删除，代码如下,<br>
         `$ git push origin --delete severfix`
     - ### 分支的变基
     - ### 小结
   - ## 四、服务器上的git
     - ### 协议
       git 有四种协议用来传输资料，分别是：本地协议`local`，http协议，ssh协议，以及git协议
       - #### 本地协议
         最基本的就是本地协议，其中的远程版本库就是硬盘的另一个目录的文件夹
       - #### http协议
         git通过http通信有两种模式，一种是智能http协议：<br>
         智能http协议的运行方式和ssh协议以及git协议简单的多 只是运行在标准的https端口上并且可以使用各种http验证机制，
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