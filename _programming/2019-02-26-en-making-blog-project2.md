---
lang: "en"
ref: "making jekyll blog project-2"
layout: post_relate
big-title: "programming"
middle-title: "making jekyll blog"
small-title: "making jekyll blog project-2"
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
## make collections

**make floder**
  
In this post will gonna make collections, collections are the floders. However Jekyll can't find floder without collections. It means Jekyll only detect file in speacial floders, like _posts, or _layouts. So if you want to clean up posts in each floder that you want, you should make coleections.
  
As I told you I want

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
  
above stucture. 
Therefore create floders, named with _study, _programmings, _math, _refs, _projects, _referencets.
Then register collections to _config.yml then you jekyll will detect your collections.

open _config.yml, and put below.
```
collections:
  study:
    output: true
    permalink: /:collection/:path/
  programming:
    output: true
    permalink: /:collection/:path/
  math:
    output: true
    permalink: /:collection/:path/
  refs:
    output: true
    permalink: /:collection/:path/
  projects:
    output: true
    permalink: /:collection/:path/
  references:
    output: true
    permalink: /:collection/:path/
```

> In more detail, ``permalink: /:collection/:path`` is the special command only work in _config.yml permalink is url of post or page. If you want to know more about it go (here)[https://jekyllrb.com/docs/permalinks/]
  
Then set basic option to each collctions. It also write under above script
```
# Defaults
defaults:

  - scope:
      path: ""
      type: posts
    values:
      layout: post
      author_profile: true
      read_time: true
      comments: true
      share: true
      related: true
  - scope:
      path: "_pages"
      type: pages
    values:
      layout: page
      author_profile: true
  - scope:
      path: "_study"
      type: study
    values:
      layout: page
  - scope:
      path: "_programming"
      type: programming
    values:
      layout: page
     
```

 


