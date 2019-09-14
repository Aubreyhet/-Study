-- 创建vip信息表  进行数据查询
create table vipinfo(
                id int,
                name varchar(20),
                age int,
								telenum int,
								integral double,
                level int,
                birthday date,
                inster_time timestamp
            );
						
-- 更改手机号码数据类型为字符串
alter table vipinfo modify telenum VARCHAR(20);
-- 更改积分的数值范围
alter table vipinfo modify integral DOUBLE(16,2);

-- 添加数据
INSERT INTO vipinfo VALUES(07,'张庆',32,'13125553555',266,4,'1992-07-02',SYSDATE());

-- 查询 姓名 和年龄
SELECT name,age from vipinfo;

-- 去重
SELECT DISTINCT age FROM vipinfo;

-- 计算age和level的和
SELECT NAME, age ,level, age+level from vipinfo;
-- 如果有null参与了计算，那么计算结果都为null
-- 解决 ifnull函数
SELECT NAME, age ,level, age+IFNULL(level,0) from vipinfo;

-- 起别名
SELECT NAME, age ,level, age+IFNULL(level,0) AS sum from vipinfo;
SELECT NAME, age ,level, age+IFNULL(level,0) sum from vipinfo;


-- 查询
select * from vipinfo;					
						
						
						
						
						
						
						
											
						
-- 查询表字符集
SHOW CREATE TABLE vipinfo;

-- 查询表结构
desc vipinfo;

-- 显示表
show tables;

-- 查询
select * from vipinfo;


