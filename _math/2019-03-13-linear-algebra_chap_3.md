---
lang: "ko, en"

layout: post_relate
big-title: "math"
middle-title: "linear algebra chapter 3"
small-title: "linear algebra chap 3"
ref: "linear algebra chap 3"
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
# System of linear egns

n개의 알려지지 않은 변수들과 M의 시스템을 가진 linear eqns은 다음과 같은 형태로 표현된다.

$$
\begin{cases}
{a_1}_1x_1+{a_1}_2x_1+\cdots+{a_1}_nx_1 = b_1 \\
{a_1}_1x_1+{a_1}_2x_1+\cdots+{a_1}_nx_1 = b_1 \\
 \vdots                           &   \vdots  \\          
{a_1}_1x_1+{a_1}_2x_1+\cdots+{a_1}_nx_1 = b_1 \\
\end{cases}
$$

이를 메트릭스로 표현하면

$$
\begin{pmatrix}
{a_1}_1 & \cdots & {a_1}_n \\
\vdots & \ ddots & \vdots  \\
{a_n}_1 & \cdots & {a_n}_n \\
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
  b_n \\
\end{pmatrix}
$$

**Def**
----------
1. 만약 $$b=\vec{0}$$ 이라면 이 linear system은 homogeneous라 하고 $$b\neq\vec{0}$$ 이면 nonhomogeneoust라 한다
2. $$Ax=b$$에 대한 해집합을 $${x: Ax=b}라고 하자 이때 이 해집합이 공집합이 아니라면 Ax=b는  consistent라고 하며 아닐경우, inconsistent라 한다

homog 경우에서  Ax=0 이면 consistent 하다($$\vec{x}=\vec{0}$$가 유일한 해가 된다)

**Thm**
---------
Ax=0의 해집합의 null space(nullity)는 $$L_A$$의 null space와 크기가 같다. $$ N(L_A)= N(Ax) $$

Note: 만약 $$ A \in  M_{m\mul n}(\mathbb{F})$$라면 $$L_A$$ 의 multity는 $$n-rank(A)$$와 같다, $$L_A=n-rank(A)$$
> **Cor**: 만약 m < n 이면 Ax=0은 영이아닌 해를 가진다.

**Thm**
----------
Ax=b가 오식 하나의 해를 가질 때 A는 invertible 하다
A가 invertible 할때 Ax=b는 오직 하나의 해만을 가진다. $$x=A^{-1}b$$는 유일하다

**Def** 
---------
1. nonzero row의 가장 첫번째오는 영이아닌 entry는 leading entry라 불린다. (혹은 pivot)
2. 우리는 다음의 조건을 만족하는 matrix를 reduced row echelon form이라 불른다.
