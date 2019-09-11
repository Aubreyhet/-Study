select * from EMP;
select * from dept
-- 1.查询姓名为WARD的员工信息
select * from emp where ename='WARD'

-- 2.查询部门id为20 的所有员工信息
select * from emp where deptno=20

-- 3.查询所有职位为SALESMAN员工的员工号 姓名 部门编号
select empno,ename,deptno from emp where job = 'SALESMAN'

-- 4.查询奖金高于工资的员工信息
select * from emp where comm > sal

-- 查询职位不是MANAGER和CLERK 并且工资高于2000的员工
select * from emp where job !=' MANAGER' and job != 'CLERK' and sal > 2000
-- in 是包含 not in 是不包含
select * from emp where job not in(' MANAGER' ,'CLERK' ) and sal > 2000

-- 查询有奖金的员工的不同职位  去重 distinct
select distinct job from emp where comm is not null
select distinct job from emp where comm > 0
--  查询没有奖金或者奖金低于100的员工信息
select * from emp where comm < 100 or comm is null

-- 模糊查询员工名字中以字母S开头的员工
-- %： 匹配任何数量的任何字符 模糊查询用like
select * from emp where ename like 'S%';
-- 查询员工姓名中含有S字母的 严格区分大小写
select * from emp where ename like '%S%';
-- s结尾的
select * from emp where ename like '%S'
-- 不包含s的员工信息

select * from emp where ename not in(select ename from emp where ename like '%S%');

select * from emp where ename not like '%S%'

-- 查询员工姓名第二个字母为L的员工信息   下划线 代表任意单个字符
select * from emp where ename like '_L%'

-- 根据用户输入的员工姓名并且根据姓名查询该员工的信息
select * from emp where ename = '&员工姓名';

-- 关键字  order by
-- desc 降序
-- asc 升序 默认排序方法
-- 查询员工的姓名和薪水按照薪水的降序
select ename, sal from emp order by sal desc

-- 查询员工姓名和入职日期 按照入职日期从先到后排序
select ename,hiredate from emp order by hiredate asc


--分组查询 count 会忽略值为null
-- 查询员工总数
select count(*) as 员工总数 from emp

-- 查询员工表中职位的个数
select  count(distinct job) as 职位 from emp

-- 查询有奖金的员工个数
select  count(comm) as 有奖金 from emp where comm is not null;

-- 查询最高工资的员工名字以及工作岗位

select  ename,job from emp where sal  = (select max(sal) from emp);

-- 查询工资高于平均工资的员工信息
select avg(sal) from emp;-- 平均工资
select * from emp where sal > (select avg(sal) from emp) order by sal desc;

-- 分组  group by 对查询的结果进行分组统计
-- having 对分组统计的结果进行筛选（条件）
-- 查询每个部门的员工总数
select distinct(deptno) from emp
select deptno,count(*) as 人数  from emp group by deptno

--显示每个部门的最高工资和最低工资
select min(sal) from emp
select deptno,min(sal),max(sal)  from emp group by deptno

-- 分组查询
select deptno,count(*) from emp group by deptno

-- 单行子查询
-- 查询与smith属于同一个部门的员工信息
select * from emp where deptno = (select deptno from emp where ename = 'SMITH')

-- 统计每个部门工资在500-1000
select * from emp where  

-- 总工资
select sum(sal) from emp
-- 全局查询

select * from EMP;

select * from dept


select to_date('20190908','yyyymmdd') from dual










