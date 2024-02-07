show DATABASES;
use sesac;
show tables;
CREATE TABLE customer (
    id varchar(10) PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    birthday DATE NOT NULL
);

desc customer;

INSERT INTO customer (id, name, birthday) VALUES ('aaa', '손흥민', '1992-03-17');
INSERT INTO customer (id, name, birthday) VALUES ('bbb', '황희찬', '1997-11-01');
INSERT INTO customer (id, name, birthday) VALUES ('ccc', '이강인', '2001-05-31');
INSERT INTO customer (id, name, birthday) VALUES ('ddd', '조현우', '2001-05-31');

CREATE TABLE orderlist(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    customer_id VARCHAR(10) NOT NULL, -- 조인 되는 테이블의 설정값과 동일하게 주기
    product_name VARCHAR(10) NOT NULL,
    quantity INT,
    FOREIGN KEY (customer_id) REFERENCES customer(id) ON UPDATE CASCADE ON DELETE CASCADE
);
-- ON UPDATE CASCADE : 기준 테이블(customer)dml 데이터가 변경되면 참조 테이블(orderlist)의 데이터
-- ON DELETE CASCADE : 기준 테이블의 데이터 삭제되면 참조 테이블의 데이터도 삭제됨

-- 테이블을 삭제할 때
-- fk-pk 관계로 연결된 테이블은 외래키가 설정된 테이블(orderlist)을 먼저 삭제
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('aaa', '맥북m1', 1);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('bbb', '빅파이', 31);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('ccc', '키보드', 3);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('bbb', '초코파이', 5);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('ccc', '귀여운텀블러', 1);

select * from orderlist;

-- JOIN
-- 1. INNER JOIN
SELECT * FROM customer
INNER JOIN orderlist
ON customer.id = orderlist.customer_id;

-- 2. , 와 WHERE 로 INNER JOIN 사용
SELECT orderlist.id, customer.id,customer.name, orderlist.product_name
FROM customer, orderlist -- , : INNER JOIN
WHERE customer.id = orderlist.customer_id;

-- 3. INNER JOIN, ON 사용 + WHERE 조건과 함께
SELECT *
FROM customer INNER JOIN orderlist
ON customer.id = orderlist.customer_id
WHERE orderlist.quantity >= 5;

-- 4. table 별칭(as)지어서 접근
SELECT o.id, c.id as '아이디', c.name as '선수이름', o.product_name
FROM customer as c, orderlist as o
WHERE c.id = o.customer_id;

-- 5. NATURAL JOIN
SELECT *
FROM orderlist NATURAL JOIN customer;

-- OUTER JOIN
SELECT *
FROM orderlist
LEFT OUTER JOIN customer
ON customer.id =orderlist.customer_id;

SELECT *
FROM orderlist
RIGHT OUTER JOIN customer
ON customer.id =orderlist.customer_id;

/* ---------------------------------- 실습 ------------------------------------- */

CREATE TABLE A (
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    name VARCHAR(10) NOT null,
    age int not null
);
desc A;

INSERT INTO A VALUES ('20115544', 'a', 34);
INSERT INTO A VALUES ('20156677', 'b', 31);
INSERT INTO A VALUES ('20227755', 'c', 25);
INSERT INTO A VALUES ('20232223', 'd', 23);
INSERT INTO A VALUES ('20201144', 'e', 23);
INSERT INTO A VALUES ('20145145', 'f', 30);
INSERT INTO A VALUES ('20180919', 'g', 26);

SELECT * FROM A;

CREATE TABLE B (
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(10) NOT null,
    age int not null
);

desc B;

INSERT INTO B VALUES ('2022091994', 'h', 29);
INSERT INTO B VALUES ('2020101021', 'i', 23);
INSERT INTO B VALUES ('2018187566', 'j', 26);

SELECT * FROM B;

-- CREATE TABLE subjects (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     student_id VARCHAR(10) NOT null,
--     subject VARCHAR(10) NOT NULL,
--     Foreign Key (student_id) REFERENCES A(id) on update CASCADE on delete CASCADE,
--     Foreign Key (student_id) REFERENCES B(id) on update CASCADE on delete CASCADE
-- );

DROP TABLE if EXISTS subjects; 
CREATE TABLE subject(
    register_id int PRIMARY KEY AUTO_INCREMENT,
    id VARCHAR(15) NOT NULL,
    subject VARCHAR(30) NOT NULL
);
show tables;
DESC subject;

INSERT INTO subject VALUES(NULL,'20115544','네트워크');
INSERT INTO subject VALUES(NULL,'20115544','알고리즘');
INSERT INTO subject VALUES(NULL,'20156677','알고리즘');
INSERT INTO subject VALUES(NULL,'20227755','네트워크');
INSERT INTO subject VALUES(NULL,'20232223','C언어');
INSERT INTO subject VALUES(NULL,'20145145','캡스톤');
INSERT INTO subject VALUES(NULL,'20180919','캡스톤');
INSERT INTO subject VALUES(NULL,'20180919','C언어');
INSERT INTO subject VALUES(NULL,'20180919','네트워크');
INSERT INTO subject VALUES(NULL,'2022091994','C언어');
INSERT INTO subject VALUES(NULL,'2022091994','캡스톤');
INSERT INTO subject VALUES(NULL,'2022091994','웹프레임워크');
INSERT INTO subject VALUES(NULL,'2018187566','C언어');
INSERT INTO subject VALUES(NULL,'2018187566','네트워크');
INSERT INTO subject VALUES(NULL,'2018187566','캡스톤');

select * from subject;

-- 1. A대학 학생정보 X 신청과목 (INNER JOIN, 학번끼리 같을 때)
SELECT *
FROM A
INNER JOIN subject as S
on S.id = A.id;

-- 2. A대학 학생정보 X 신청과목 (LEFT OUTER JOIN)
SELECT *
FROM A
LEFT OUTER JOIN subject as s
on s.id = A.id;

-- 3. A대학 학생정보 X 신청과목 (RIGHT OUTER JOIN)
SELECT * 
FROM A
RIGHT OUTER JOIN subject as s
on s.id = A.id;

-- 4. A대학 학생정보 X 신청과목 (NATURAL JOIN)
SELECT *
FROM A
NATURAL JOIN subject;