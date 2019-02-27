---
lang: ko
ref: "jekyll how to use ref-collections"
layout: post_relate
big-title: programming
middle-title: "Jekyll step by step reference"
small-title: "jekyll 사용법 레퍼런스 번역-9.Collections"
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




# 9.Collecctions

=======================================  

01.22.2019 작성  
jeykll 3. 8. 5  
Bundler version 2.0.

=======================================

``authors``에 살을 덧붙여 보자, 이걸 위해 `author``는 자신만의 posts들과 안내문 개인 페이지를 개설해야된다.

이러한 것을 하기 위해서 너는 ``collections``을 사용하게 될 것이다. ``Collections``는 ``content``가 반드시 date을 기준으로 나뉘어져야 할 필요가 없다는 점을 제외하고는 ``post``와 비슷하다.   
<br>
  
# Configuration

``collection``을 셋업하기 위해서는 반드시 Jekyll에 말해주어야 한다. Jekyll의 환경설정은 ``_config.yml``에서 건들일 수 있다.(기본적으로임)  
<br>

# Add authors
``Documents``은(colletion안에 있는 item) 사이트의 이름이 시작한 곳인 ``_*conllecion_name*``에 들어 있다. 이번의 경우는 _authors.
  
각 author에 대해서 document를 만들어 보자.
  
``_authors/jill.md:``

```
---
short_name: jill
name: Jill Smith
position: Chief Editor
---
Jill is an avid fruit grower based in the south of France.
```
<br>

  
``_authors/ted.md``  

```
---
short_name: ted
name: Ted Doe
position: Writer
---
Ted has been eating fruit since he was baby.
```  
<br>  
  
# Staff page

사이트의 모든 저자를 나열하는 페이지를 추가하겠습니다. Jekyll은 site.authors에서 collection을 사용하게 해줍니다.  
<br>  
staff.html을 만들고 ``stie.authors``에서 전부 출력할 수 있게 반복해 줍니다:  
  
```
---
layout: default
title: Staff
---
<h1>Staff</h1>

<ul>
  {{"{% for author in site.authors "}}%}
    <li>
      <h2>{{"{{ author.name "}}}}</h2>
      <h3>{{"{{ author.position "}}}}</h3>
      <p>{{"{{ author.content | markdownify "}}}}</p>
    </li>
  {{"{% endfor "}}%}
</ul>
```
<br>

이후, the content들이 markdown이면, 반드시 ``markdonify`` 필터를 통해서 돌려줄 필요성이 생긴다. 이러한 일은 layout의 안에서 ``{{"{{content"}}}}를 이용해 출력할 경우에 자동적으로 일어나게 된다.

다음으로 넘어가, 이제 너는 이러한 과정을 통해 생긴 page들로 이동할 수 있는 navigation들이 필요해질 것이다. 이럴 때는 _data/navigaton.을yml을 열고 각 staff페이지들에서 항목을 넣어주면 된다:
```
- name: Home
  link: /
- name: About
  link: /about.html
- name: Blog
  link: /blog.html
- name: Staff
  link: /staff.html
```  
<br> 

# Output a page
기본적으로, collections는 documents의 page를 출력하지 않는다. 그러나 지금, 우리는 각 author가 자신만의 page를 가지는 것을 원하기에 collection configuration을 바꿔보자

``_config.yml`` 을 열고 ``output: true``를 author collection configuraation에 추가 합니다:
```
collections:
  authors:
    output: true
```  
<br>

이제 너는 보여지는 page에 ``author.url``을 이용해서 연결시킬 수 있다.
staff.html에 이 link를 추가해 보자:
```
---
layout: default
---
<h1>Staff</h1>

<ul>
  {{"{% for author in site.authors "}} %}
    <li>
      <h2><a href="{{"{{ author.url "}} }}">{{" {{ author.name "}} }}</a></h2>
      <h3>{{"{{ author.position "}} }}</h3>
      <p>{{"{{ author.content | markdownify "}}}}</p>
    </li>
  {{"{% endfor "}}%}
</ul>
```

 
게시물과 마찬가지로 작성자를위한 레이아웃을 만들어야합니다.  

다음 내용으로 ``_layouts / author.html``을 작성하세요:
```
---
layout: default
---
<h1>{{"{{ page.name "}} }}</h1>
<h2>{{"{{ page.position "}} }}</h2>

{{"{{ content "}} }}
```
<br>

# Front matter defaults
이제 너는 ``author`` layout을 사용하여 author documents를 설정해 주어야 한다. 이 작업은 단순이 전에 front matter에서 했던 작업을 반복하는 것이다.

너가 궁극적으로 원하는 것은 모든 포스트들이 post layout을 자동적으로 가지는 것이다. authors는 ``author``를 가지고 다른 모든 것들은 default를 사용하게끔

너의 _config.yml에 있는 defaults에 layouts를 추가하라:
```ruby
collections:
  authors:
    output: true

defaults:
  - scope:
      path: ""
      type: "authors"
    values:
      layout: "author"
  - scope:
      path: ""
      type: "posts"
    values:
      layout: "post"
  - scope:
      path: ""
    values:
      layout: "default"
```
<br>
  
이제 너는 모든 pages와 posts로 부터 layout front matter를 지울수 있다. 명심해라 _config.yml이 변경될 경우 Jekyll을 재시작 해야 한다.

# List author's posts
각 author가 자신의 page에 만든 posts의 list를 나타내 보자. 이것을 하기 위해서 너는 author의 ``short_name``과 post의 ``author``를 일치시켜야 한다. 너는 특정 author의 posts들을 얻기 위해서 filter를 써야한다.

``_layouts/author.html``에서 filter된 목록들을 반복하여 author의 posts를 출력하세요:
```
---
layout: default
---
<h1>{{"{{ page.name "}} }}</h1>
<h2>{{"{{ page.position "}} }}</h2>

{{"{{ content "}} }}

<h2>Posts</h2>
<ul>
  {{"{% assign filtered_posts = site.posts | where: 'author', page.short_name "}} %}
  {{"{% for post in filtered_posts"}} %}
    <li><a href="{{"{{ post.url "}}}}">{{"{{ post.title "}} }}</a></li>
  {{"{% endfor "}} %}
</ul>
```
<br>

# Link to authors page
posts에는 author에 대한 참조가 있습니다. 자 이제 author의 page를 서로 연결 시켜 봅시다. 너는 ``_layouts/post.html``에서 사용한 것과 비슷한 filtering technique를 이용하여 이러한 작업을 할 수 있습니다.

```
---
layout: default
---
<h1>{{"{{ page.title "}} }}</h1>

<p>
  {{" {{ page.date | date_to_string "}} }}
  {{" {% assign author = site.authors | where: 'short_name',
  page.author | first "}} %}
  {{" {% if author "}} %}
    - <a href="{{ author.url }}">{{" {{ author.name "}} }}</a>
  {{" {% endif "}} %}
</p>

{{" {{ content "}} }}
```
http://localhost:4000를 열어 staff page를 확인하고 post에 이를 작성한 author가 제대로 연결되어 있는지 체크해 봅시다.  
다음에는 드디어 이 튜토리얼의 마지막 입니다. 이 단계에서는 사이트에 세련된 부분을 추가하고 프로덕션 배포를 위해 준비 할 것입니다.