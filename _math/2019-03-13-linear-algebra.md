---
lang: "ko, en"
ref: "linear algebra hw 1"
layout: post_relate
big-title: "math"
middle-title: "linear algebra hw 1"
small-title: "linear algebra hw 1"
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
# 1.2

## 12.
To prove even function is the set of vector space, we need to check $$+$$ and $$ \centerdot $$ 

$$ let $$
$$ \mathrm{t,s} \in  \mathbb{R} $$ and f, g is even function  
  
  $$ f(-t) = -f(t) $$   
  
  $$ f(t) = -f(-t) $$  
   
If $$ t, s $$ is $$ \in \mathbb{R} $$ then $$ t + s $$ $$ \in \mathbb{R} $$  
  
$$ f(-t-s) = f(-(t+s)) = -f(t+s) $$

And for scalar multiplication, $$ (cf)(t)=c(f(t)) $$
is trivial

As a Result, even function is the set of vector space is true

## 18.

$$ (a_1, a_2)+(b_1,b_2) = (a_1+b_2,a_2+3b_2) $$
  
means
   
$$ (a_1, a_2)\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} + (b_1, b_2)\begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix} $$

let $$ (c_1, c_2), (d_1, d_2) \in \mathbb {R} $$
then,

$$ (c_1+a_1, c_2+a_2)\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} + (d_1+b_1, d_2+b_2)\begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix} $$

should be equl to 

$$ (a_1, a_2)\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} + (b_1, b_2)\begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix} + (c_1, c_2)\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} + (d_1, d_2)\begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix} \cdot (1) $$

Let's break apart

$$ (a_1, a_2)\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} +(c_1, c_2)\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} $$

$$ ((a_1, a_2)+(c_1, c_2))\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} $$

In the same way

$$  ((a_1, a_2)+(c_1, c_2))\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} +  ((b_1, b_2)+(d_1, d_2))\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = (1) $$

let $$ c \in \mathbb{R} $$,  
And ($$c(1)$$), scalar multiplication, It is totally same with multipilcation of general vector and scalar, so It's true

## 19.
To show V is vector space  over R
Let $$ (a_1, a_2), (b_1, b_2) \in \mathbb{R^2} $$
 
+ Case c $$ = $$ 0:  
In this case, \forall x \in {R} in vector space V becomes 0, so It's true   
  
+ Case c $$ \neq $$ 0:
$$ c(a_1+b_1, a_2+b_2) = c(a_1+b_1) + \frac{a_2+b_2}{c}  

to prove 

$$ c(a_1+b_1, a_2+b_2) = c(a_1) + \frac{a_1}{c} + c(b_1) + \frac{b_1}{c} $$  
  
$$ c(a_1) + c(b_1) + \frac{a_1}{c}  + \frac{b_1}{c} $$  
  
then,
    
$$ c(a_1+b_1) + \frac{a_2+b_2}{c} $$  

so It's true. 
V is vector space  over R

# 1.3

## 5.
To show $$ A + A^t $$ is symmetric
let, $$ i \neq j $$ and $$ i,j \in \mathbb{n} $$
$$ A +  A^t = B = \begin{pmatrix} 
          {a_1}_1     & \cdots & {a_n}_1 \\
          \vdots      & \ddots & \vdots  \\
          {a_1}_{n-1} & \cdots & {a_n}_n 
        \end{pmatrix}
   +
   \begin{pmatrix} 
          {a_1}_1     & \cdots & {a_1}_n \\
          \vdots      & \ddots & \vdots  \\
          {a_{n-1}}_1 & \cdots & {a_n}_n 
        \end{pmatrix}
$$  
then,  $$ {B_i}_j = {a_i}_j + {a_j}_i $$ and this is equal to $$ {B_j}_i = {a_j}_i + {a_i}_j $$ 
So,

$$ \forall{B_i}_j$$ has pair $$ {B_j}_i $$ without $$ {B_i}_i$$, in addition it is not nessary to know about $$ {B_i}_i$$
 when proving symmetric because it is just digonal line.

As a result, $$ A + A^t $$ is symmetric

## 8.a
Frist,

$$ a_1 = 3a_2 \to a_1 - 3a_2 = 0 $$

$$ a_3 = -a_2 \to a_3 + a_2 = 0 $$   
  
let $$ (a_1, a_2, a_3), (b_1, b_2, b_3) \in \mathbb{R^3} $$
then, for $$ (a_1+ b_1, a_2+b_2, a_3+b_3) $$

$$ (a_1 + b_1 ) - 3(a_2+b_2 ) = (a_1-3a_2) + (b_1-3b_2) = 0 + 0 = 0 $$

$$ (a_3 + b_3 ) + (a_2+b_2 ) = (a_3+a_2) + (b_3+b_2) = 0 + 0 = 0 $$

and scalar multiplication is trivial

So, yes, $$W_1$$ is subspace 

## 8.b
Frist,

$$ a_1 = a_3 + 2 \to a_1 - a_3 = 2 $$

let $$ (a_1, a_2, a_3), (b_1, b_2, b_3) \in \mathbb{R^3} $$
then, for $$ (a_1+ b_1, a_2+b_2, a_3+b_3) $$

$$ (a_1+b_1 ) - (a_3+b_3 ) = ( a_1-a_3) + (b_1-b_3) = 2 + 2 \neq 2 $$

So, $$W_2$$ is not a subspace 

## 12. 
Frist,
  
  $$ \begin{pmatrix}
       0 & \cdots & 0 \\
       \vdots & \ddots & \vdots\\
       0 & \cdots & 0\\
     \end{pmatrix}
  $$

is also upper triangular
so,
  $$ 0 \in A $$

Second,  
Let, $$ {a_i}_j, {b_i}_j, {c_i}_j \in \mathbb{R} $$ and $$ {a_i}_j + {b_i}_j = {c_i}_j $$

   $$ X + Y = \begin{pmatrix}
       {a_1}_1 & {a_1}_2 &  \cdots & {a_1}_n\\
       0       & {a_2}_2 &  \cdots & {a_2}_n \\
       \vdots  & \ddots  &  \vdots & \vdots \\
       0       & 0       &  \ddots & {a_{m}}_n \\
       0       &  0      &  \cdots & 0 \\
     \end{pmatrix}
     +
     \begin{pmatrix}
       {b_1}_1 & {b_1}_2 &  \cdots & {b_1}_n\\
       0       & {b_2}_2 &  \cdots & {b_2}_n \\
       \vdots  & \ddots  &  \vdots & \vdots \\
       0       & 0       &  \ddots & {b_{m}}_n \\
       0       &  0      &  \cdots & 0 \\
     \end{pmatrix}
     =
     \begin{pmatrix}
       {c_1}_1 & {c_1}_2 &  \cdots & {c_1}_n\\
       0       & {c_2}_2 &  \cdots & {c_2}_n \\
       \vdots  & \ddots  &  \vdots & \vdots \\
       0       & 0       &  \ddots & {c_{m}}_n \\
       0       &  0      &  \cdots & 0 \\
     \end{pmatrix}
  $$
    
$$ {c_i}_j \in \mathbb{R} $$

so $$ X+Y \in A$$

Third,
  $$ cX =   
    c\begin{pmatrix}
       {a_1}_1 & {a_1}_2 &  \cdots & {a_1}_n\\
       0       & {a_2}_2 &  \cdots & {a_2}_n \\
       \vdots  & \ddots  &  \vdots & \vdots \\
       0       & 0       &  \ddots & {a_{m}}_n \\
       0       &  0      &  \cdots & 0 \\
     \end{pmatrix}
     =
     \begin{pmatrix}
       c{a_1}_1 & c{a_1}_2 &  \cdots & c{a_1}_n\\
       0       & c{a_2}_2 &  \cdots & c{a_2}_n \\
       \vdots  & \ddots  &  \vdots & \vdots \\
       0       & 0       &  \ddots & c{a_{m}}_n \\
       0       &  0      &  \cdots & 0 \\
     \end{pmatrix}
  $$      
and $$c{a_i}_j \in \mathbb{R}$$, $$cX \in A$$

above three condition it is true.

## 17.
If when W is vector space of V then vector addition and scalar multiplication should be follow

So, for some $$x, y \in \mathbb{W}$$, and $$ c \in F$$
then,  
$$ \Rightarrow  $$

if

$$1) \emptyset \in W (1)$$ 

then, it will not be subspace of vector space V
because, emptyset is not additive
So,

$$1) \emptyset \notin W (1)$$

$$2) x+y \in {W} (2)$$ 

$$3) cx  \in {W} (3)$$

it is true  
$$ \Leftarrow $$

$$1) 0 \in W \Rightarrow \emptyset \notin W (1)$$ 

$$2) x+y \in {W} (2)$$ 

$$3) cx  \in {W} (3)$$


By definition of subspace of vector space, it is true


W is vector space iff 

$$1)\emptyset \notin W (1)$$ 

$$2) x+y \in {W} (2)$$ 

$$3) cx  \in {W} (3)$$

