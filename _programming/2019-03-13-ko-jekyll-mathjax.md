---
lang: "ko"
ref: "how to use jekyll mathjax"
layout: post_relate
big-title: "programming"
middle-title: "Mathjax를 이용해 Jekyll에 수식넣기"
small-title: "Mathjax를 이용해 Jekyll에 수식넣기"
field:
  - mathjax
relate: 
  - mathjax
  - jekyll

toc: true
toc-head-level-choice: false
#do this if head level choice is true
# toc-head-max:
# toc-head-min:
---

일반적으로 CS를 접하는 사람은 결국에 수식을 넣을 공간이 필요합니다. 저또한 그러했고, 아마 많은 사람들이 그러했을 것이죠. 그리고 그런사람들을 위해서 jekyll은 수식을 적을수 있는 라이브러리를 지원해 줍니다. 거기에서는 아마 Mathjax가 가장 핫하고, 가장 유명한 라이브러리 입니다.   

https://www.mathjax.org/

# Mathjax 블로그에 적용하기
Math jax를 블로그에 적용하는 것은 매우 간단합니다.
_layouts 폴더에서 default나 어디에든 전체 html 태그에서 body태그의 안쪽 어딘가에 아래의 소스를 붙여 넣어 주면 됩니다.

``<script src="//cdnjs.cloudflare.com/ajax/libs/mathjax/2.5.3/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>``

추가적으로 수식이 복사되지 않게 할 SVG 옵션을 적용할수도 있습니다. 자세한 옵션들에 대해서는 공식 홈페이지를 참조하여 원하는 옵션을 적용해 주세요.

# Mathjax 블로그에 사용하기

적용이 완료되었다면 본격적으로 Mathjax를 블로그에 적용해 봅시다. Mathjax를 사용하기 위해서는 수식을 ``$$``로 시작하고 다시 ``$$`로 닫아 주어야 합니다.

ex1)  
a + b = c  
``$$a + b = c$$``  
$$a + b = c$$  
  
ex2)  
``$$\int f(x)~dx$$``  
$$\int f(x)~dx$$
  

# Mathjax 축약어 알아보기(mathjax 테이블)

기본적인 사용법을 알아봤다면 이제 어떤 기호를 어떻게 쳐야되는지 알아보도록 하겠습니다. [여기](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)에서 정리함  
  
| Mathjax      | math         | ex           |  
|:------------:|:------------:| ------------ |  
| +, -         | plus, minus  |$$ a+b, a-b $$|  
|*, /         |mul, divide  |$$a*b, a/b$$ |
|\sum_{}^n    |sigma        |$$\sum_{t=0}^n i^2$$|
|\frac        |분수          |$${(n^2+n)(2n+1)}{6}$$|
|\alpha       |alpha        |$$ \alpha $$ |
|\Alpha       |alpha        |$$ \Alpha $$ |
|\beta        |beta         |$$ \beta $$  |
|\Beta        |beta         |$$ \Beta $$  |
|\omega       |omega        |$$ \omega $$ |
|\Omega       |omega        |$$ \Omega $$ |
|\delta       |delta        |$$ \delta $$ |
|\Delta       |delta        |$$ \Delta $$ |
