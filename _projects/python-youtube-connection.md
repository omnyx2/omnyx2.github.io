---
main_image_path: /images/cakes/black-forest.jpg
title: Black Forest
project_file_name: wewe
project_name: "jekyll"
project_date: "2019.02.14"
project_team_num: "4"
layout: default
---

# Start!
Download youtube music and videos, with python and pytube and also fixing som errors

## environement
----
Windows10   
VSCode
Python 3.7.3
pytube 9.5
----


## 프로젝트의 목적
이번 프로젝트의 주제는 유튜브에서 동영상을 다운받거나 음악파일을 다운 받는 것이다. 물론 유튜브 프리미엄을 쓰면 된다고는 하지만 언제나 터미널적인 감성을 원하는 사람은 늘 있기 마련이므로, 이러한 부분의 제작에 있어서 해당 프로젝트를 진행하게 되었다. 그리고 해당 프로젝트의 진행에 앞서 저작물에 대해 주의 깊은 취급을 바라며, 이 글의 작성자는 작성자 본인을 제외한 이 프로그램의 구동 프로그램 자체와 관련된 모든 저작권에 대한 책임을 지지않는다.

## pytube
정말 좋은 점은 이미 파이썬에서는 이미 유뷰트에서 동영상을 다운받는 라이브러리를 만들어 놓았다. 
  
Github(설치) : https://github.com/nficano/pytube
APIs 추가 설명: https://python-pytube.readthedocs.io/en/latest/index.html

pytube의 설치는 정말로 쉽다. 아래의 명령어를치고 실행하자.

```
pip install pytube
```
 
## download source code

이를 이용해 간단한 다운로드 소스코드를 짜보았다. 더 자세한 설명을 보고 싶으면 공식문서를 참조하거나 다음의 블로그에서 참고해도 좋다. https://
niceman.tistory.com/92#recentComments. 그러나 해당 주소의 소스코드도 그렇고 본 블로그의 소스코드도 그러한데 이 코드의 동작에는 에러가 발생한다.
HTTP 403 forbidden이라는 에러인데 이 부분을 잡지않으면 아래의 코드는 돌아가지 않는다.

```python
from pytube import YouTube
import subprocess
import os

url = input("동영상의 주소를 입력해 주세요: ")
yt = YouTube(url)

i = 0
for list in yt.streams.all():
    print(i, end ='')
    print(list)
    i += 1


options = int(input("몇번을 할 것인지 고르세요: "))
yt.streams.all()[options].download('./music')
```


## 403 Forbidden

이 소스코드를 활용할때 주의할 점이 있다. 오늘 2019년 6월 19일 기준을 pytube라이브러리와 youtube사의 프로그램 정책변경에 따른 에러에 의해 pytube의 라이브러리에서 mixins에서 '&signature='부분을 '&sig='로 변경해주어야한다. 근데 생각보다 window에서 pip로 다운 받은 소스 코드를 직접 수정할일이 별로 없기 때문에 찾는데 난항을 겪을 수 있다. 이럴경우 탐색으로 pytube를 치고, 정확히 pytube라는 이름의 폴더가 나올때까지 롤이라도 한판 돌리도록 하자.
이에대한 논의는 아래에 잘 정리되어 있다.

https://github.com/nficano/pytube/issues/399

수정이 완료되면 아래와 같이 코드가 되어야한다.(전체코드중 일부)

```python
    if ('signature=' in url or 
                ('s' not in stream and 
                 ('&sig=' in url or '&lsig=' in url))):
            # For certain videos, YouTube will just provide them pre-signed, in
            # which case there's no real magic to download them and we can skip
            # the whole signature descrambling entirely.
            logger.debug('signature found, skip decipher')
            continue

        if js is not None:
            signature = cipher.get_signature(js, stream['s'])
        else:
            # signature not present in url (line 33), need js to descramble
            # TypeError caught in __main__
            raise TypeError('JS is None')

        logger.debug(
            'finished descrambling signature for itag=%s\n%s',
            stream['itag'], pprint.pformat(
                {
                    's': stream['s'],
                    'signature': signature,
                }, indent=2,
            ),
        )
        stream_manifest[i]['url'] = url + '&sig=' + signature
```


이후 실행을 시키면 잘 되는 것을 확인 할 수 있다.


##
ffgmep: http://blog.naver.com/PostView.nhn?blogId=chandong83&logNo=221165275268&parentCategoryNo=&categoryNo=101&viewDate=&isShowPopularPosts=true&from=search
  
subprocess: https://soooprmx.com/archives/5932

