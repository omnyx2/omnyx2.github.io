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

C++는 더 좋은 프로그래머가 되기 위해서는 반드시 넘어가야 할 산임이 틀림없다. 많은 부분에서 프로그래밍을 공부할수록 언어의 장벽과 기술의 장벽을 느끼게 된다. 예를 들면 Django와 같은 프레임 워크를 공부하다 보면 어느순간 반드시 서버 내부 동작에 관해서 이해가 되지 않는 부분이 찾아오며 그때는 배움을 SQL, 네트워크 등으로 확장해나가야 겠다는 생각이드는데 이때 언제나 걸림돌이 되는 것이 C++이다. 컴퓨터의 할아버지격과도 같은 언어인 C++는  컴퓨터 시스템과 알고리즘들에 대한 공부를 위한 기초이며 완성된 기초들을 활용하기위한 툴 또한 즐비해 있다. 때문에 한층 높은 경지의 프로그래머가 되기 위해서는 C++의 배움은 매우 필수적이다.

## C++ 컴파일하기 실행하기
이부분은 윈도우 사용자이시라면 쉽게 넘어가셔도 됩니다. 윈도우는 간단한 C++ 컴파일 프로그램들이 많기 때문에(devC++)이 중 아무거나 다운받고 실행시키시면 될겁니다. 그리고 우분투 사용자 분들이시면 더 쉽게 할 수 있습니다. G++의 설치에 대해서 찾아 보시고 설치가 되어 있으시다면 다음을 따라합시다. 필자의 환경은 Ubuntu를 사용하여
  
원하는 이름으로 CPP 파일을 만듭니다. IWANT.cpp 이렇게말이죠
그리고 
  
```g++ -o filename IWANT.cpp```

를 쳐주시면 컴파일이 되는데 이때 filename은 실행파일의 이름입니다. C++를 컴파일하고 실행시켜 보기위한 실행파일인거죠. 때문에 filename이 아닌 그 어떤 다른 이름이 와도 크게 상관이 없답니다.

```g++ -o abc IWANT.cpp```
  
이렇게 말이죠. 그리고 이 실행파일을 실행시키는 법은 단순합니다.

```./filename```

을 터미널에 입력해 주시면 실행이 됩니다.


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