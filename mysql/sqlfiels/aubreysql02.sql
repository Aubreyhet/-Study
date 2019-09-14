-- 插入数据
INSERT INTO students(id,name,age) VALUES(1,'张无忌',18);
-- 简写的插入数据
INSERT INTO students VALUES(2,'赵敏',21,69.5,'2019-09-14',SYSDATE());

-- 删除数据
DELETE FROM students WHERE id = 1;

-- 删除操作  不加条件  删除表里所有记录 将整个表都删掉了
DELETE FROM students;

-- 删除2 （删除原表所有内容重新创建一个一样的空表）
TRUNCATE TABLE students;

-- 修改数据
UPDATE students SET score = 99 WHERE id = 1;
UPDATE students SET score = 88,birthday = '2000-09-08'  WHERE id = 1;









-- 查询表字符集
SHOW CREATE TABLE students;

-- 查询表结构
desc students;

-- 显示表
show tables;

-- 查询
select * from students;