<template><div><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h1>
<p><img src="https://www.runoob.com/wp-content/uploads/2015/02/f7246b600c338744a9591cd7530fd9f9d62aa0f8.png" alt="Git 教程" loading="lazy"></p>
<p>Git 是一个开源的<code v-pre>分布式版本控制系统</code>，用于敏捷高效地处理任何或小或大的项目。</p>
<p>Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。</p>
<p>Git 与常用的版本控制工具 CVS, Subversion 等不同，它采用了分布式版本库的方式，不必服务器端软件支持。</p>
<p>Git<a href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer">易于学习<ExternalLinkIcon/></a>， <a href="https://git-scm.com/about/small-and-fast" target="_blank" rel="noopener noreferrer">占用空间小，性能快如闪电<ExternalLinkIcon/></a>。它优于 SCM 工具，如 Subversion、CVS、Perforce 和 ClearCase，具有<a href="https://git-scm.com/about/branching-and-merging" target="_blank" rel="noopener noreferrer">廉价的本地分支<ExternalLinkIcon/></a>、方便<a href="https://git-scm.com/about/staging-area" target="_blank" rel="noopener noreferrer">的暂存区域<ExternalLinkIcon/></a>和 <a href="https://git-scm.com/about/distributed" target="_blank" rel="noopener noreferrer">多个工作流<ExternalLinkIcon/></a>等功能。</p>
<h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1>
<p>直接官网：<a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">https://git-scm.com/<ExternalLinkIcon/></a></p>
<p>点小屏幕下载安装，一直默认就ok，要不就看网上配置</p>
<p>在VsCode中使用GitBash的方法：<a href="https://www.cnblogs.com/qdlhj/p/14577638.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/qdlhj/p/14577638.html<ExternalLinkIcon/></a></p>
<h1 id="git常用命令" tabindex="-1"><a class="header-anchor" href="#git常用命令" aria-hidden="true">#</a> Git常用命令</h1>
<table>
<thead>
<tr>
<th>命令</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>git config --global user.name</code></td>
<td>设置用户签名</td>
</tr>
<tr>
<td><code v-pre>git config --global user.email</code></td>
<td>设置用户签名</td>
</tr>
<tr>
<td><code v-pre>git init</code></td>
<td>初始化本地库</td>
</tr>
<tr>
<td><code v-pre>git status</code></td>
<td>查看本地库状态</td>
</tr>
<tr>
<td><code v-pre>git add 文件名</code></td>
<td>添加到暂存区</td>
</tr>
<tr>
<td><code v-pre>git commit -m &quot;日志信息&quot; 文件名</code></td>
<td>添加到本地库</td>
</tr>
<tr>
<td><code v-pre>git reflog</code></td>
<td>查看历史记录</td>
</tr>
<tr>
<td><code v-pre>git reset --hard 版本号</code></td>
<td>版本穿梭</td>
</tr>
</tbody>
</table>
<h2 id="初始化本地库" tabindex="-1"><a class="header-anchor" href="#初始化本地库" aria-hidden="true">#</a> 初始化本地库</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在想要使用Git管理的目录下，打开<code v-pre>Git Bash Here</code>界面初始化</p>
<p>初始化之后，会生成一个<code v-pre>.git</code>隐藏文件</p>
<h2 id="查看库状态" tabindex="-1"><a class="header-anchor" href="#查看库状态" aria-hidden="true">#</a> 查看库状态</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第一次查看会出现以下的结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>On branch master	：在master分支上

No commits yet		：当前没有提交过文件
//没有需要提交的文件
nothing to commit (create/copy files and use "git add" to track)	

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="暂存区" tabindex="-1"><a class="header-anchor" href="#暂存区" aria-hidden="true">#</a> 暂存区</h2>
<p>当有新的文件时，<code v-pre>git status</code>就返回下面的状态</p>
<p>意思是有新的文件没有被追踪，需要使用<code v-pre>git add 文件名</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>On branch master

No commits yet

Untracked files:
  (use "git add &lt;file>..." to include in what will be committed)
        hello.txt		//文件名显示红色

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要使用<code v-pre>git add 文件名</code>，把文件添加到暂存区，此时再次查看<code v-pre>git status</code>，会显示以下结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached &lt;file>..." to unstage)
        new file:   hello.txt	//文件名显示绿色
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>意思是已经追踪到该文件，可以通过<code v-pre>git rm --cached 文件名</code> 删除暂存区的文件，本地的不会删除</p>
<h2 id="本地库" tabindex="-1"><a class="header-anchor" href="#本地库" aria-hidden="true">#</a> 本地库</h2>
<h3 id="将暂存区的文件提交到本地库" tabindex="-1"><a class="header-anchor" href="#将暂存区的文件提交到本地库" aria-hidden="true">#</a> 将暂存区的文件提交到本地库</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git commit -m "日志信息" 文件名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再次查看<code v-pre>git status</code>时：</p>
<p>没有了第二句话，说明已经提交过文件</p>
<p>最后一句话是说明没有需要提交的文件了</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>On branch master
nothing to commit, working tree clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看日志" tabindex="-1"><a class="header-anchor" href="#查看日志" aria-hidden="true">#</a> 查看日志</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git reflog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果：每次修改斗湖有一个版本号，HEAD指针会指向当前的版本</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>c3c851e (HEAD -> master) HEAD@{0}: commit: second commit
0f8c7c7 HEAD@{1}: commit (initial): first commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改文件" tabindex="-1"><a class="header-anchor" href="#修改文件" aria-hidden="true">#</a> 修改文件</h2>
<p>当修改了文件之后，查看库状态会显示：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>On branch master

Changes not staged for commit:
  (use "git add &lt;file>..." to update what will be committed)
  (use "git restore &lt;file>..." to discard changes in working directory)
        modified:   hello.txt	//显示红色

no changes added to commit (use "git add" and/or "git commit -a")
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要再次把文件添加到暂存区，再提交到本地库</p>
<p>就增加了一个版本</p>
<h2 id="历史版本" tabindex="-1"><a class="header-anchor" href="#历史版本" aria-hidden="true">#</a> 历史版本</h2>
<h3 id="查看历史版本" tabindex="-1"><a class="header-anchor" href="#查看历史版本" aria-hidden="true">#</a> 查看历史版本</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git reflog		查看版本信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git log			查看版本详细信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="版本穿梭" tabindex="-1"><a class="header-anchor" href="#版本穿梭" aria-hidden="true">#</a> 版本穿梭</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git reset --hard 版本号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="分支" tabindex="-1"><a class="header-anchor" href="#分支" aria-hidden="true">#</a> 分支</h1>
<p>几乎每一种版本控制系统都以某种形式支持分支，一个分支代表一条独立的开发线。</p>
<p>使用分支意味着你可以从开发主线上分离开来，然后在不影响主线的同时继续工作。</p>
<p>分支的操作：</p>
<table>
<thead>
<tr>
<th>命令</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>git branch 分支名</code></td>
<td>创建分支</td>
</tr>
<tr>
<td><code v-pre>git branch -v</code></td>
<td>查看分支</td>
</tr>
<tr>
<td><code v-pre>git checkout 分支名</code></td>
<td>切换分支</td>
</tr>
<tr>
<td><code v-pre>git merge 分支名</code></td>
<td>把指定的分支合并到当前分支上</td>
</tr>
<tr>
<td><code v-pre>git branch -d 分支名</code></td>
<td>删除分支</td>
</tr>
</tbody>
</table>
<p>先创建分支，在切换分支，操作之后，再把分支合并到主分支上</p>
<h2 id="合并冲突" tabindex="-1"><a class="header-anchor" href="#合并冲突" aria-hidden="true">#</a> 合并冲突</h2>
<p>当同时有两个分支修改一个文件，并且把一个分支合并到另一个分支的时候，会发生合并冲突，接下来我们需要手动去修改它。把冲突的代码人为修改。</p>
<p>最后使用<code v-pre>git add 文件名</code>把文件添加追踪后提交到本地库</p>
<h1 id="git团队协作机制" tabindex="-1"><a class="header-anchor" href="#git团队协作机制" aria-hidden="true">#</a> Git团队协作机制</h1>
<h2 id="github" tabindex="-1"><a class="header-anchor" href="#github" aria-hidden="true">#</a> GitHub</h2>
<h3 id="创建一个远程库" tabindex="-1"><a class="header-anchor" href="#创建一个远程库" aria-hidden="true">#</a> 创建一个远程库</h3>
<p><img src="D:\Typora\images\image-20220907160437604.png" alt="image-20220907160437604" loading="lazy"></p>
<p>点击加号，点击<code v-pre>New repository</code></p>
<p><img src="D:\Typora\images\image-20220907160605543.png" alt="image-20220907160605543" loading="lazy"></p>
<h2 id="远程仓库操作" tabindex="-1"><a class="header-anchor" href="#远程仓库操作" aria-hidden="true">#</a> 远程仓库操作</h2>
<table>
<thead>
<tr>
<th>命令名称</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>git remote -v</code></td>
<td>查看当前所有远程地址别名</td>
</tr>
<tr>
<td><code v-pre>git remote add 别名 远程地址</code></td>
<td>起别名</td>
</tr>
<tr>
<td><code v-pre>git push 别名 分支</code></td>
<td>推送本地分支上的内容到远程仓库</td>
</tr>
<tr>
<td><code v-pre>git clone 地址</code></td>
<td>将远程仓库的内容克隆到本地</td>
</tr>
<tr>
<td><code v-pre>git pull 远程库地址别名 远程分支名</code></td>
<td>将远程库中对于分支的最新内容拉下来后与当前本地分支直接合并</td>
</tr>
</tbody>
</table>
<ol>
<li>
<h4 id="创建别名" tabindex="-1"><a class="header-anchor" href="#创建别名" aria-hidden="true">#</a> 创建别名</h4>
</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git remote add git-demo https://github.com/EricKiku/git-demo.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>
<h4 id="查看别名" tabindex="-1"><a class="header-anchor" href="#查看别名" aria-hidden="true">#</a> 查看别名</h4>
</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git remove -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="D:\Typora\images\image-20220907161527474.png" alt="image-20220907161527474" loading="lazy"></p>
<ol start="3">
<li>
<h4 id="把本地库的分支推送到远程库中" tabindex="-1"><a class="header-anchor" href="#把本地库的分支推送到远程库中" aria-hidden="true">#</a> 把本地库的分支推送到远程库中</h4>
</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git push git-demo master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4">
<li>
<h4 id="把远程库代码拉取到本地库" tabindex="-1"><a class="header-anchor" href="#把远程库代码拉取到本地库" aria-hidden="true">#</a> 把远程库代码拉取到本地库</h4>
</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git pull git-demo master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5">
<li>
<h4 id="克隆" tabindex="-1"><a class="header-anchor" href="#克隆" aria-hidden="true">#</a> 克隆</h4>
</li>
</ol>
<p>克隆就是本地库没有对应的git库，是直接把别人的项目克隆下来</p>
<p>克隆代码不需要登录账号，克隆完会自动<code v-pre>拉取代码-初始化本地库-创建别名</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git clone 地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>克隆需要的地址在这个地方：</p>
<p><img src="D:\Typora\images\image-20220907165643872.png" alt="image-20220907165643872" loading="lazy"></p>
<p>但是推送时，会显示没有权限。需要在远程库的<code v-pre>Settings-Collaborators</code>来邀请人，</p>
<p>被邀请的人需要在自己的GitHub页面打开输入邀请地址，同意邀请后</p>
<p>这个人才可以推送他的本地库</p>
<h2 id="ssh免密登录" tabindex="-1"><a class="header-anchor" href="#ssh免密登录" aria-hidden="true">#</a> SSH免密登录</h2>
<ol>
<li>需要一个<code v-pre>.ssh</code>公钥</li>
</ol>
<p>在<code v-pre>git-bash</code>窗口中</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ssh-keygen -t rsa -C 描述(邮箱)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在用户目录下有一个<code v-pre>.ssh</code>文件夹，其中<code v-pre>.pub</code>是公钥，另一个是私钥</p>
<p>把公钥生成的代码全部复制</p>
<p>在<code v-pre>GitHub-头像-Setting---SSH and GTG keys---SSH keys---New SSH key</code>，把公钥复制进去之后，就可以使用代码<code v-pre>CODE</code>的<code v-pre>SSH链接</code>，在本地库推送和拉取的时候就可以把地址写成<code v-pre>SSH</code>链接的地址，就不需要登录就可以推送和拉取</p>
<h1 id="idea集成git" tabindex="-1"><a class="header-anchor" href="#idea集成git" aria-hidden="true">#</a> IDEA集成Git</h1>
<h2 id="环境" tabindex="-1"><a class="header-anchor" href="#环境" aria-hidden="true">#</a> 环境</h2>
<h3 id="git-ignore" tabindex="-1"><a class="header-anchor" href="#git-ignore" aria-hidden="true">#</a> git.ignore</h3>
<p>​	先配置<code v-pre>git.ignore</code>的git忽略文件，指定哪些文件不需要push到远程库里</p>
<p><code v-pre>git.ignore</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># Compiled class file
*.class

# Log file
*.log

# BlueJ files
*.ctxt

# Mobile Tools for Java (J2ME)
.mtj.tmp/# Package Files #
*.jar
*.war
*.nar
*.ear
*.zip
*.tar.gz
*.rar

hs_err_pid*

.classpath
.project
.settings
target
.idea
*.iml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再把配置文件引用在<code v-pre>.gitconfig</code>中，<code v-pre>[core]</code>的第二个就是配置的忽略文件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[core]
	editor = \"D:\\VisualStudio\\Microsoft VS Code\\bin\\code\" --wait
	excludesfile = C:/Users/Administrator/git.ignore
[user]
	name = EricKiku
	email = 2966678301@qq.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在idea中找到git" tabindex="-1"><a class="header-anchor" href="#在idea中找到git" aria-hidden="true">#</a> 在IDEA中找到Git</h3>
<p><code v-pre>文件-设置-版本控制-Git</code></p>
<h2 id="在idea使用git" tabindex="-1"><a class="header-anchor" href="#在idea使用git" aria-hidden="true">#</a> 在IDEA使用Git</h2>
<p>初始化本地库：在<code v-pre>工具栏-&gt;VCS-&gt;Git</code></p>
<p>对文件使用右键，可以添加暂存区和提交本地库</p>
<p>在左下角的<code v-pre>Git</code>处，可以查看版本，右击版本<code v-pre>签出修订</code>可以切换版本，黄色的是版本指针，绿色的是分支指针</p>
<p>右下角有<code v-pre>分支</code>，可以创建和切换分支</p>
<p>在一个分支上，点击另一个分支，可以将另一个分支<code v-pre>合并</code>到当前分支</p>
<p>如果合并冲突，需要手动解决冲突，在冲突界面，左侧是当前分支，右侧是合并的分支，中间是冲突之前的分支。需要合并的，点击箭头，不需要的点叉号</p>
<h2 id="在idea-gitub" tabindex="-1"><a class="header-anchor" href="#在idea-gitub" aria-hidden="true">#</a> 在IDEA-&gt;Gitub</h2>
<p>绑定GitHub账号</p>
<p><code v-pre>设置-版本控制-GitHub-登录</code></p>
<h2 id="提交远程库" tabindex="-1"><a class="header-anchor" href="#提交远程库" aria-hidden="true">#</a> 提交远程库</h2>
<p>可以在IDEA直接提交到远程库，即使没有这个库，也会新建</p>
<p><code v-pre>VCS-Import into Version Control-Share Project on GitHub</code></p>
<h2 id="推送远程库" tabindex="-1"><a class="header-anchor" href="#推送远程库" aria-hidden="true">#</a> 推送远程库</h2>
<p>点击上面工具栏的绿色箭头<code v-pre>推送</code>，即可推送，想要使用SSH免密推送就需要先复制SSH链接，在推送时，右击自定义，填写链接即可</p>
<h2 id="拉取远程库" tabindex="-1"><a class="header-anchor" href="#拉取远程库" aria-hidden="true">#</a> 拉取远程库</h2>
<p><code v-pre>push</code>是将本地库代码推送到远程库上，如果本地库代码的版本比远程库版本低，那么就会推送失败，所以在推送之前，先拉取代码，确保本地库版本是最新的，然后在修改，提交，推送</p>
<p>点击上面菜单栏上的<code v-pre>VCS</code>的<code v-pre>拉取</code></p>
<h2 id="克隆远程库到本地" tabindex="-1"><a class="header-anchor" href="#克隆远程库到本地" aria-hidden="true">#</a> 克隆远程库到本地</h2>
<p>打开IDEA时</p>
<p><img src="D:\Typora\images\image-20220907204047782.png" alt="image-20220907204047782" loading="lazy"></p>
<p>点击从VCS获取，可以使用远程库的<code v-pre>Https链接或SSH链接</code>来克隆远程库的项目，称为<code v-pre>down</code></p>
<h1 id="idea-gitee" tabindex="-1"><a class="header-anchor" href="#idea-gitee" aria-hidden="true">#</a> IDEA-&gt;Gitee</h1>
<h2 id="idea集成码云" tabindex="-1"><a class="header-anchor" href="#idea集成码云" aria-hidden="true">#</a> IDEA集成码云</h2>
<h3 id="安装gitee插件" tabindex="-1"><a class="header-anchor" href="#安装gitee插件" aria-hidden="true">#</a> 安装Gitee插件</h3>
<p><code v-pre>Plugins-&gt;Gitee</code></p>
<h3 id="idea登录gitee" tabindex="-1"><a class="header-anchor" href="#idea登录gitee" aria-hidden="true">#</a> IDEA登录Gitee</h3>
<p><code v-pre>设置-版本控制-Gitee</code></p>
<p>可以使用账号密码，也可以使用口令Token</p>
<p>登录成功后就可以和GitHub一样，拉取和推送远程库了</p>
<h2 id="gitee迁移github" tabindex="-1"><a class="header-anchor" href="#gitee迁移github" aria-hidden="true">#</a> Gitee迁移GitHub</h2>
<p>点击码云官网的加号，<code v-pre>新建仓库</code>，点击导入仓库</p>
<p>在链接处填写<code v-pre>GitHub仓库的Https协议的链接</code>，点击导入即可</p>
<p>如果GitHub仓库的代码更新了，可以点击Gitee仓库右侧的刷新按钮<code v-pre>强制更新</code>，来保持和GitHub版本一样</p>
<h1 id="gitlab" tabindex="-1"><a class="header-anchor" href="#gitlab" aria-hidden="true">#</a> GitLab</h1>
<p>官网：<a href="https://gitlab.com/" target="_blank" rel="noopener noreferrer">https://gitlab.com/<ExternalLinkIcon/></a></p>
</div></template>


