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

-- 查
select * from student




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











