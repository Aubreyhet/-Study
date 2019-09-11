-- 单行注释
/*
  多行注释
*/

-- 利用DDl创建一个表
create table t_student(
       f_id int,
       f_name varchar2(30),
       f_sex char(2),
       f_age int,
       f_hobbys varchar2(100)
)

-- 删除表
drop table t_student

-- 修改表
-- 动态往表里边添加入学字段 修改的是表结构
alter table t_student add f_join_date date

-- 添加年龄列
alter table student add f_age int

-- 修改某一个字敦的长度
alter table t_student modify(f_hobbys varchar2(200))

-- 修改某一字段的类型
alter table student modify(f_join date)

-- 修改列名
alter table t_student rename column f_join_date to f_join

-- 修改表名
rename t_student to student

-- 删除字段
alter table student drop column f_age





-- 数据操作
-- CURD
-- 查询时间  dual称之为伪表 本身不存在
select sysdate from dual

-- 修改当前会话（session）时间
alter session set nls_date_format = 'yyyy-mm-dd';

-- 添加数据
insert into student values(1,'张三','男','写代码','2019-09-07')

-- 提交事务 F10
commit;

-- 修改数据
update student set f_name = '李四' where f_id = 2;

-- 删除数据
delete from student where f_id = 2;

-- 清空
delete from student



-- 添加数据
insert into student values('1','张三','男','写代码','2019-09-08');
insert into student(f_id,f_name,f_sex,f_hobbys) values('2','李四','男','玩lol');
insert into student values('3','aubrey','男','写代码','2019-09-08');
insert into student values('4','朱乐纯','男','写代码','2019-09-08');
insert into student values('5','虞啸岩','女','吃','2019-09-08');
insert into student values('6','圆钢','男','完','2019-09-08');
insert into student values('7','周荣','男','写代码','2019-09-08');
insert into student values('8','罗鹏','男','欧克','2019-09-08');

-- 修改
-- 修改所有男生的爱好
update student set f_hobbys = f_hobbys || '/吃零食' where f_sex = '男';

-- 修改编号为6的学生爱好为相亲 入学日期为2018-8-8
update student set f_hobbys = '相亲', f_join = '2018-8-8'where f_id = 6;

--修改年龄为 20到25的兴趣爱好 为lol
update student set f_hobbys = f_hobbys || '/lol' where f_age >= 20 and f_age <= 25; 

-- 删除年龄等于18或者32的学生
delete from student where f_age = 18 or f_age = 32; 

-- 快速复制表
create table student_tmp 
as
select * from student where 1 = 2;  -- 这里判断结果为true的话复制整个表结构和数据  判断结果为false的话 复制表结构 

-- 批量添加 数据
insert into student_tmp(f_name,f_sex) select f_name,f_sex from student


-- 查
select * from student_tmp
select * from student
-- 删除表
drop table student_tmp




---------------------------------------------------------------------
--------------------------------表约束-------------------------------
---------------------------------------------------------------------
-- 建表
create table vipinfo(
       v_id int,
       v_name varchar(30),
       v_age int,
       v_email varchar(30),
       v_birthday date default sysdate,
       v_tele int
)
alter table vipinfo add v_sex char(4)
-- 添加主键约束(一个表里边只能有一个主键约束)
insert into vipinfo (v_id,v_name) values (2,'张三')
delete from vipinfo
alter table vipinfo add constraint pk_vip_id primary key(v_id)

-- 添加唯一约束（一个表里边可以有多个唯一约束）
alter table vipinfo add constraint unique_vip_telt unique(v_tele)

alter table vipinfo add constraint unique_vip_email unique(v_email)

-- 添加检查约束
alter table vipinfo add constraint ck_vip_age
check(
      v_age >= 1 and v_age <= 150
)

-- 性别的检查约束
alter table vipinfo add constraint ck_vip_sex
check(
      v_sex = '男' or v_sex = '女'
)

-- 非空约束
alter table vipinfo add constraint v_not_empty
check(
      v_tele is not null
)
alter table vipinfo add constraint name_not_empty
check(
      v_name is not null
)
-- 非空写法
alter table vipinfo modify (v_email varchar(30) not null)

-- 判断值的时候
-- 判断为空  is null 
-- 判断不为空 is not null

-- 外键约束



-- 添加数据
insert into vipinfo (v_id,v_name,v_age,v_email,v_tele,v_sex) values (3,'Yang',18,'1008611@qq.com',13993377428,'男')
-- 快速添加数据
insert into vipinfo values(4,'Zhang',21,'10001@vipqq.com',sysdate,15193380827,'男')
-- 查表
select * from vipinfo
-- 修改数据
update vipinfo set v_name = 'Aubrey' where v_id = 1
-- 删表
delete from vipinfo where v_id = 3




--------------------------------------------------------------
----------------------------会员详情表------------------------
--------------------------------------------------------------
-- 建会员详细情况表
create table vipdetails(
       v_id int,
       v_number varchar(30),
       v_integral int,
       v_level int,
       v_coupons varchar(100),
       v_login_date date default sysdate,
       v_info_id int
)
-- 添加主键
alter table vipdetails add constraint pk_details_id primary key(v_id)
-- 添加唯一约束
alter table vipdetails add constraint details_number unique (v_number)
-- 添加非空约束
alter table vipdetails add constraint details_not_empty
check(
      v_number is not null
)
-- 添加外键约束（引用）
alter table vipdetails add constraint vk_details_info_id foreign key(v_info_id) 
references vipinfo(v_id) on delete cascade

/*
在添加外键的基础语句上
on delete set null; 当删除会员info信息时，将外键details中的数据设置为null
on detele cascade; 当删除会员info信息的时候，将外键引用信息删除
*/



-- 对约束进行操作
-- 修改约束名
alter table vipdetails rename constraint vk_details_info_id to vk_cite_info_id



-- 删除约束
alter table vipinfo drop constraint name_not_empty




 

-- 添加数据

insert into vipdetails (v_id,v_name,v_age,v_email,v_tele,v_sex) values (3,'Yang',18,'1008611@qq.com',13993377428,'男')

-- 快速添加数据

insert into vipdetails values(2,'hw1008611',299,7,'新会员95折',sysdate,4)

-- 查表


select * from vipdetails

select * from vipinfo


-- 修改数据

update vipinfo set v_name = 'Aubrey' where v_id = 1

-- 删表数据
delete from vipinfo where v_id = 4;

-- 删除整个表
drop table vipdetails



-- 创建表的时候添加约束

create table vipdetails(
       v_id int,
       v_number varchar(30),
       v_integral int,
       v_level int,
       v_coupons varchar(100),
       v_login_date date default sysdate,
       v_info_id int,
       constraint pk_details_id primary key (v_id),
       constraint details_number unique (v_number),
       constraint details_not_empty check( v_number is not null),
       constraint vk_details_info_id foreign key(v_info_id) references vipinfo(v_id) on delete cascade
)



















