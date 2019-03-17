---
lang: "ko, en"

layout: post_relate
big-title: "math"
middle-title: "linear algebra chapter 1"
small-title: "linear algebra chap 1.2"
ref: "linear algebra chap 1.2"
field:
  - linear-algebra
relate:
  - linear-algebra
toc: true
toc-head-level-choice: false
#do this if head level choice is true
# toc-head-max:
# toc-head-min:
---
# Chapter 1 Vector space

비공식적으로, 단일 벡터로 기술 할 수있는 모든 양을 스칼라로 표현 : 방향과 크기가있는 양
  
## 1.2 Vector space definition

_정의)_ $$\mathbb{F}$$는 **사칙연산이 성립하는 집합**이다. 예를 들면 실수, 복소수가 있다. 정수나 자연수는 나눗셈이 불가능하기 때문에 사칙연산이 성립하지 않아 필드가 될 수 없다.

나아가 유한 필드도 존재할 수 있다.

예를 들어, $$ \mathbb{Z}={0,1} $$에서는 
| +   | 0   |   1 |
|:---:|:---:|:---:|
| 0   | 0   |   1 |
| 1   | 1   |   0 |

|$$*$$| 0   |   1 |
|:---:|:---:|:---:|
| 0   | 0   |   0 |
| 1   | 0   |   1 |

과 같이 사칙연산이 성립된다. 때문에 이는 닫힌 필드이다.

_정의)_ Vector space 는 