---
lang: "ko, en"
layout: post_relate
big-title: "math"
middle-title: "linear algebra chapter 1"
small-title: "linear algebra chapter 1.1"
ref: "linear algebra chap 1.1"
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

Intro duction of Linear Algebra

선형대수의 핵심용어
$$
  \begin{cases} \\
  선형적 \\
  Matrix \\
  Vertor spaces \\
  \end{cases}
$$

Q: 어떻게 generalized 할 수 있는가?  
1. order는 증가시키지만 변수의 개수는 일정하게 하는것 
+ $$
    \begin{cases} \\
    x^3 + 2x + 5 =0(poly) \\
    \vdots (exp)\\
    \vdots (\vdots)\\
    \vdots (log)\\
  $$ 
2. 변수의 개수는 증가시지만 선형성을 유지하는것
+ e.g) $$
         \begin{cases} 
          3x_1+2x_2+7x_3 = 6 \\
          2x_1-x_2+8x_3 = 2 \\
       $$  
+ e.g) In a matrix form  $$
                           \begin{pmatrix} \\
                            3 & 2 & 7 \\
                            2 & -1 & 8 
                           \end{pmatrix}
                           \begin{pmatrix} \\
                            x_1 \\
                            x_2 \\
                            x_3 
                           \end{pmatrix}
                          =
                           \begin{pmatrix}
                           6 \\
                           2 \\
                           \end{pmatrix}
                          $$
일반화를 하면,

$$
 \begin{pmatrix}
 {a_1}_1 & {a_1}_2 & \cdots & {a_1}_n \\
 {a_2}_1 & \vdots  &        & \vdots  \\
 \vdots  & \vdots  &        & \vdots  \\
 {a_n}_1 & {a_n}_2 & \cdots & {a_n}_n \\
 \end{pmatrix}
 \begin{pmatrix}
 x_1 \\
 x_2 \\ 
 \vdots \\
 x_n \\
 \end{pmatrix}
 =
 \begin{pmatrix}
 b_1 \\
 b_2 \\
 \vdots \\
 b_n
 \end{pmatrix}
$$

This is Linear system

$$
A\vec{x} = \vec{b}
$$

```
Note:
ax=b에서 단일 변수인 x가 $$ A\vec{x} = \vec{b} $$에서 여러 차원의 정보를 담은 데이터인 벡터 x로 바뀐 것이다.
```

e.g) 
+ student information = (id, age, sex, gpa)
+ digital images = ( color codes in each pixel) 

수업 목표
------- 

$$ Ax = b$$ 

A 는 메트릭스 x,b는 벡터 공간 이라고 할때 벡터공간으로부터 matrix formmation 하여 다른 벡터 공간으로의 이동.

1. 벡터를 표현할 수 있게 되는것, 우리는 이를 위해 vector spaces를 배울 것이다.(basis, dim, linear indep, span, subspace등)

2. matrix를 간략하게 만드는 법( 좋은 좌표시스템(basis)를 선택하므로써)
e.g) Diagonalization, Jordon canonial form

Q: 선형성 이란 무엇인가?
  
A: x를 다음의 A(x) 로 대응 시킬 수 있을 때 선형성을 띤다고 할 수 있다.
  
$$
 \begin{cases}
   A(x+y) = A(x) \\
   A(cx) = cA(x) \\
 \end{cases}
$$

결국 다음의 2 성질을 만족할 때 선형성(linearity)을 띈다고 이야기 할 수 있다.
            
$$
 \begin{cases}
  + (vertor addtion) \\
  \cdot(scalar muliti plication) \\
 \end{cases}
$$

