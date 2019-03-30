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

_정의)_ 필드 f 에 대한 Vector space V는 다음과 같은 연상을 하는 집합이이다.
  
$$
  \begin{cases}
   + : (vertor addtion)
   \cdot (scalaar multiplication)
  \end{cases}
$$

또한 위의 조건을 만족하는 $$ x, y, z \in V$$ 와 $$ a,b \in \mathbb{F}$$에 대해서 아래의 연산들은 성립한다.

1. x+y = y+x
2. (x+y)+z = x+(y+z)
3. $$\vec{0}$$+x=x
4. x+(-x) = $$\vec{0}$$
5. 1x = x
6. a(bx) = b(ax)
7. a(x+y) = ax+by
8. (a+b)x = ax+by

물론 위의 x,y,z 항들은 벡터인 $$\vec{x},\vec{y},\vec{z}$$에 대해서도 전부 성립한다. 

Vector space 의 예시
$$\mathbb{F}^n = {(a_1, a_2, \cdots, a_n)= a_1, \cdots, a_n \in \mathbb{F}}$$ 는 모든 n tuple들에 대한 정의이다.