-- 查询所有数据库的名称
-- SHOW DATABASES

-- 查询对应数据库的对应字符集
-- SHOW CREATE DATABASE dbtwo

-- 创建数据库
-- create database dbOne

-- 创建时判断数据库是否存在  不存在则创建
-- create database if not exists dbtwo

-- 创建指定字符集的数据库 加判断是否存在 (创建一个名为db4 的数据库  并且指定数据库字符集未gbk)
-- CREATE DATABASE IF NOT EXISTS db4 CHARACTER SET gbk;

-- 修改数据库字符集
-- ALTER DATABASE db3 CHARACTER SET utf8;

-- 删除数据库  
-- DROP DATABASE db3;   

-- 数据库存在就删除 存在就删除
-- DROP DATABASE IF EXISTS db4;

-- 使用指定数据库
-- use aubreyhet;
 
-- 查询某个数据库中的所有表
-- SHOW TABLES;

-- USE information_schema;
-- show tables

-- 查询表结构
-- desc files;

use aubreyhet;
-- 创建数据库
create table student(
                id int,
                name varchar(20),
                age int,
                score double(4,1),
                birthday date,
                inster_time timestamp
            );
-- 修改表的表名
ALTER TABLE student RENAME students;

-- 修改表的字符集
ALTER TABLE students CHARACTER SET UTF8;

-- 添加一列
ALTER TABLE students ADD gender varchar(10);

-- 修改列名 类型
ALTER TABLE students change gender sex varchar(20);

-- 只修改数据类型
ALTER TABLE students MODIFY sex varchar(12);

-- 删除列
ALTER TABLE students drop sex;




-- 查询表字符集
SHOW CREATE TABLE students;

-- 查询表结构
desc students;

-- 显示表
show tables;

-- 查询
select * from students;


