---
lang: "en"
ref: "making jekyll blog project-1"
layout: post_relate
big-title: "programming"
middle-title: "making jekyll blog"
small-title: "making jekyll blog project-1"
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

## Before making jekyll blog

before Starting make a own blog, you should know about those things.


1. Collections
2. permalink
3. Liquid
4. YAML
5. basic HTML, CSS, little bit of SCSS
6. understanding of hole jekyll system
7. bit of Gemspec aknowlege

but don't be afraid, I'll gonna explain for necessary things at another pages. Goto link and study it!


## Make jekyll blog

before start making blog. we'll build blog on minma

type this:  
``jekyll new <yourblogname>``  

I typed   
`` jekyll new  makeblog``

This will make much easlier to bulid basic struct of blog.

## analyze index.html
When you decided to making your own blog, you want to chang header of page.

//give header img here

Then you need to see `index.html` and layouts, Which is the starting page of the webpage. You will know that `index.html` is the first recognition when  user came in. It's in root page(maybe html file not in there, instead md file may exist, then chang md to html)
  
now, Let's go to `index.html` or `index.md` file at there it should be looks like this

```md
---
layout: default
---
{% raw %}
<div class="home">

  <h1 class="page-heading">Posts</h1>

  <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
      </li>
    {% endfor %}
  </ul>

  <p class="rss-subscribe">subscribe <a href="{{ site.baseurl }}/feed.xml">via RSS</a></p>
{% endraw %}
</div>

```

You can notice that {{"{% for post in stie.posts"}}%}  is showing. As I told you this is Liquid. Liquid allows you to use for, if etc,, in html file. (here is some reference)[https://shopify.github.io/liquid/]

However, this is the Liquid that pull out html and md files in /_posts. It's not the header, then where is it?

## analyze default
At the top you can see default, It a (Front Matter)[https://jekyllrb.com/docs/front-matter/]. It's kind of yaml, if you don't know yaml, then just know that is pointing some html file's name.

Go to _layouts, now you can see default.html. 

```md
{% raw %}

<!DOCTYPE html>
<html>

  {% include head.html %}

  <body>

    {% include header.html %}

    <div class="page-content">
      <div class="wrapper">
        {{ content }}
      </div>
    </div>

    {% include footer.html %}

  </body>

</html>
{% endraw %}
```

In here, there is no Front Matter. Witch is coverd with `---` this. But {% raw %}{% include %}{% endraw %} liquid makes containing some files from _includes.

In addition, {{"{{ context "}}}} is the context of caller file, I mean index.html's context 

## analyze head and header file
So now, we came far way from start. we have two choices, one is head.html, the other is header.html. 

You can guess within ``<body>`` tag, that will exist in ``header.html``. because if it's in ``<head>`` tag, we can't see them.

Here is ``header.html`` file

```html
{% raw %}
<header class="site-header">

  <div class="wrapper">

    <a class="site-title" href="{{ site.baseurl }}/">{{ site.title }}</a>

    <nav class="site-nav">
      <a href="#" class="menu-icon">
        <svg viewBox="0 0 18 15">
          <path fill="#424242" d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.031C17.335,0,18,0.665,18,1.484L18,1.484z"/>
          <path fill="#424242" d="M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0c0-0.82,0.665-1.484,1.484-1.484 h15.031C17.335,6.031,18,6.696,18,7.516L18,7.516z"/>
          <path fill="#424242" d="M18,13.516C18,14.335,17.335,15,16.516,15H1.484C0.665,15,0,14.335,0,13.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.031C17.335,12.031,18,12.696,18,13.516L18,13.516z"/>
        </svg>
      </a>

      <div class="trigger">
        {% for my_page in site.pages %}
          {% if my_page.title %}
          <a class="page-link" href="{{ my_page.url | prepend: site.baseurl }}">{{ my_page.title }}</a>
          {% endif %}
        {% endfor %}
      </div>
    </nav>

  </div>

</header>
{% endraw %}
```

``<a class="site-title" href="{{ site.baseurl }}/">{{ site.title }}</a>``
This is a part from header.html, also it's making title of blog.

// your awsome title picture

> If you don't know yaml or struct of blog you'll wender what is `site.title`, it is in `_config.yml` file, named with title. And `site.baseurl` means `localhos:4000/` or `username.github.io/`.
  
> And If you also don't know about `|` and prepend, it is just append site.baseurl at front of `my_page.url`. `site.pages` is name of collections, name with _pages. To understand here you should read page of (collection in jekyll)[https://jekyllrb.com/docs/collections/] or following (step by step ref)[https://jekyllrb.com/docs/step-by-step/01-setup/], because It's very hard to explain all in this page.

`<nav>` the block that we wanted to find. This makes header. so now I wanna make header with `navigation.yml`. To do this, make _data at root,At inside, write `navigation.yml`.
`navigation.yml`:
```yaml
main:
  - name: about
    link: /about/
  - name: "study"
    link: "/study/"
  - name: "projects"
    link: "/projects/"
  - name: "references"
    link: "/references/"
```
  
``header.html``:
```html
  {% for maintype in site.data.navigation.main %}
    {% if maintype.name %}
    <a class="page-link" href="{{ maintype.link | prepend: site.baseurl }}">{{ maintype.title }}</a>
    {% endif %}
  {% endfor %}
```
// put title img

Page hearder is changed, but not finished you should make page with permalink to connect above `navigation.yml` file. To achive this, create file what ever you wants, and add below in Front matter.

```html
---
permalink: /about/
---
```
Then when you click about jekyll will find page that have `permalink: /about/`

we'll make all main pages of study, projects, references at next time
