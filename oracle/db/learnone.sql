-- 创建一个person表
CREATE table person(
	pid number(20),
	pname varchar2(10)
);

-- 添加一列
alter table person add gender number(1);

-- 修改列类型
alter table person MODIFY gender char(1); 

-- 修改列名称
alter table person rename COLUMN gender to sex;

-- 删除一列
alter table person drop column sex;

-- 添加数据
insert into person (pid, pname) values(1,'小明');
commit;

-- 修改一条数据
update person set pname = '小马' where pid = 1;
commit;

-- 删除数据
delete from person; -- 删除表中所有记录 
drop table person; -- 删除表结构
truncate table person; -- 删除表并且重新创建表 效果等于删除表中所有记录  删除效率更快

-- 序列 ：默认从一开始 依次递增，主要用来给主键赋值
-- dual 虚表 只是为了补全语法 没有任何实际意义
create sequence s_person;
select s_person.nextval from dual;
insert into person (pid, pname) values(s_person.nextval,'小刘');
commit;

-- 单行函数 作用于一行，返回一个值
-- 字符函数
select upper('yes') from dual;  -- 小写变大写
select lower('YES') from dual;  -- 大写变小写
-- 数值函数
select round(26.23, 1) from dual;  -- 四舍五入 后面的参数表示保留几位
select trunc(56.16, 1) from dual;  -- 直接截取 不会看截取后边的数字是否大于五
select mod(10,3) from dual;  -- 求余
-- 日期函数
select (sysdate-e.hiredate)/7 from emp e;
-- 日期转字符串函数
select to_char(sysdate, 'yyyy-mm-dd hh24:mi:ss') from dual;  -- 返回字符串格式
-- 字符串转日期格式
select to_date('2019-09-29 21:02:39','yyyy-mm-dd hh24:mi:ss') from dual;   -- 返回data类型
-- 通用函数
-- 计算年薪(奖金里边有null 任何数和null相加都为null )
select e.sal * 12 + nvl(e.comm,0) from emp e;

-- 条件表达式
-- 给emp表取中文名
select e.ename 
			 case e.ename
				when 'SMITH' then '史密斯'
from emp e;

-- 多行函数 作用于多行  返回多个值






-- 查询数据
select * from person;