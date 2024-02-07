/* 
 * 2/5 DDL, DML
 */
-- DB 조회
SHOW DATABASES;

-- DB 삭제
drop database sesac;
drop database mydatabase;

-- DB 생성
create DATABASE sesac DEFAULT CHARACTER set utf8 COLLATE utf8_general_ci;
/* 
    dobong 이라는 db를 생성하는데,
    문자열 셋으로 utf8mb4를, 콜레이션으로 utf8mb4_unicode_ci를 사용!

    utf8mb4 : uft8보다 더 많은 문자 지언(이모지 저장 가능)
    >> 이모지를 저장하는 DB라면 utf8mb4, 이모지 저장 안하면 utf8 
 */
create DATABASE dobong DEFAULT CHARACTER set utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 사용 하려는 DB 선택 (USE)
USE sesac;

-- -------------------------------table 관련 명령어
-- 1. 테이블 생성
/* 
    create table products(
        속성1 자료형 제약조건,
        속성2 자료형 제약조건
    );

    -- 제약조건
        - NOT NULL : NULL 허용 X
        - AUTO_INCREMENT : 자동 숫자 증가
        - PRIMARY KEY : 기본키 설정 (중복, NULL값 허용 안함)
        - DEFAULT : 기본 값 설정
        - UNIQUE : 중복 허용 안함 (NULL은 허용), 한 테이블에 여러개 가능
 */
create table products(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    model_number VARCHAR(15) NOT NULL,
    series VARCHAR(30) NOT NULL
);

-- 테이블 목록 확인
SHOW TABLES;

-- table에 상세 조회 (DESC)
DESC products;

-- 테이블 삭제
DROP TABLE products; -- DROP TABLE : 테이블 전체 삭제
TRUNCATE TABLE products; -- TRUNCATE TABLE : 테이블 안의 정보(DATA)만 날림

-- 테이블 변경(수정) (ALTER)
-- 1. 컬럼 추가
ALTER TABLE products ADD new_column VARCHAR(20);

-- 2. 특정 컬럼 수정
ALTER TABLE products MODIFY new_column INT; -- VARCHAR를 INT로 수정

-- 3. 특정 컬럼 수정
ALTER TABLE products DROP new_column;

drop table user;
-- ----------------------------------- DML
-- Data Manipulation language(데이터 조작어)
-- user TABLE
CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    address VARCHAR(100)
);
show TABLES;
DESC user;

-- 1. 데이터 추가 (INSERT INTO)
-- INSERT INTO 테이블 이름(컬럼1, 컬럼2, ...) VALUES (값1, 값2,...);
insert into user (name, age, address) VALUES('김민정',20,'서울특별시 마포구');
insert into user (name, age, address) VALUES('이한이',30,'서울특별시 강남구');
insert into user (name, age, address) VALUES('이지은',22,'대구광역시 동구');
insert into user (name, age, address) VALUES('윤세희',25,'부산광역시 관악구');
insert into user (name, age, address) VALUES('박수진',19,'서울특별시 노원구');
insert into user (name, age, address) VALUES('박찬희',23,'서울특별시 강서구');
insert into user (name, age, address) VALUES('이지수',32,'부산광역시 동구');
insert into user (name, age, address) VALUES('최솔희',37,'강원도 강릉시');
insert into user (name, age, address) VALUES('한소희',26,'충청남도 공주시');
insert into user (name, age, address) VALUES('권희수',40,'강원도 속초시');
insert into user (name, age, address) VALUES('김민지',22,'서울특별시 중구');


SELECT * FROM user; -- 테이블 전체 조회


-- 2. 데이터 수정 (UPDATE)
-- UPDATE 테이블 이름 SET 수정할 데이터 WHERE 조건(어떤 데이터 인지);
UPDATE user set name="김민지" WHERE id=1;

-- 3. 데이터 삭제 (DELETE)
-- DELETE FROM 테이블 이름 WHERE 삭제 조건;
DELETE FROM user WHERE id=1; -- WHERE 이후 조건에 맞는 데이터 삭제
DELETE FROM user; -- 테이블 전체 삭제

/* 
    수정 or 삭제 시  전체 데이터를 건드는 일은 흔치 않기 때문에
    UPDATE, DELETE는 거의 WHERE가 함께 쓰인다.
 */

-- 4. 데이터 조회 (READ) select ~ from ~
-- * : 전체
select * from user; -- user 테이블 전체 데이터 조회
select name from user; -- user 테이블 name 컬럼 조회
SELECT name, age from user; -- user 테이블 name, age 컬럼 조회

-- WHERE 절로 조건 적용
SELECT * FROM user WHERE age >= 25;
SELECT *FROM user WHERE id = 3;
SELECT name FROM user WHERE id = 3;
SELECT id, age FROM user WHERE name='이지은';

-- ORDER BY : 데이터 정렬
-- ASC : 오름차순 (default)
-- DESC : 내림차순

SELECT * FROM user ORDER BY age ASC;
SELECT * FROM user WHERE id > 6 ORDER BY age;

-- LIKE : 문자열 패턴 조회 (WHERE와 함께 쓰임)
-- '서울로 시작하는 주소 찾기'
SELECT * FROM user WHERE address LIKE '서울%';

-- 이름의 마지막 글자가 '희'인 사람
SELECT * FROM user WHERE name LIKE '%희';

-- 주소에 '광역시'가 들어가는 사람
SELECT * FROM user WHERE address LIKE '%광역시%';

-- 이름에 '희'가 들어가는 사람의 name 컬럼만 조회
select name from user where name like '%희%' ORDER BY age DESC;

-- LIMIT : 데이터의 개수 제한
SELECT * from user limit 3;
select * FROM user where address like '서울%' limit 2;

-- BETWEEN A AND B : A와 B의 사이값 조회 (A, B 포함)
SELECT * FROM user where age BETWEEN 25 and 30;

-- IN(리스트) : 리스트의 요소와 일치하면 참
SELECT * FROM user WHERE age IN (20, 21, 22, 23);

-- IS NULL / IS NOT NULL
-- INSERT INTO user (name, age) VALUES ('서현승', 28); -- 실습 위한 추가
SELECT * FROM user WHERE address is null;
SELECT name, address FROM user WHERE address is NOT NULL;


-- 논리 연산자 : AND, OR, NOT
-- 주소가 null이 아니면서 age가 25보다 큰 전체 속성 조회
SELECT * FROM user WHERE (address IS NOT NULL) AND (age > 25);
SELECT * FROM user WHERE (address IS NOT NULL) OR (age > 25);
-- '이'씨 이면서 나이가 22살인 사람 (이름 속성만 출력)
SELECT name FROM user WHERE name like '이%' and age = 22;

-- DISTINCT : 중복 튜플(행) 제거
SELECT age FROM user;
SELECT DISTINCT age FROM user;

-- '이'씨인 사람 지우기
SELECT * FROM user;
DELETE FROM user where name like '이%';


/* ---------------------------- 실습 ------------------------------- */


use dobong;
show tables;

-- 실습 1
CREATE Table member(
    id VARCHAR(20) NOT NULL PRIMARY KEY ,
    name VARCHAR(5) NOT NULL,
    age int NULL,
    gender VARCHAR(2) NOT NULL,
    email VARCHAR(50) NULL,
    promotion VARCHAR(2) NULL DEFAULT 'x'
);

drop table member;
desc member;

-- 실습 2
ALTER TABLE member MODIFY id VARCHAR(10);
ALTER TABLE member DROP COLUMN age;
ALTER TABLE member ADD interest VARCHAR(100);


-- 실습 3
CREATE TABLE user (
    id VARCHAR(10) not null PRIMARY KEY,
    pw VARCHAR(20) not null,
    name VARCHAR(5) not null,
    gender ENUM('F', 'M', '') DEFAULT '',
    birthday DATE NOT NULL,
    age INT(3) NOT NULL DEFAULT 0
);

DESC user;

-- 실습 4
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('hong1234', '8o4bkg', '홍길동','M','1990-01-31',33);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('sexysung','87awjkdf','성춘향', 'F', '1992-03-31', 31);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('power70', 'qxur8sda', '변사또', 'M', '1970-05-02', 53);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', 39);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', 47);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', 22);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', 24);

SELECT * FROM user;

DROP TABLE user;

-- 실습 5
-- 1.
SELECT * FROM user ORDER BY birthday;
-- 2.
SELECT * FROM user WHERE gender = "M" ORDER BY name DESC;
-- 3.
SELECT id, name FROM user WHERE birthday LIKE '199%';
-- 4.
SELECT * FROM user WHERE birthday LIKE '_____06%' ORDER BY birthday;
SELECT * FROM user WHERE birthday LIKE '%-06-%' ORDER BY birthday;

-- 5.
SELECT * FROM user where gender = "M" AND birthday LIKE '197%';
-- 6.
SELECT * FROM user ORDER BY age DESC limit 3;
-- 7.
SELECT * FROM user where age BETWEEN 25 AND 50;
-- 8.
UPDATE user SET pw='12345678' WHERE id = 'hong1234';
SELECT * FROM user WHERE id='hong1234';
-- 9.
DELETE FROM user WHERE id='jungkrat';
SELECT * FROM user;

-- 명령어 우선순위
-- SELECT >> FROM >> WHERE >> GROUP BY >> HAVING >> ORDER BY >> LIMIT

/* --------------------------------------------------------------------------- */


/* 
 * 2/7 JOIN
 */

 -- GROUP BY & HAVING
 SHOW DATABASES;
 USE sesac;
 show tables;
 DROP TABLE IF EXISTS user; -- user table 존재할 경우 삭제 

CREATE TABLE user(
    user_id int PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    specialize ENUM('축구', '야구', '클라이밍', '배드민턴') NOT NULL,
    gender ENUM('남', '여') NOT NULL,
    career_year int NOT NULL
);

DESC user;

INSERT INTO user VALUES()
INSERT INTO user VALUES(NULL, '손흥민', '축구', '남',15);
INSERT INTO user VALUES(NULL, '김자인', '클라이밍', '여',10);
INSERT INTO user VALUES(NULL, '김동우', '축구', '남',1);
INSERT INTO user VALUES(NULL, '전유진', '배드민턴', '여',2);
INSERT INTO user VALUES(NULL, '이대호', '야구', '남',24);
INSERT INTO user VALUES(NULL, '안세영', '배드민턴', '여',11);
INSERT INTO user VALUES(NULL, '배서연', '클라이밍', '여',3);
INSERT INTO user VALUES(NULL, '황희찬', '축구', '남',9);
INSERT INTO user VALUES(NULL, '지소연', '축구', '여',17);
INSERT INTO user VALUES(NULL, '이정후', '야구', '남',11);
INSERT INTO user VALUES(NULL, '김광현', '야구', '남',21);

SELECT * FROM user;

-- 집계 함수
SELECT COUNT(specialize)
FROM user
WHERE specialize = '축구'; -- WHERE 조건에 만족하는 튜플의 개수

SELECT SUM(career_year)
FROM user
WHERE specialize='축구';

SELECT AVG(career_year) 
FROM user
WHERE specialize='축구';

SELECT MIN(career_year)
FROM user
WHERE specialize='축구';


-- GROUP BY (같은 그룹끼리 묶어서 확인 가능)
SELECT specialize
FROM user
GROUP BY specialize;

SELECT specialize, COUNT(*)
FROM user
GROUP BY specialize;

SELECT specialize, count(*)
FROM user
WHERE gender = '여'
GROUP BY specialize
HAVING COUNT(specialize) >= 2; -- GROUP BY로 묶은 그룹과 관련된 내용 들어가야함
-- 각 분야의 여성들 숫자 세기
-- HAVAING : 여성 중 2명 이상의 분야만 출력