---
lang: "ko"
ref: "C++"
image-name: "bg.jpg"
layout: landing_post_relate
big-title: "C++"
middle-title: "C++ 문법"
small-title: "C++ 시작하기" 
field:
  - C++
relate:
  - C++ grammer
toc: true
toc-head-level-choice: false
#do this if head level choice is true
# toc-head-max:
# toc-head-min:
---
# 안녕? C++

 프로그래밍을 하다보면 자주 마주치지만 잘 모르는 언어를 꼽으라 한다면 1위는 C++일 것이다. 유년기 시절 C를 배우면서도 충분히 어려웠었는데, C++는 그것보다 더 어렵다는 말을 자주 들으며 배우기전에 포기했기 때문인지 지금도 C++는 내게 친숙한 언어가 아니다. 하지만 프로그래밍을 하다보면 어느샌가 엔진의 밑단을 보아야 하고 그런 소프트웨어의 엔진의 밑단을 살피다보면 어느 순간 C++는 내게 물씬 다가와 있다는 것을 느낀다. 때문에 C++에 대한 이해를 제대로 진행하지 않고서 밑단이 C++로 작성된 프로그램의 내부구조를 제대로 훝어보기란 어려우며, 나아가 더 높은 프로그래머로써의 경지로 나아가기에 큰 장애물임은 틀림없다. 이에 이번 기회에 C++를 정리하며 배워보고자 한다.

## C++ 컴파일하기 실행하기
 윈도우는 간단한 C++ 컴파일 프로그램들이 많기 때문에(devC++)이 중 아무거나 다운받고 실행시키시면 생각된다. 개인적으로는 문법을 배우는데 있어서 너무 무거운 툴보다는 가벼운 툴이면 만족스럽게 코딩하기에 더 좋으므로 Dev C++ 이나 CODE를 추천하나, 자신이 C++로 향후 어떤 프로젝트를 하기로 생각한다면 미리 VISUAL STUDIO를 통해 코딩을 진행하여 그 사용법을 숙지하는 것도 나쁘지는 않은 선택일 것이다. 하지만 어쨋건 여기의 글들을 따라하기에는 Dev C++이 가장 좋을 것이다. 우분투 사용자의 경우는 G++를 설치해야 하는데 설치에 대해서는 언급을 생략하고 넘어가도록 하겠다. 필자의 컴파일 환경을 환경은 Ubuntu를 사용하며, G++사용하여 코딩을 진행하고 있다.
  
  G++를 이용해 컴파일 하는 과정은 아래와 같다.
  
1. 원하는 이름으로 CPP 파일을 만듭니다. 예를 들어 IWANT.cpp를 만들었다 하자. 그리고 
  
```g++ -o filename IWANT.cpp```

를 쳐주시면 컴파일이 된다. 이때 filename은 실행파일의 이름입니다. 초보자가 헷갈릴 수 있는점은 실행파일은 .exe파일을 만들고 cpp파일은 우리가 코딩한  파일이라는 점이다. 나는 filename으로는 abc를 쳐보겠다.

```g++ -o abc IWANT.cpp```
  
이렇게 치게되면 IWANT.cpp에 적은 내용이 컴파일러에 의해 abc라는 실행파일이 만들어져 있다. 이를 실행시키기 위해서는

```./filename```

을 터미널에 입력해 주시면 실행된다.

아래는 좀 더 복잡한 내용의 실행 파일이다.

## Hello World

```
#include<iostream>

int main(void){
  
  int var = 0;
  std::cout<<"HelloWorld<<endl;
  std::cin<<var;
  std::cout<<var<<endl;
}
```
