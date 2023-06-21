# git 사용법

$ cd c_class

$ git init
Initialized empty Git repository in D:/frontend_4/c_class/.git/

$ git config --global user.name "jemicom"

$ git config --global user.email "jemicom@gmail.com"

$ git add README.md

$ git commit -m "시리얼번호 생성"
[master (root-commit) 4e6371e] 시리얼번호 생성
 1 file changed, 1 insertion(+)
 create mode 100644 README.md

$ git branch -M master

$ git remote add origin https://github.com/jemicom/c_class.git

$ git push -u origin master
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Writing objects: 100% (3/3), 242 bytes | 242.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/jemicom/c_class.git
 * [new branch]      master -> master
branch 'master' set up to track 'origin/master'.

# config --list 빠져나오기
ESC :Q

# git remote add origin https://github.com/jemicom/c_class.git 지우기
$ git remote remove origin

# name, email  지우기
git config --unset --global user.name
git config --unset --global user.email

# 윈도우 > 자격증명 관리자 : 인증 모두 지우기

# git 명령어 메모리에서 지우기 
$ history -c