## DDL：操作数据库、表
 1.操作数据库：CRUD
    1.C （Create）：创建
        * 创建数据库：
            * create database 数据库名;
        * 创建数据库，判断不存在，再创建、
            * create database if not exists 数据库名称;
        * 创建数据库 并指定数据库字符集
            * create database 数据库名 character set 字符集名;
        * 创建指定字符集的数据库 并且判断是否存在
            * create database if not exists 数据库名 character set 字符集名;
    2.R （Retrieve）：查询
        * 查询所有数据库的名称
            * show databases
        * 查询对应数据库创建的字符集
            * show create database 数据库名称
    3.U （Update）：修改
        * 修改数据库的字符集
            * alter database 数据库名称 character set 字符集名称;
    4.D （Delete) ：删除
        * 删除数据库操作
            * drop database 数据库名;
        * 判断数据库是否存在 存在就删除
            * drop database if exists 数据库名称;
    5.使用数据库
        * 查询当前正在使用的数据库
            * select database();
        * 使用指定数据库
            * use 数据库名称;
 2.操作数据表
    1.C （Create）：创建
        * 创建表的语法
            * create table 表名(
                列名1 数据类型1，
                列名2 数据类型2，
                ......数据类型n
                );
                * 最后一列不要加,
                * sql里边的数据类型
                    1.int:整数类型
                        * age int,
                    2.double:小数类型
                        * score double(4,1),
                    3.date:日期，只包含年月日， yyyy-mm-dd
                    4.datetime：日期包含年月日  时分秒  yyyy-MM-dd HH:mm:ss
                    5.timestamp: 时间戳类型
                        * 如果将来不给字段赋值，或者赋值为null 则默认使用当前的系统时间，自动赋值
                    6.varchar:字符串类型
                        * name varchar(20):姓名最大20个字符
        * 创建表
            create table student(
                id int,
                name varchar(20),
                age int,
                score double(4,1),
                birthday date,
                inster_time timestamp
            )
    2.R （Retrieve）：查询
        * 查询某个数据库的
            * show tables;
        * 查询表结构
            * desc 表名;      
    3.U （Update）：修改
        * 修改表名
            alter table 表名 rename to 新的表名
        * 修改表的字符集
            alter table 表名 character set 字符集名称
        * 添加列
            alter table 表名 add 列名 字符集名;
        * 修改列名
            alter table 表名 change 旧列名 新列名 字符集名;
        * 修改数据类型
            alter table 表名 modify 列名 数据类型;
        * 删除列
            alter table 表名 drop 列名;
    4.D （Delete) ：删除
        * drop table 表名
        * drop tablr if exists 表名;



## DML：增删改表中的数据
    1. 添加数据:
        * 语法:
            insert into 表名(列名1,列名2,...列名n) values(值1,值2,...值n);
        * 注意：
            列名和值要一一对应
            省略列名 相当于使用简写的方式给表赋值（insert into 表名 values(值...)）
            除了数字类型，其他的数据类型都需要使用引号引起来
    2. 删除数据
        * 语法格式
            delete from 表名 [where条件]
        * 注意
            如果不加条件，则删除表中所有记录。
            如果要删除所有记录
                * delete from 表名;  -- 不推介使用，有多少条记录就运行多少次
                * TRUNCATE TABLE 表名;  -- 删除表中所有记录 并重新创建一个新的空表
    3. 修改数据
        * 语法
            update 表名 set 列名1 = 值1, 列名2 = 值2,...[where条件];
        * 注意
            1. 如果不加条件 会将表中的记录都修改掉。


## DQL：查询表中的记录
    1. 语法：
        select
            字段列表
        from 
            表名列表
        where
            条件列表
        group by
            分组字段
        having
            分组之后的条件
        order by
            排序
        limit
            分页限定
    2. 基础查询
        1. 多个字段查询
            select 字段名1,字段名2,... from 表名;
            * 注意：  如果查询所有字段，可以将字段名用*号代替;
        2. 去重操作
            * 在查询字段名前边加上关键字 distinct
        3. 计算列
            * 一般可以使用四册运算计算一些列的值。（一般只会进行数值的计算）
            * ifnull（表达式1,表达式2）
                * 表达式1，要判断的字段，表达式2，要替换成的数值
        4. 起别名操作
            * as 关键字起别名 as也可以省略 在字段后边加空格即可


















