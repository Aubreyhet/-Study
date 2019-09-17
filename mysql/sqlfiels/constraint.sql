-- 创建表的时候添加非空约束
CREATE TABLE stu(
	id int,
	name varchar(20) not null
);

-- 创建表之后添加约束
alter table stu add sex varchar(10) not null;

-- 删除约束
alter table stu modify sex varchar(10);

-- 删表
drop table stu;

-- 唯一约束
-- 创建表时添加唯一约束
create table stu(
	id int,
	phone_number varchar(20) unique  -- 添加唯一约束
);
-- 唯一约束限定的列的值可以有多个null

-- 删除唯一约束
-- alter table stu modify phone_number varchar(20);  --  这样是删不唯一约束的
alter table stu drop index phone_number;

-- 创建后添加唯一约束
alter table stu modify phone_number varchar(20) unique;

-- 删表
drop table stu;

-- 创建表时添加主键约束
create table stu(
			id int primary key,
			name varchar(20)
);

-- 删除主键
-- 错误alter table stu modify id int;
alter table stu drop primary key;

-- 创建完表之后添加主键约束
alter table stu modify id int primary key;

-- 删表
drop table stu;

-- 创建表时添加主键约束并且使主键自动增长
 create table stu(
		id int primary key AUTO_INCREMENT,
		name varchar(20)
);

-- 添加数据
INSERT INTO stu VALUES(null,'ddd');

-- 删除主键约束的自动增长(主键约束是删除不掉的)
alter table stu modify id int;

-- 创建表之后添加主键自动增长
alter table stu modify id int auto_increment;

-- 删表
drop table stu;


-- 创建部门信息
create table department(
	id int primary key auto_increment,
	dep_name varchar(20) not null,
	dep_location varchar(20) not null
);

-- 创建员工表
create table employees(
	id int primary key auto_increment,
	name varchar(20) not null,
	age int,
	dep_id int,
	constraint emp_dept_fk foreign key (dep_id) REFERENCES department(id)
);

-- 添加部门
insert into department VALUES(null,'研发部','上海'),(null,'销售部','南京');

delete from department where id = 4;























-- 查询部门信息
select * from department;

-- 查询员工信息
select * from employees;