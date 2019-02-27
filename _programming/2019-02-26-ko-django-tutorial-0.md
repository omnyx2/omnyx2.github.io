---
lang: "ko"
ref: "django tutorial-0"
layout: post_relate
big-title: "programming"
middle-title: "django 튜토리얼"
small-title: "처음 공부하는 django-0"
field:
  - django
  
relate:
  - django
toc: true
toc-head-level-choice: false
#do this if head level choice is true
# toc-head-max:
# toc-head-min:
---
# 설치 환경
- ubuntu - liunx
- virtualenv 를 이용
- python3 사용  
- Django2.1.7버젼을 설치

# 장고 처음으로 시작하기
장고는 파이썬  기반 프레임 워크로 Django를 사용하기 위해서는 python을 설치해야 합니다. 또한 장고 _2.0이상의 버젼_ 에서는 python3 이상을 필수로 사용해야 합니다. 장고를 설치할 때 SQLite라는 경량 데이터 베이스가 있기 때문에 다른 데이터 베이스를 설치할 필요가 없습니다. 다른 데이터 베이스의 사용을 원할 경우 별도의 과정을 거져야 합니다. 이에 대해서는 [다른 페이지](#)에서 다루겠습니다. 초심자용의 간단한 설치가 아닌 전문가용의 완벽한 설치를 위해서는 앞의 페이지를 참조하여 DBMS, wsgi를 전부 설정하여 설치하기를 바랍니다.

우선 파이썬이 설치되어있는지 확인합시다. 3.x.y가 나오면 됩니다. 
`python --version`

```
Note 

Jython은 파이썬 3이상의 버전에서는 설치되지 않으므로
Django 2.0버전 이상에서는 작동되지 않습니다.
```

## 가상환경 만들기
제가 우분투를 쓰면서 가장걱정하는 부분은 늘 환경이 꼬이거나 망가질 수 있다는 것 입니다. 환경이 꼬인다는 것은 여러 package나 구성환경을 설치하는 도중 dependency 문제가 발생하면 무엇을 설치해야 될지, 무엇을 삭제해야될지 모르는 상황을 말합니다. 물론 제가 이렇게 말하는 것이지, 다른 분들은 다르게 말할 수도 있겠지요. 넘어가서 이러한 문제를 막기위헤서는 가상환경을 사용하는 것을 추천해 드립니다. 가상환경을 이용하여 환경을 분리하고 혹시 각 환경중 문제가 생겼다면, 해당 환경을 삭제하면 되는 일이니까요.

그러면 환경을 만들어 보겠습니다.
virtualenv가 설치되어있다는 가정하에,  
```
$ mkdir <folder name you want>
$ cd <folder name you made>
$ virtualenv <env name you want>
```
**저는 전체 디렉토리의 이름은 serverdjango21로 지었고, env는 venv로 지었습니다.**

## 가상환경 실행하기
자, 그러면 해당 폴더 방금 mkdir 명령어로 만든 폴더로 들어가 아래의 명령을 쳐서 가상환경을 실행시켜 봅시다.  
`source venv/bin/activate`
자신의 터미널의 앞쪽에 (venv)younamve과 같이 뜬것이 보이죠?
이제 새로 설치된 가상환경에 위에서 한것과 같이 파이썬 버전을 체크하고, 아래의 명령어를 통해 장고를 설치합시다.  
`pip install Django`

설치가 끝났습니다!
