---
lang: ko
ref: "jekyll how to use ref-blogging"
layout: post_relate
big-title: programming
middle-title: "Jekyll step by step reference"
small-title: "jekyll 사용법 레퍼런스 번역-blogging"
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
  

# 8. Blogging

  예상해보건데 데이터베이스가 없어도 블로그를 만들 수 있는가에 대해 궁금할 것이다. 진정한 Jekyll style은 오직 text files 만으로 블로그를 만들수 있다.

## Post  
  
  
블로그의 ``posts``는 ``_posts``라는 이름을 가진 폴더 속에 있다. 그리고 이런 posts들은 특별한 **format**을 가져야 하는데 이는, _게시일, 제목, 확장자_ 명이다.


다음의 예시에서 알아보자  
  우선 ``_posts/2018-08-20-banana.md``파일을 만든다. 그 이후 파일에 아래의 코드를 넣도록한다.   
  
  ```
  ---
  layout: post
  author: jill
  ---
  A banana is an edible fruit – botanically a berry – produced by several kinds
  of large herbaceous flowering plants in the genus Musa.

  In some countries, bananas used for cooking may be called "plantains",
  distinguishing them from dessert bananas. The fruit is variable in size, color,
  and firmness, but is usually elongated and curved, with soft flesh rich in
  starch covered with a rind, which may be green, yellow, red, purple, or brown
  when ripe.  
  ```

이는 너가 만들었던 ``about.md``에서 ``author``와 다른 레이아웃을 사용했다는 것을 제외하면 비슷한다. ``author``는 **custom variable**로써, 굳이 필요한 것은 아니며 ``creator``로 지어도 될 이름이였다.
  
## Layout  
위에서 적은 ``post`` layout은 아직 존재하지 않는다. 이제 부터 이것을 ``_layouts/post.html``에 만들 것이다. 파일을 만들고 아래의 내용을 넣도록 하자.  

~~~
---
layout: default
---
<h1>{{"{% page.title"}}%}{{"{% endraw "}}%}</h1>
<p>{{"{{ page.date | date_to_string"}}}} - {{"{{ page.author "}} }}</p>

{{"{{ content "}}}}
~~~
  
이는 앞쪽의 layout ingeritance(상속)의 예제이다. 해당 post에서는 제목 날짜 작성자와 default layout에 있는 일부 내용이 보여진다.

또한 ``date_to_string``를 기억해야된다. 이 포맷은 date를 좀 더 나은 형태로 바꿔준다. [자세한것참](https://jekyllrb.com/docs/liquid/filters/)

## List posts
현재 위에서는 blog의 post로 이동할 수 있는 방법이 없다. 일반적인 blog는 모든 post들에 대한 리스트가 나와있는 페이지가 나와있다. 이제 이것을 해보자  

Jekyll은 ``site.posts``에서 posts를 사용할 수 있게 해준다.

``/blog.html``를 만들고, 아래의 코드를 넣는다.

```
---
layout: default
title: Blog
---
<h1>Latest Posts</h1>

<ul>
  {{ "{% for post in site.posts" }}%}
    <li>
      <h2><a href="{{ "{{ post.url "}}}}">{{ "{{  post.title "}}}}</a></h2>
      <p>{{ "{{ post.excerpt "}}}}</p>
    </li>
  {{ "{% endfor" }}%}
</ul>
```

위의 코딩에서 몇가지를 짚고 넘어가보자:  
+ ``post.url`` 은 Jekyll에 의해 자동적으로 생성되는 ``post``의 *출력경로* 이다.  
+ ``post.title``은 post의 filename으로 부터 추출되며 ``title``에 셋팅된 front matter에 의해서 덮혀씌워진다.
+ ``post.excerpt``는 default에 의해 나온 content의 첫번째 구절이다.

이어서 너는 이번 페이지로 이동하기 위한 ``navigation``을 통해 만들어야된다. ``_data/navigation/yml``을 열고 다음의 entry를 blog page를 만들기 위해 추가한다.  

```
- name: Home
  link: /
- name: About
  link: /about.html
- name: Blog
  link: /blog.html
```

## More posts
블로그는 하나의 포스트 만으로는 멋지지 않죠. 몇가지를 더 추가해 봅시다:

``_posts/2018-08-21-apples.md``:

```
---
layout: post
author: jill
---
An apple is a sweet, edible fruit produced by an apple tree.

Apple trees are cultivated worldwide, and are the most widely grown species in
the genus Malus. The tree originated in Central Asia, where its wild ancestor,
Malus sieversii, is still found today. Apples have been grown for thousands of
years in Asia and Europe, and were brought to North America by European
colonists.

```

``_posts/2018-08-22-kiwifruit.md``;
```
---
layout: post
author: ted
---
Kiwifruit (often abbreviated as kiwi), or Chinese gooseberry is the edible
berry of several species of woody vines in the genus Actinidia.

The most common cultivar group of kiwifruit is oval, about the size of a large
hen's egg (5–8 cm (2.0–3.1 in) in length and 4.5–5.5 cm (1.8–2.2 in) in
diameter). It has a fibrous, dull greenish-brown skin and bright green or
golden flesh with rows of tiny, black, edible seeds. The fruit has a soft
texture, with a sweet and unique flavor.
```
자 이제 localhost:4000을 열어서 작성한 포스트를 확인해 봅시다.
다음에서 우리는 각 포스트 작성자에 대한 페이지를 만들 것입니다.