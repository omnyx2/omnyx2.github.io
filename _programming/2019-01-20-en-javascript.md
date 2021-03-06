---
lang: "en"
ref: "JavaScript"
layout: post_relate
big-title: "programming"
middle-title: "JavaScript Window and DOM BOM"
small-title: "JavaScript, Window and DOM, BOM" 
field:
  - javascript
relate:
  - javascript
toc: true
toc-head-level-choice: false
#do this if head level choice is true
# toc-head-max:
# toc-head-min:
---

# Window object and BOM

## Window

Window object is that handling whole browser. Such as tabs, scroll, History etc... 
Window object can touch browser. And also Window object have these features
1. It is global object, and parent of all objects
2. So it can be skip, like window.onscroll() -> just onscroll()
3. It hold every variable that you made
4. Finally, it contains basic variable types, String, Boolean, Object, Number, Function, Array
5. I'm not sure about this but I think that it's first class citizen

윈도우 객체는 브라우저 전체를 다룹니다. 예를 들면 탭, 스크롤, 주소창 등등 브라우저 전부를 다룰 수 있는  객체라 할 수 있습니다. 그리고 또한 아래의 특징을 지닙니다.
1. 모든 객체의 조상이 되는 전역변수입니다. 
2. 때문에 윈도우 객체는 생략될 수 있습니다. 다음과 같이 window.onscroll() -> onscroll() 처럼 간단히 쓸수 있습니다.
3. 사용자가 만든 모든 변수를 자신 안에 등록시킵니다.
4. 마지막으로 이것은 기본 자바스크립트의 자료형, String, Boolean, Object, Number, Function, Array을 포함합니다.
5. 이것은 확실한 것은 아닙니다만, 위의 특성과 함께 자기 자신을 반환할 수 있다면, window 객체는 1급 객체입니다.
  
## DOM(Document Object Model)
Document object is handling website. Therefore Window object include Document object.
It is programming interface of HTML and XML document. DOM provide some ways that programming language can be access document. It controlls content in ``<body>``, below is a part of DOM methods

Document는 웹사이트를 다루는 오브젝트로써 Window object일부로 생각하면 됩니다. DOM은 HTML과 XML document에 대한 프로그래밍 인터페이스이라고 할 수 있는데요. DOM은 프로그래밍 언어가 document에 접근하여 body내부의 내용을 조작할 수 있습니다.
아래는 DOM의 메소드들 중 일부의 예시 입니다.


### on scroll Event

Excute a JavaScript when a `<div>` elements is being scrolled

`<div>` 요소가  스크롤 됬을때 자바스크립트를 실행한다.

```
<div onscroll="myFunction()">
```


### HTML DOM getElementById() 
This method returns element objects which have specific id value  
``document.getElementById("demo");``  
  
And we can add attribute by using .  
```
function myFunction() {
  var x = document.getElementById("demo");
  x.style.color = "red";
}
  
```  
origin:
```
<p id="demo">
  Click the button to change the color of this paragraph.
</p>
<button onclick="myFunction()">Try it</button>

```
result:  
```
<p id="demo" style="color: red;">
  Click the button to change the color of this paragraph.
</p>
<button onclick="myFunction()">Try it</button>

```

### nodeName

Get the node name of a elepents:

for example:   
```
<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
  var x = document.documentElement.nodeName;
  document.getElementById("demo").innerHTML = x;
}
</script>s
```

result:
``P``


### docuemntElement Property

Return the documentElement of the document, as a node name:

`` var x = document.documentElement.nodeName; ``
return:
``HTML``

In addition it returns HTML or XML or some kind of things. But, In the most it will return HTML.

### innerHTML Property

Change HTML content of element with id 

## BOM(Browser Object Model)
It's a Browser Object Model which is made for communicating between brower and JS.

BOM은 자바 스크립트와 브라우저가 통신할 수 있게 해줍니다. favorite이나 주소창 그런것들을 사용할 수 있게 해줍니다. 


