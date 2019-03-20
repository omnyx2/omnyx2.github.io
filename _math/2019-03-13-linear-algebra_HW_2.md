---
lang: "ko, en"
ref: "linear algebra hw 1"
layout: post_relate
big-title: "math"
middle-title: "linear algebra hw"
small-title: "linear algebra hw 2"
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
# 1.4

## 3-f).
  
$$ a(-3,-3, 3) + b(1, 2, -1) = (-3a+b, -3a+2b,3a-b)=(-2,2,2)$$
  
$$
\\
\begin{cases}
  -3a+b - (-3a+2b) =  -b = -2-2 \\
  3a-b = 3a - 4 =2
\end{cases} \\
  
a = 2 \\
b = 4
$$
  
$$
\begin{cases}
  (-6+4, -6+8, 6-4) = (-2, 2, 2)
\end{cases}
$$
  
Yes first vector can be expressed as a linear combination of the other two.

## 5-h).
To show span 

$$
a
\begin{pmatrix}
  1 & 0 \\
  -1 & 0 \\ 
\end{pmatrix}
+
b
\begin{pmatrix}
  0 & 1 \\
  0 & 1 \\ 
\end{pmatrix}
+
c
\begin{pmatrix}
  1 & 1 \\
  0 & 0 \\ 
\end{pmatrix}
=
\begin{pmatrix}
  1 & 0 \\
  0 & 1 \\ 
\end{pmatrix}
$$

$$
\begin{pmatrix}
  a+c & b+c \\
  -a & b+c \\
\end{pmatrix}
=
\begin{pmatrix}
  1 & 0 \\
  0 & 1 \\
\end{pmatrix}
$$

But

$$
  \begin{cases}
    -a = 0  \cdots (1) \\
    a+c = 1 \cdots (2) \\
    b+c = 0 \cdots (3) \\
    b+c = 1 \cdots (4) \\
  \end{cases}
$$

So it doesn't span of S

## 14*. 
  
Let 
$$ a, b \in \mathbb{F} $$
$$ x \in span(S_1 \cup S_2)$$
  
$$
\begin{cases}
  S_1 = {x_1, x_2, \cdots, x_n} \\
  S_2 = {y_1, y_2, \cdots, y_k} 
\end{cases}
$$
  
then, 

$$ S_1 \cup S_2 = {x_1, x_2, \cdots,x_n,y_1, y_2, \cdots, y_k} $$
  
$$ x = a_1x_1 + \cdots + a_nx_n + b_1y_1 + \cdots + b_ky_k $$

It means
$$ x \in span(S_1) + span(S_2)  $$

thus, $$ span(S_1) + span(S_2) $$
then $$ span(S_1 \cup S_2) $$ also contain $$ \exists x$$

Hence
$$\Longrightarrow span(S_1 \cup S_2)= span(S_1) + span(S_2) $$


## 15*. 

# 1.4 

## 2-c)

To check linearly independent

$$ a(x^3+2x^2)+b(-x^2+3x+1)+c(x^3-x^2+2x-1) = 0 $$

$$ (a+c)x^3 + (2a-b-c)x^2 + (3b+2c)x + b-c=0 $$

$$ 
  \begin{cases}
   a+c = 0 \cdots(1)\\
   2a-b-c = 0 \cdots(2)\\
   3b+2c = 0 \cdots(3)\\
   b-c = 0 \cdots(4) \\
  \end{cases}
$$
  
by (4),(3) b=c=0 then a = 0 if not it will not be zero

so this is linearly indep

## 9
u, v is different vector in vector space V ,$$a, b \in \mathbb{f}$$

$$ \Longrightarrow $$  
Show with antithesis
Then  if u is not a multiple of the other vector v then u,v is linearly indep  
Let, if u is not a multiple of the other vector v then u,v is linearly dep
  
$$  
a\vec{v}+b\vec{u} = 0 \\  
$$    

$$ \vec{v} = (-b\vec{u})/a $$ 

but v and u doesn't not have same direction
Then a, b can't not be 0 in same time, Because it means lin indep
Thus, linearly dependent when u or v is a multiple of the other. 

$$ \Longleftarrow $$  
when u or v is multiple of the other $$ \vec{v}=a\vec{u} $$ 
Let, it is linearly indep
  
$$ \vec{v}= a\vec{u} $$

if

$$ \vec{u} $$ is half of 2
then,

$$ \vec{v}-2\vec{u} = 0 $$
  
So, it linearly dep, it's false, As a result lineary when u or v is multiple of the other then it is linearly indep

finally, linearly dependent if and only if u or v is a multiple of the other. 

# 1.6

## 14
  
$$ W_1 = {a_1, a_2, a_3, a_4, a_5} \in \mathbb{F}: a_1 - a_2 - a_3 = 0} $$
  
So, 
 
$$ a_1 = a_3 + a_4 $$
  
then for $$ a_1, a_3, a_4 $$ we only need two dim, and we need a_2, and a_4, 2 dims
thus we need 4 dim for $$ W_1 $$


$$ W_2 = {a_1, a_2, a_3, a_4, a_5} \in \mathbb{F} : a_1 = a_2 = a_3 = 0, a_1 = -a_5} $$

So, 

$$ a_1 = a_3 = a_4 =  0 $$

then for $$ a_1, a_3, a_4 $$ we only need one dim , and we need 1 dims to determine $$ a_1 or a_5 $$
thus we need 2 dim for $$ W_2 $$


## 22.

Let $$ W_1 $$ is subspace of $$ W_2 $$ then,
  
  $$ W_1 \cap W_2 = W_1 \Rightarrow dim(W_1 \cap W_2) = dim(W_1) $$
  
Next, show  it's necessary condition
Assume, $$ W_1 $$ is not a subpace of $$ W_2 $$, then $$ \exists x \in W_1 $$ and that $$ x \notin W_2 $$

Let set of $$\exists{x}$$ $$\mathbb{X}$$

then

$$  dim(W_1 \cap W_2) < dim(W_1 \cap W_2) + dim(\mathbb{X}) \leq dim(W_1) $$

Thus, $$ W_1 $$ must be subspace of $$ W_2 $$ to become 
  
$$ dim(W_1 \cap W_2) = dim(W_1) $$

So, nessary condition is that $$ W_1 $$ is subspace of $$ W_2 $$