SET NAMES UTF8;
DROP DATABASE IF EXISTS emp;
CREATE DATABASE emp CHARSET=UTF8;
USE emp;
/*员工表*/
CREATE TABLE user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(32),
    job VARCHAR(32),
    hiredate DATE,
    salary FLOAT(10,2),
    did INT
);
INSERT INTO user VALUES
(NULL,'TOM','程序员','2010-12-20','8000',1),
(NULL,'Mia','人事专员','2008-12-20','9050',2),
(NULL,'Mary','行政','2010-12-20','12000',3),
(NULL,'Jack','UI设计师','2010-12-20','6530',1),
(NULL,'Jimmy','程序员','2010-12-20','7450',1),
(NULL,'Sushan','UI设计师','2010-12-20','9520',1),
(NULL,'LiLei','前端工程师','2010-12-20','15000',1),
(NULL,'Han','社保专员','2010-12-20','13500',2);


/*部门表*/
CREATE TABLE dept(
    did INT PRIMARY KEY AUTO_INCREMENT,
    dname VARCHAR(32)
);
INSERT INTO dept VALUES
(NULL,'软件研发部'),
(NULL,'人事部'),
(NULL,'行政部');


/*子查询*/
SELECT * FROM user WHERE did=(
    SELECT did FROM dept WHERE dname="人事部"
);

/*子查询，当查询同意个表的时候*/
UPDATE user SET salary=salary*1.1 WHERE salary<(
    SELECT * FROM (SELECT AVG(salary) FROM user) AS tmp
);














