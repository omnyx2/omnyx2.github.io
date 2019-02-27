---
lang: "en"
ref: "making jekyll blog project-0"
layout: post_relate
big-title: "programming"
middle-title: "making jekyll blog"
small-title: "making jekyll blog project-0"
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
////https://jekyllrb.com/docs/configuration/markdown/


## Lay out my blog's sturcture
  
before start making blog, you should think sturcture of your blog. Without plan, youg blog will going to collapse.
  
**Now I'll show you that design of my blog**  

At blog page a.k.a front-end
  
```
/index.html(main.page)
 |-study
   /study categories archive
     |-programming
     |-math
     |-refs summary 
 |-projects
   /projects gallery
     |-projects..
 |-references
   /references categories archive
 |-portfolio
```  

**file structure**
  
```
 /root
  - index.html
  - protfolio.html
  - about.html
  
  /study(making pages for each categoryies or posts)
  /programming(only for posts)
  /math(only for posts)
  /refs(only for posts)
  /projects
    - index.html
    - other projects file
  /refs
    - translated
```
It will be hard to understand, but don't try to understand, just catch the thing that you should design sturcture before you build your own blog.

