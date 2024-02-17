-- Active: 1707101317763@@127.0.0.1@3306@sesac
show databases;
show TABLES;

CREATE Table visitor (
    id int PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) not null,
    comment mediumtext NULL
);

INSERT INTO visitor(name, comment) VALUES ('윤영인', '안녕하세요~~');
INSERT INTO visitor(name, comment) VALUES ('홍길동', '홍길동입니다~~');
INSERT INTO visitor VALUES (null, '둘리', '깐따삐야~~');

SELECT * FROM visitor;
SELECT * FROM user;

################### [ DCL ] #####################
-- USER 생성 방법 1 (생성 후 설정)
CREATE USER 'sesac'@'%' IDENTIFIED BY '1234'; # 새로운 유저 생성
ALTER USER 'sesac'@'%' IDENTIFIED WITH mysql_native_password by '1234'; # 클라이언트 접근할 수 있도록 비밀번호 방식 변경

-- USER 생성 방법 2 (생성과 함께 설정) 
CREATE USER 'sesac'@'%' IDENTIFIED WITH mysql_native_password BY '1234;'

GRANT All PRIVILEGES ON *.* TO 'sesac'@'%' WITH GRANT OPTION; # 새로운 사용자에게 권한 부여
-- 모든 DB에 접근 가능하도록, sesac 계정에 DB접근 권한을 부여
FLUSH PRIVILEGES; # 현재 사용중인 MySQL 캐시를 지우고, 새로운 설정 적용