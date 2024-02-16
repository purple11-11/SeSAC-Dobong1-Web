-- Active: 1707101317763@@127.0.0.1@3306@sesac
-- 데이터베이스 목록 확인
SHOW databases;

-- sesac 데이터베이스 선택
USE sesac;

-- sesac 데이터베이스의 테이블 목록 확인
SHOW tables;

-- 이미 user 테이블이 있다면 기존 테이블 지움
DROP TABLE IF EXISTS user;

-- TODO: user 데이터베이스 생성
CREATE TABLE user (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    userid VARCHAR(20) NOT NULL ,
    name VARCHAR(10) NOT NULL,
    pw VARCHAR(20) NOT NULL
);
-- user 데이블 데이터 추가
INSERT INTO user (userid, name, pw) VALUES ('allie', 'allie', '1234');
INSERT INTO user (userid, name, pw) VALUES ('test', 'test', '1234');
INSERT INTO user (userid, name, pw) VALUES ('apple', 'apple', '1234');
INSERT INTO user (userid, name, pw) VALUES ('hello', 'hello', '1234');

-- user 테이블 구조 보기
DESC user; 

-- user 테이블 데이터 조회
SELECT * FROM user;

UPDATE user set pw='1234', name='미떼' WHERE id=5; 

############# [연습] USER 생성 DCL - 실행은 안함 ################
CREATE USER 'sesac'@'%' IDENTIFIED WITH mysql_native_password BY '1234';
GRANT ALL PRIVILEGES ON *.* TO 'sesac'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;