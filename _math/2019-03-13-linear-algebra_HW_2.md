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
\begin{cases}
  -3a+b - (-3a+2b) =  -b = -2-2 \\
  3a-b = 3a - 4 =2
\end{cases} \\

a = 2
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

## 14. (I saw solution)


  
## 15. (I saw solution)

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

$$ 
  \begin{cases}
   by (4),(3) b=c=0 then a = 0 if not it will not be zero
  \end{cases}
$$

so this is linearly indep

## 9
u, v is different vector in vector space V ,$$a, b \in \mathbb{f}$$

$$ \Longrightarrow $$  
Show with antithesis  
Let, if u is not a multiple of the other vector v then u,v is linearly dep  
Then a, b can't not be 0 in same time to show, Because it means lin indep  
  
$$  
a\vec{v}+b\vec{u} \neq 0 \\  
a\vec{v}+b\vec{u} = \vec{k} \\  
$$    

$$ \vec{v} = (-b\vec{u} - \vec{k})/a $$  

Thus, v, u is lin indep   

$$ \Longleftarrow $$  
when u or v is multiple of the other
then $$ \vec{v}=a\vec{u} $$ 
Let,

$$ \vec{v} is 


# 1.6

## 14
