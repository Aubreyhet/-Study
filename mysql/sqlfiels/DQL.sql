-- 添加性别的列
alter table vipinfo add sex varchar(10);

-- 添加性别数据
update vipinfo set sex = '女' where id=6;

-- 查询排序 按照年龄排序
select * from vipinfo ORDER BY age;

-- 降序查询
select * from vipinfo ORDER BY age desc;

-- 多重排序条件
select * from vipinfo order by age desc, level asc;

-- 计算一共有多少人
select count(name) from vipinfo;
select count(ifnull(integral,0)) from vipinfo;

-- 计算积分最多的会员信息
select max(integral) from vipinfo;

-- 计算积分数罪少的会员
select min(integral) from vipinfo;

-- 计算积分总和
select sum(ifnull(integral,0)) from vipinfo;

-- 计算积分平均值
select avg(ifnull(integral,0)) from vipinfo;

-- 按照性别划分成两组 然后求每一组的平均年龄 积分总数
select sex, avg(age),sum(integral) from vipinfo group by sex;
-- 积分大于50的参与分组
select sex, avg(age),sum(integral) from vipinfo where integral > 50 group by sex;

-- 分组之后限定结果集 积分大于1000的
select sex, avg(age) 年龄,sum(integral) 积分 from vipinfo where integral > 50 group by sex having 积分 > 1000;

-- 分页查询 一( •̀ ω •́ )页显示3条数据 从索引0开始
select * from vipinfo limit 0, 3;

-- 公式：开始的索引 = （当前的页码 - 1）* 每页显示的条数
-- 查询第三页  显示3条
select * from vipinfo limit 6,3;





-- 查询表字符集
SHOW CREATE TABLE vipinfo;

-- 查询表结构
desc vipinfo;

-- 显示表
show tables;

-- 查询
select * from vipinfo;


