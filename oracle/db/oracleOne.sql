-- ����ע��
/*
  ����ע��
*/

-- ����DDl����һ����
create table t_student(
       f_id int,
       f_name varchar2(30),
       f_sex char(2),
       f_age int,
       f_hobbys varchar2(100)
)

-- ɾ����
drop table t_student

-- �޸ı�
-- ��̬������������ѧ�ֶ� �޸ĵ��Ǳ�ṹ
alter table t_student add f_join_date date

-- ���������
alter table student add f_age int

-- �޸�ĳһ���ֶصĳ���
alter table t_student modify(f_hobbys varchar2(200))

-- �޸�ĳһ�ֶε�����
alter table student modify(f_join date)

-- �޸�����
alter table t_student rename column f_join_date to f_join

-- �޸ı���
rename t_student to student

-- ɾ���ֶ�
alter table student drop column f_age





-- ���ݲ���
-- CURD
-- ��ѯʱ��  dual��֮Ϊα�� ��������
select sysdate from dual

-- �޸ĵ�ǰ�Ự��session��ʱ��
alter session set nls_date_format = 'yyyy-mm-dd';

-- �������
insert into student values(1,'����','��','д����','2019-09-07')

-- �ύ���� F10
commit;

-- �޸�����
update student set f_name = '����' where f_id = 2;

-- ɾ������
delete from student where f_id = 2;

-- ���
delete from student



-- �������
insert into student values('1','����','��','д����','2019-09-08');
insert into student(f_id,f_name,f_sex,f_hobbys) values('2','����','��','��lol');
insert into student values('3','aubrey','��','д����','2019-09-08');
insert into student values('4','���ִ�','��','д����','2019-09-08');
insert into student values('5','��Х��','Ů','��','2019-09-08');
insert into student values('6','Բ��','��','��','2019-09-08');
insert into student values('7','����','��','д����','2019-09-08');
insert into student values('8','����','��','ŷ��','2019-09-08');

-- �޸�
-- �޸����������İ���
update student set f_hobbys = f_hobbys || '/����ʳ' where f_sex = '��';

-- �޸ı��Ϊ6��ѧ������Ϊ���� ��ѧ����Ϊ2018-8-8
update student set f_hobbys = '����', f_join = '2018-8-8'where f_id = 6;

--�޸�����Ϊ 20��25����Ȥ���� Ϊlol
update student set f_hobbys = f_hobbys || '/lol' where f_age >= 20 and f_age <= 25; 

-- ɾ���������18����32��ѧ��
delete from student where f_age = 18 or f_age = 32; 

-- ���ٸ��Ʊ�
create table student_tmp 
as
select * from student where 1 = 2;  -- �����жϽ��Ϊtrue�Ļ�����������ṹ������  �жϽ��Ϊfalse�Ļ� ���Ʊ�ṹ 

-- ������� ����
insert into student_tmp(f_name,f_sex) select f_name,f_sex from student


-- ��
select * from student_tmp
select * from student
-- ɾ����
drop table student_tmp




---------------------------------------------------------------------
--------------------------------��Լ��-------------------------------
---------------------------------------------------------------------
-- ����
create table vipinfo(
       v_id int,
       v_name varchar(30),
       v_age int,
       v_email varchar(30),
       v_birthday date default sysdate,
       v_tele int
)
alter table vipinfo add v_sex char(4)
-- �������Լ��(һ�������ֻ����һ������Լ��)
insert into vipinfo (v_id,v_name) values (2,'����')
delete from vipinfo
alter table vipinfo add constraint pk_vip_id primary key(v_id)

-- ���ΨһԼ����һ������߿����ж��ΨһԼ����
alter table vipinfo add constraint unique_vip_telt unique(v_tele)

alter table vipinfo add constraint unique_vip_email unique(v_email)

-- ��Ӽ��Լ��
alter table vipinfo add constraint ck_vip_age
check(
      v_age >= 1 and v_age <= 150
)

-- �Ա�ļ��Լ��
alter table vipinfo add constraint ck_vip_sex
check(
      v_sex = '��' or v_sex = 'Ů'
)

-- �ǿ�Լ��
alter table vipinfo add constraint v_not_empty
check(
      v_tele is not null
)
alter table vipinfo add constraint name_not_empty
check(
      v_name is not null
)
-- �ǿ�д��
alter table vipinfo modify (v_email varchar(30) not null)

-- �ж�ֵ��ʱ��
-- �ж�Ϊ��  is null 
-- �жϲ�Ϊ�� is not null

-- ���Լ��



-- �������
insert into vipinfo (v_id,v_name,v_age,v_email,v_tele,v_sex) values (3,'Yang',18,'1008611@qq.com',13993377428,'��')
-- �����������
insert into vipinfo values(4,'Zhang',21,'10001@vipqq.com',sysdate,15193380827,'��')
-- ���
select * from vipinfo
-- �޸�����
update vipinfo set v_name = 'Aubrey' where v_id = 1
-- ɾ��
delete from vipinfo where v_id = 3




--------------------------------------------------------------
----------------------------��Ա�����------------------------
--------------------------------------------------------------
-- ����Ա��ϸ�����
create table vipdetails(
       v_id int,
       v_number varchar(30),
       v_integral int,
       v_level int,
       v_coupons varchar(100),
       v_login_date date default sysdate,
       v_info_id int
)
-- �������
alter table vipdetails add constraint pk_details_id primary key(v_id)
-- ���ΨһԼ��
alter table vipdetails add constraint details_number unique (v_number)
-- ��ӷǿ�Լ��
alter table vipdetails add constraint details_not_empty
check(
      v_number is not null
)
-- ������Լ�������ã�
alter table vipdetails add constraint vk_details_info_id foreign key(v_info_id) 
references vipinfo(v_id) on delete cascade

/*
���������Ļ��������
on delete set null; ��ɾ����Աinfo��Ϣʱ�������details�е���������Ϊnull
on detele cascade; ��ɾ����Աinfo��Ϣ��ʱ�򣬽����������Ϣɾ��
*/



-- ��Լ�����в���
-- �޸�Լ����
alter table vipdetails rename constraint vk_details_info_id to vk_cite_info_id



-- ɾ��Լ��
alter table vipinfo drop constraint name_not_empty




 

-- �������

insert into vipdetails (v_id,v_name,v_age,v_email,v_tele,v_sex) values (3,'Yang',18,'1008611@qq.com',13993377428,'��')

-- �����������

insert into vipdetails values(2,'hw1008611',299,7,'�»�Ա95��',sysdate,4)

-- ���


select * from vipdetails

select * from vipinfo


-- �޸�����

update vipinfo set v_name = 'Aubrey' where v_id = 1

-- ɾ������
delete from vipinfo where v_id = 4;

-- ɾ��������
drop table vipdetails



-- �������ʱ�����Լ��

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



















