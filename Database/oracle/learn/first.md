- oracle 数据库体系结构
  - 数据库
  - 实例
  - 用户
  - 表空间
  - 数据文件
- 创建表空间
  - 数据类型
    - varchar 字符串类型
    - varchar2 
    - number 数值类值
    - data 日期类型 年月日 时分秒
    - clob  文本类型
    - blob 二进制类型
  - 创建表

    CREATE table person(
	pid number(20),
	pname varchar2(10)
    );

  - 修改表结构

    -- 添加一列
    alter table person add gender number(1);

    -- 修改列类型
    alter table person MODIFY gender char(1); 

    -- 修改列名称
    alter table person rename COLUMN gender to sex;

    -- 删除一列
    alter table person drop column sex;

- 数据的增删改
  - 添加数据
    -- 添加数据
    insert into person (pid, pname) values(1,'小明');
    commit;
  - 修改数据
    -- 修改一条数据
    update person set pname = '小马' where pid = 1;
    commit;
  - 删除数据
    -- 删除数据
    delete from person; -- 删除表中所有记录 
    drop table person; -- 删除表结构
    truncate table person; -- 删除表并且重新创建表 效果等于删除表中所有记录  删除效率更快