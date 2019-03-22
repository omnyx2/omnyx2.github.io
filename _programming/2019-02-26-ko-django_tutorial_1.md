---
lang: "ko"
ref: "django tutorial-1"
layout: post_relate
big-title: "programming"
middle-title: "django 튜토리얼"
small-title: "처음 공부하는 django-1"
field:
  - django
relate:
  - django
toc: true
toc-head-level-choice: false
#do this if head level choice is true
#toc-head-max:
#toc-head-min:
---

제 글은 전부 장고 공식레퍼런스를 참고하여 작성했으며, 그저 보기 조금 쉽게 만들었을 뿐 입니다.

# 설치 환경
- ubuntu - liunx
- virtualenv 를 이용
- python3 사용  
- Django2.1.7버젼을 설치

# 첫 번째 장고 앱 만들기!

저번 포스팅을 통해서 포스트를 수정하셨나요? 하셨다면 오늘부터 간단한 설문조사(Polls) 어플리케이션을 만들어 보겠습니다.

사이트의 구조는 다음과 같습니다.
  
+ 사람들이 설문 내용을 보고 직접 투표할 수 있는 개방된 사이트
+ 관리자가 설문을 추가, 변경, 삭제할 수 있는 관리용 사이트

## 설치전 유의할점   
해당 튜토리얼은 Django2.1을 위해 작성되었으며, 파이썬 3.5 이상의 버젼만을 지원합니다.


## 프로젝트 만들기

우선 프로젝트를 처음 말들어 주서야 합니다. 

