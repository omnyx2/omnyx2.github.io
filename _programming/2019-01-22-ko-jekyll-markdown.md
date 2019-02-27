---
lang: "ko"
ref: "jekyll, how to use markdown to decorate github blog"
layout: post_relate
big-title: "programming"
middle-title: "Jekyll 꾸미기"
small-title: "gitblog markdown 쓰기"
field:
  - markdown
  - kramdown
relate:
  - kramdown
  - jekyll
toc: true
toc-head-level-choice: false
#do this if head level choice is true
# toc-head-max:
# toc-head-min:
---
////https://jekyllrb.com/docs/configuration/markdown/

> 번역을 시작하며

gitblog에서 쓰는 markdown option에 대해서 정리해 보았다. gitblog에서는 jekyll을 메인 엔진으로 사용하는데 문제는 이 jekyll은 markdown이 아닌 kramdown을 쓴다. 간략히 말하자면 kramdown은 markdown의 개조판이라 생각할 수 있을 것이다. 종종 기울여진 글꼴은 이해하기 힘든 용어를 풀어낸 것이다. 만약 더 이해가 안된다면 추가로 질문을 하면될 듯 싶다.

# Markdown Options
Jekyll에서는 다양한 Markdown renderer를 지원한다. 때로는 이외에도 추가 option을 적용할 수 있다.

__renderer는 Markdown으로 작성된 파일을 읽어들여 페이지를 만들어 주는 것이라 생각하면된다. option은 markdown에서 사용가능한 기호를 말한다__

## Kramdown

Kramdown은 Jekyll의 기본 Markdown renderer이다. 아래의 리스트는 연제 Kramdown에서 지원 되는 option들 이다.

+ auto_id_prefix - header IDs 자동적으로 생성하는데 사용하는 Prefix(접두사)이다.
+ auto_id_stripping - 자동 ID 생성을 위해 header text에서 모든 서식을(formatting) 제거한다.
+ auto_ids - header ID를 자동으로 생성할때 쓰인다 
+ coderay_bold_every -

:em. If html_to_native is true
