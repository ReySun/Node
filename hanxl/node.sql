SET NAMES UTF8;
DROP DATABASE IF EXISTS node;
CREATE DATABASE node CHARSET=UTF8;
USE node;
#员工表
CREATE TABLE user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(32),
    upwd VARCHAR(32),
    job VARCHAR(32),
    hiredata DATE,
    salary FLOAT(10,2),
    did INT
);
INSERT INTO user VALUES
(NULL,"TOM","程序员","2010-12-20","8000",1),
(NULL,"Mia","人事专员","2011-08-12","7000",2),
(NULL,"Marin","行政","2010-12-20","5000",2),
(NULL,"Jimmy","UI","2010-12-20","7000",1),
(NULL,"Jack","JAVA","2010-12-20","5000",1),
(NULL,"Sushan","Web前端","2010-12-20","5000",1),
(NULL,"Lilei","Boss","2010-12-20","17000",3),
(NULL,"Hanmeimei","miss","2010-12-20","9000",3);
#部门表
CREATE TABLE dept(
    did INT PRIMARY KEY AUTO_INCREMENT,
    dname VARCHAR(32)
);
INSERT INTO dept VALUES
(NULL,"软件研发部"),
(NULL,"行政部门"),
(NULL,"董事会");

#新增语句
#ALTER TABLE user add phone INT;
#ALTER TABLE user CHANGE phone tel VARCHAR(11);
#子查询
SELECT * FROM user WHERE did=(
    SELECT did FROM dept WHERE dname="董事会"
);
#子查询也可以出现在DML语句中，但是会报错，因为在同一个表中。
#解决方法：别名法
UPDATE user SET salary=salary*1.1 WHERE salary<(
    SELECT * FROM (SELECT AVG(salary) FROM user) AS temp
);