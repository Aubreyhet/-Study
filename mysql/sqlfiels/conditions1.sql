-- 查询年龄大于等于20的用户信息
SELECT * FROM vipinfo WHERE age >= 20;

-- 年龄等于20岁的用户
SELECT * FROM vipinfo WHERE age = 20;

-- 年龄不等于20岁的用户信息
SELECT * FROM vipinfo WHERE age != 20;
SELECT * FROM vipinfo WHERE age <> 20;

-- 查询年龄大于等于20 小于等于30的用户信息
SELECT * FROM vipinfo WHERE age >= 20 && age <= 30;
SELECT * FROM vipinfo WHERE age >= 20 and age <= 30;
SELECT * FROM vipinfo WHERE age BETWEEN 20 and 30; -- 包含20和30

-- 查询22岁，19岁的 或者25岁的信息
SELECT * FROM vipinfo WHERE age = 22 OR age = 19 or age = 25; 
SELECT * FROM vipinfo WHERE age IN (18,22,25);

-- 查询为空数据
SELECT * FROM vipinfo WHERE integral is null;

-- 查询数据部位空的数据
 SELECT * FROM vipinfo where integral is not null;

-- 查询姓张的数据（模糊查询）
SELECT * from vipinfo where name like '张_';

-- 查询第二个字是丽字的用户信息
select * from vipinfo where name like '_丽%';

-- 姓名是三个字的名信息
select * from vipinfo where name like '__';

-- 查询姓名中包含鹏
select * from vipinfo where name like '%伟%';

-- 查询手机号以135开头的手机号码
select * from vipinfo where telenum like '135%';






-- 查询表字符集
SHOW CREATE TABLE ;

-- 查询表结构
desc vipinfo;

-- 显示表
show tables;

-- 查询
select * from vipinfo;

-- 添加数据
INSERT INTO vipinfo VALUES(8,'刘鹏',21,'13995212100',null,3,'2001-05-21',SYSDATE());

