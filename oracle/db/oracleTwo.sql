select * from EMP;
select * from dept
-- 1.��ѯ����ΪWARD��Ա����Ϣ
select * from emp where ename='WARD'

-- 2.��ѯ����idΪ20 ������Ա����Ϣ
select * from emp where deptno=20

-- 3.��ѯ����ְλΪSALESMANԱ����Ա���� ���� ���ű��
select empno,ename,deptno from emp where job = 'SALESMAN'

-- 4.��ѯ������ڹ��ʵ�Ա����Ϣ
select * from emp where comm > sal

-- ��ѯְλ����MANAGER��CLERK ���ҹ��ʸ���2000��Ա��
select * from emp where job !=' MANAGER' and job != 'CLERK' and sal > 2000
-- in �ǰ��� not in �ǲ�����
select * from emp where job not in(' MANAGER' ,'CLERK' ) and sal > 2000

-- ��ѯ�н����Ա���Ĳ�ְͬλ  ȥ�� distinct
select distinct job from emp where comm is not null
select distinct job from emp where comm > 0
--  ��ѯû�н�����߽������100��Ա����Ϣ
select * from emp where comm < 100 or comm is null

-- ģ����ѯԱ������������ĸS��ͷ��Ա��
-- %�� ƥ���κ��������κ��ַ� ģ����ѯ��like
select * from emp where ename like 'S%';
-- ��ѯԱ�������к���S��ĸ�� �ϸ����ִ�Сд
select * from emp where ename like '%S%';
-- s��β��
select * from emp where ename like '%S'
-- ������s��Ա����Ϣ

select * from emp where ename not in(select ename from emp where ename like '%S%');

select * from emp where ename not like '%S%'

-- ��ѯԱ�������ڶ�����ĸΪL��Ա����Ϣ   �»��� �������ⵥ���ַ�
select * from emp where ename like '_L%'

-- �����û������Ա���������Ҹ���������ѯ��Ա������Ϣ
select * from emp where ename = '&Ա������';

-- �ؼ���  order by
-- desc ����
-- asc ���� Ĭ�����򷽷�
-- ��ѯԱ����������нˮ����нˮ�Ľ���
select ename, sal from emp order by sal desc

-- ��ѯԱ����������ְ���� ������ְ���ڴ��ȵ�������
select ename,hiredate from emp order by hiredate asc


--�����ѯ count �����ֵΪnull
-- ��ѯԱ������
select count(*) as Ա������ from emp

-- ��ѯԱ������ְλ�ĸ���
select  count(distinct job) as ְλ from emp

-- ��ѯ�н����Ա������
select  count(comm) as �н��� from emp where comm is not null;

-- ��ѯ��߹��ʵ�Ա�������Լ�������λ

select  ename,job from emp where sal  = (select max(sal) from emp);

-- ��ѯ���ʸ���ƽ�����ʵ�Ա����Ϣ
select avg(sal) from emp;-- ƽ������
select * from emp where sal > (select avg(sal) from emp) order by sal desc;

-- ����  group by �Բ�ѯ�Ľ�����з���ͳ��
-- having �Է���ͳ�ƵĽ������ɸѡ��������
-- ��ѯÿ�����ŵ�Ա������
select distinct(deptno) from emp
select deptno,count(*) as ����  from emp group by deptno

--��ʾÿ�����ŵ���߹��ʺ���͹���
select min(sal) from emp
select deptno,min(sal),max(sal)  from emp group by deptno

-- �����ѯ
select deptno,count(*) from emp group by deptno

-- �����Ӳ�ѯ
-- ��ѯ��smith����ͬһ�����ŵ�Ա����Ϣ
select * from emp where deptno = (select deptno from emp where ename = 'SMITH')

-- ͳ��ÿ�����Ź�����500-1000
select * from emp where  

-- �ܹ���
select sum(sal) from emp
-- ȫ�ֲ�ѯ

select * from EMP;

select * from dept


select to_date('20190908','yyyymmdd') from dual









