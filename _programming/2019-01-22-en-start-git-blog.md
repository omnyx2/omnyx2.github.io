---
lang: "en"
ref: "start jekyll blog"
layout: post_relate
big-title: "programming"
middle-title: "making jekyll blog"
small-title: "start jekyll blog"
field:
  - jekyll  
relate: 
  - jekyll
toc: true
toc-head-level-choice: false
#do this if head level choice is true
# toc-head-max:
# toc-head-min:
---
Nowadays there are so many tools to make supply resume, But I was hard to decide from so much platforms. 

However I determine to use gitblog to show my projects. It's cool, fast, and strong.

And I need page to explain directly, with out lots of explaination. So in this article, you shoud type every commands and if there's error give me a comments

we'll gonna apply theme at nextpost

### Requirements(should be installed before)

system: ubuntu  
tools: (git)[https://git-scm.com/book/en/v2]  
     : github id&passward  

## Steps for ubuntu

### Set up jekyll in your computer
It won't need if you already finshed to setting, just need git blog. If not, you defintly need jekyll on your computer

1. Install required dependencies
```
sudo apt-get install ruby-full build-essential zlib1g-dev
```

2. Change ~/.bashrc for blocking install to root user, Put follwing commands in terminal to change ~/.bashrc
```
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

3. Install jekyll:
```
gem install jekyll bundler 
```
    * If it says no bundler, then just follow the instruction of terminal.
    ```
    gem install bundler
    ```

### Set up your git blog floder
1. Make dir where you want - username.github.io

2. Goto ~/'dir u want to'/username.github.io, set your blog. you can choose 'dir u want to' you want.
Let's make basic blog. type,
```
jekyll new .
```
   * In addition, you can see and check basic blog on you PC. It called as minima
```
jeykll serve 
```
   * If it's not work then use this
```
bundle exec jekyll serve
```
Turn on browser, type localhost:4000

3. Goto ~/'dir u want to'/username.github.io.
If you don't know about setting with git. then go to stay basic of git, we need config, init, push, pull, commit, and add
site is here
https://git-scm.com/book/en/v2
```
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
git config --global core.editor vim
git init
git add --all
git commit -m "text you want!"
git push
``` 

4. Goto web browser and type http://username.github.io !
now you finshed setting git blog.
next time we will apply theme to you git blog.
It's one of the famous theme for git blog.
under url is stie how to use theme. However I'll make post. you can go this site or my post
https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/#remote-theme-method

