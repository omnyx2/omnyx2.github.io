---
lang: "ko"
ref: "jekyll, how to use markdown to decorate github blog"
layout: post_relate
big-title: "programming"
middle-title: "Jekyll 꾸미기"
small-title: "jekyll, github blog markdown 사용하는 법, 예쁘게 꾸미자"
field:
  - markdown
  - kramdown
relate:
  - kramdown
  - jekyll
toc: true
toc-head-level-choice: false
#do this if head level choice is true
# toc-head-max:
# toc-head-min:
---
<br>
  
# github blog Markdown 사용하기
   
## post를 예쁘게 꾸미는 법

 사실 당신이 이미 github blog를 쓰는로 결정한 순간 Markdown을 사용해야만 하며, markdown만으 이미 포스트를 예쁘게 쓰는것은 체념하는 것이 편하다.
 마크다운은 어디까지나 plain text(그러니까 메모장)을 읽여들여 Html tag를 자동으로 만들기 때문에, 만약 이 글이 단순히 github blog를 쓰고 싶은 것이 아닌, 디자인적으로 아름답게 만들고 싶다면 재빠르게 뒤로가기를 연타하면된다. 내 개인적인 견해로 markdown언어는
 귀찮음과 이쁜 그 사이의 타협을 맞춘것이라 생각한다. 때문에 더욱 예쁘게 만들기 위해서는 html tag와 아래의 마크다운 문법을 섞어 쓰면 된다.
<br>
  
## basic 마크 다운 사용법  
 기본 마크 다운 사용 법은 그냥 md 확장자의 파일을 만들고, typing을 할 때 특정 기호를 넣어주면 알아서 해당 영역에 형태가(이탈릭체, 볼드체 등) 입혀지는 방법이다. 당장 이해가 안가도 상관없다. 아래에서 어떻게 쓰는지 자세히 설명할 것이다.  
<br>
 ```
 _이런식으로으로 md 쓰면 된다_
 ```
 
 _이런식으로 md 쓰면 된다_
<br>
  
## jekyll markdown
일단 조금 더 추가 설명을 덧붙이자면 jekyll 자체는 markdown만 지원하지 않는다! jeykll의 공식문서에서는 자신들은 [Karmdown](https://jekyllrb.com/docs/configuration/markdown/)을 지원한다고 나와있는데, 이는 markdown을 개조하여 추가적인 사용을 가능하게 만든것들이다. 추가적으로 jekyll은 Redcarpet이랑 Custom markdown을 허용해준다. Redcarpet은 코드를 입력할때 색을 입력해주고, Custom markdown은 markdown을 만들게 해준다. 여기서는 Markdown과 post를 만들때 많이쓰는 기능에 대해서만 조금 달아 놓았다. 만약 Kramdown을 건들고 싶으면 링크를 타고 들어가면된다. 다만 이것들은 당신이 프로그래머이며 영어를 잘하지 않을 경우 함부로 건들이지 않는것을 추천한다. 관련자료는 전부 영어이기에.
<br>  



# Markdown Cheat sheet tree
<dl>
  <dt>Markdown Cheat sheet</dt>
  <ul>
  <li><a href="#link_breaking"> \n, 개행</a><br></li>
  <li><a href="#Header"> Header</a><br></li>
  <li><a href="#Empahsis"> Empahsis</a><br></li>
  <li><a href="#Lists"> Lists</a><br></li>
  <li><a href="#Images"> Images</a><br></li>
  <li><a href="#Code_and_SyntxHighlighting"> Code and SyntxHighlighting</a><br></li>
  <li><a href="#Tables"> Tables</a><br></li>
  <li><a href="#Blackquotes"> Blackquotes</a><br></li>
  <li><a href="#lnline_HTML"> lnline HTML</a><br></li>
  <li><a href="#Horizontal_Rule"> Horizontal Rule</a><br></li>
  <li><a href="#YouTube_Videos"> YouTube Videos</a><br></li>
  <li><a href="#content_inline"> content inline</a><br></li>
  </ul>
</dl>


<a id="link_breaking"></a><br>
## \n, 개행
> **Code**

```
markdown에서는 개행을 하기위해
맨끝에 두번 띄워 주어야한다.  
markdown에서는 개행을 하기위해
  맨끝에 두번 띄워 주어야한다.  

markdown에서는 개행을 하기위해
맨끝에 두번 띄워 주어야한다.  
```
<br>
  
> **Show**
  
markdown에서는 개행을 하기위해
맨끝에 두번 띄워 주어야한다.  
markdown에서는 개행을 하기위해
  맨끝에 두번 띄워 주어야한다.  
   
markdown에서는 개행을 하기위해
맨끝에 두번 띄워 주어야한다.  
<br>

#### 주의할점
```
 엔터하고 2번띄워주면 한줄이 비고 띄워지고, 문장의 마지막에 두번띄우면 개행이된다.
 그렇다면 엔터를 누르고 2번 띄워주기를 반복하면 계속 띄워질까? 아니다.
 이점을 명심해야한다. 두줄을 띄우고 싶다면 <br> 태크를 이용하도록하다.
```
<br>  
<a id="Header"></a>

## Headers
> **Code**

```
H2
------
H1
======

It's just diffrenct expressions of same result h1, h2
# H1
## H2
### H3
#### H4
##### H5
###### H6
```
<br>
  
> **Show**
  
H1
======
H2
------
It's just diffrenct expressions of same result h1, h2  
# H1  
## H2    
### H3  
#### H4    
##### H5  
###### H6    
<br>
  
#### 주의할점
```
 이 # 테그는 반드시 앞쪽에 여백을 두면 출력되지 않음을 기억해야 한다.
```
<br>
<a id="Empahsis"></a>

## Empahsis
> **Code**
  
```
이탈릭체, *italics* _italics*,
볼드체,   **blod**  __blog__,
섞어쓰기, **mix _them_ together**
선긋기,   ~~Strikethrough~~
```
<br>
  
> **Show**
  
이탈릭체, *italics* _italics*,  
볼드체,   **blod**  __blog__,  
섞어쓰기, **mix _them_ together**  
선긋기,   ~~Strikethrough~~  
<br>

<a id="Lists"></a>
 
## Lists
> **Code**
  
```
1. list1
  1. 하하!
  + list2
2. list3  
  1. 호호!
  2. 히히@
  - list4야
    + 야야
3. list5
  * list6
```
<br>
  
> **Show**
  
1. list1
  1. 하하!
  + list2
2. list3  
  1. 호호!
  2. 히히@
  - list4야
    + 야야
3. list5
  * list6
<br>
    
#### 주의할점
```
기본 markdown view에서는 정상적을 안보인다. 또한 +,-,*가 jekyll markdown에서는 구별된다. 마지막으로 이 태그는 들여쓰기 위해서는 앞의 2컨 띄어쓰기를 반드시 해야한다.
```
<br>

<a id="Images">

## Images
> **Code**
  
```
이미지의 경우 2가지 방식을 가져 올 수 있다. 첫 번째가 Inline-style이다.
Inline-style: 
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

두번째로는 Reference-style이 있다.
Reference-style:

![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"
```
<br>
  
> **Show**
  
이미지의 경우 2가지 방식을 가져 올 수 있다. 첫 번째가 Inline-style이다.
Inline-style:
   
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

두번째로는 Reference-style이 있다.
Reference-style:

![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"
<br>
    
#### 주의할점
```
이미지를 작업할 때 자신의 블로그 파일 내에서 상대경로를 통해서하는 것을 권장한다.
그 까닭은 PC작업환경과 github의 작업환경이 다르기 때문에 경로가 다를경우,
미처 확인 하지 못한 문제가 발생할 수 있기 때문이다.  
```
<br>
<a id="Code_and_SyntxHighlighting"></a>

## Code and SyntxHighlighting
> **Code**
<pre>
```
$ sudo vi ~/.bashrc
```

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```
 
```python
s = "Python syntax highlighting"
print s
```
 
```
No language indicated, so no syntax highlighting. 
But let's throw in a <b>tag</b>.
```
</pre>  
<br>
  
> **Show**
  
```
$ sudo vi ~/.bashrc
```

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```
 
```python
s = "Python syntax highlighting"
print s
```
 
```
No language indicated, so no syntax highlighting. 
But let's throw in a <b>tag</b>.
```
<br>
    
#### 주의할점

 이러한 Syntax Highlighting 기능은 Markdown에서 지능되는 기능이 아님을 명심하자.
 이러한 기능은, renderer에서 추가적으로 지원하는 것임을 명심하자. 여기서는 jekyll의 renderer로 생각된다. 가능한 모든 하이라이트의 종류는 다음과 같다. [compelet list](https://highlightjs.org/static/demo/)
  
<br>
<a id="Tables"></a>

## Tables
> **Code**
  
```
:은 columns의 정렬하는데 쓰인다.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

테이블을 만들때 반드시 각 header cell 별로 3개 이상의 dash가 필요하다.(---)
가장 양옆에 있는 pipe는(|) 선택사항이다. 또한 내부에 inline markdown을 사용할 수 있다.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3
```
<br>
  
> **Show**
  
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

테이블을 만들때 반드시 각 header cell 별로 3개 이상의 dash가 필요하다.(---)
가장 양옆에 있는 pipe는(|) 선택사항이다. 또한 내부에 inline markdown을 사용할 수 있다.

Markdown | Less | Pretty  
--- | --- | ---  
*Still* | `renders` | **nicely**  
1 | 2 | 3  
<br>
    
#### 주의할점
```
 조금 힘들더라도 예쁘게 만들자.. 나중에 후회한다.
```
<br>
<a id="Blackquotes"></a>

## Blackquotes
> **Code**
  
```
> 인용구 작성 이렇게
하면 안끝나요  
> 끝낼려면 이렇게

>한칸 띄워주고 개행작업 해주세요
```
> **Show**
  
> 인용구 작성 이렇게
하면 안끝나요  
> 끝낼려면 이렇게

>한칸 띄워주고 개행작업 해주세요
<br>
    
#### 주의할점
```
개행 작업은 엔터누르고 스페이스바 2번을 말해요
```
<br>
<a id="lnline_HTML"></a>

## lnline HTML
> **Code**
  
html 태그도 사용 가능합니다
```
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>
```
> **Show**
  
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>
     
#### 주의할점
```
다만 내부에서는 **,*과 같은 Markdown은 제대로 동작하지 않습니다.
```
<br>
<a id="Horizontal_Rule"></a>

## Horizontal Rule
> **Code**
  
```
이런것도
---
가능
***
하답니다
___

```
<br>

> **Show**

이런것도
---
가능
***
하답니다
___
<br>
    
#### 주의할점
없어요
<br>
<a id="YouTube_Videos"></a>

## YouTube Videos
> **Code**
  
```
<a href="http://www.youtube.com/watch?feature=player_embedded&v=YOUTUBE_VIDEO_ID_HERE
" target="_blank"><img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>
```
<br>
  
> **Show**

<a href="http://www.youtube.com/watch?feature=player_embedded&v=FavUpD_IjVY
" target="_blank">
  <img src="http://img.youtube.com/vi/FavUpD_IjVY/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" />
</a>
<br>
    
<br>
<a id="content_inline"></a>

### {{"{{  "}}}}와{{"{% "}}%} 를 보여주기
이게 큰 문제점이 있는데 일단 jekyll 이 엔진을 자체적으로 빠르게 {{"{{ "}}}} 나 {{"{%  "}}%}를 찾아서 동작시키기 때문에 특수한 태그를 주어야한다. 이것이 골치아픈 점은 code블럭에 넣어도 우선순위에 의해 동작시키게 되기 때문에 원하는대로 할 수 없다.
이러한 것을 해결하는데는 2가지 방법이 있다. 하지만 여기서는 하나만 소개 하도록 하겠다.
> **code**
  
```
 {% raw %}{{"{{ "}}}} {% endraw %}
 {% raw %}{{"{%  "}}%}{% endraw %}
 쉽게 풀어보자면 {% raw %}{{" "}}{% endraw %}를 앞과 뒤로 분리하여 {% raw %}1번{{ 2번}}{% endraw %}, {% raw %}1번{% 2번%}{% endraw %}지점에 넣은 방식이다.
```

> **show**  
   
 {{"{{ "}}}}  
 {{"{%  "}}%}

#### 주의할점
이건 마크다운이 아니다.
<br>
