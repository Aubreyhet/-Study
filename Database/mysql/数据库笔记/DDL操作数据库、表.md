## DDL：操作数据库、表
 1. 操作数据库：CRUD

    1. C （Create）：创建
        * 创建数据库：
            * create database 数据库名; 
        * 创建数据库，判断不存在，再创建、
            * create database if not exists 数据库名称; 
        * 创建数据库 并指定数据库字符集
            * create database 数据库名 character set 字符集名; 
        * 创建指定字符集的数据库 并且判断是否存在
            * create database if not exists 数据库名 character set 字符集名; 
    2. R （Retrieve）：查询
        * 查询所有数据库的名称
            * show databases
        * 查询对应数据库创建的字符集
            * show create database 数据库名称
    3. U （Update）：修改
        * 修改数据库的字符集
            * alter database 数据库名称 character set 字符集名称; 
    4. D （Delete) ：删除
        * 删除数据库操作
            * drop database 数据库名; 
        * 判断数据库是否存在 存在就删除
            * drop database if exists 数据库名称; 
    5. 使用数据库
        * 查询当前正在使用的数据库
            * select database(); 
        * 使用指定数据库
            * use 数据库名称; 

 2. 操作数据表

    1. C （Create）：创建
        * 创建表的语法
            * create table 表名(

                列名1 数据类型1，
                列名2 数据类型2，
                ...... 数据类型n
                ); 

                * 最后一列不要加, 
                * sql里边的数据类型

                   - 1.int: 整数类型

                        * age int, 

                   - 2 .double: 小数类型

                        * score double(4, 1), 

                   - 3.date: 日期，只包含年月日， yyyy-mm-dd
                   - 4.datetime：日期包含年月日  时分秒  yyyy-MM-dd HH:mm:ss
                   - 5.timestamp: 时间戳类型

                        * 如果将来不给字段赋值，或者赋值为null 则默认使用当前的系统时间，自动赋值

                   - 6.varchar: 字符串类型

                        * name varchar(20): 姓名最大20个字符
        * 创建表

            create table student(
                id int, 
                name varchar(20), 
                age int, 
                score double(4, 1), 
                birthday date, 
                inster_time timestamp
            )

    2. R （Retrieve）：查询
        * 查询某个数据库的
            * show tables; 
        * 查询表结构
            * desc 表名; 
    3. U （Update）：修改
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

    4. D （Delete) ：删除
        * drop table 表名
        * drop tablr if exists 表名; 

## DML：增删改表中的数据

  1. 添加数据:
        * 语法:

            insert into 表名(列名1, 列名2, ... 列名n) values(值1, 值2, ... 值n); 

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

                * delete from 表名; -- 不推介使用，有多少条记录就运行多少次
                * TRUNCATE TABLE 表名; -- 删除表中所有记录 并重新创建一个新的空表
  3. 修改数据
        * 语法

            update 表名 set 列名1 = 值1, 列名2 = 值2, ...[where条件]; 

        * 注意
            1. 如果不加条件 会将表中的记录都修改掉。

## DQL：查询表中的记录

 1. 语法：

    
    ```
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
    ```

2. 基础查询
    1. 多个字段查询

        select 字段名1, 字段名2, ...from 表名; 

        * 注意：  如果查询所有字段，可以将字段名用*号代替; 
    2. 去重操作
        * 在查询字段名前边加上关键字 distinct
    3. 计算列
        * 一般可以使用四册运算计算一些列的值。（一般只会进行数值的计算）
        * ifnull（表达式1, 表达式2）
            * 表达式1，要判断的字段，表达式2，要替换成的数值
    4. 起别名操作
        * as 关键字起别名 as也可以省略 在字段后边加空格即可
3. 条件查询
    1. where 子句 后边跟条件
    2. 运算符
        * < > <= >= = <>  
        * between...and 介于两者之间
        * in  包含/集合
        * link 模糊查询
            * 占位符  _ 单个任意字符   % 多个任意字符
        * is null 是null   is not null 非空
        * and/&&  并且/和
        * or/||   或者
        * not/!  非

## DQL深层

1. 排序查询
    * 语法：order by 子句
        * order by 排序字段1 排序方式1，排序字段2 排序方式2  默认方式是使用升序的顺序进行排序
    * 排序方式
        * asc 升序（默认）
        * desc 降序
    * 多重排序条件 ： 当第一排序条件值一样时，才进行判断下一排序条件。
2. 聚合查询 ： 将一列数据作为一个整体，进行纵向的计算
    * count 计算个数 排除null的值  所以正确使用 加ifnull 一般选择非空列：主键
    * max 计算最大值 
    * min 计算最小值
    * sun 求和
    * avg 计算平均值
3. 分组查询
    * 语法:group by 分组字段
    * 分组之后查询的字段：分组字段、聚合函数
    * where 和having 的区别

        where在分组前进行限定，having在分组之后进行限定，不满足having的条件限定 将不会被查询出来
        where后不能进行聚合函数，having是可以进行聚合函数的判断

4. 分页查询
    * 语法：limit 开始的索引，每一页显示的条数; 
    * 公式：开始的索引 = （当前的页码 - 1）* 每页显示的条数
    * MySQL 独有的分页


## 约束

- 基本概念： 对表中数据进行限定，保证数据的正确性、有效性、完整性。
- 分类：
    * 主键约束：primary key
    * 非空约束：not null
    * 唯一约束：unique
    * 外键约束: foreign key
- 非空约束
    * 添加：
        创建时添加约束 --> -- 创建表的时候添加约束

                           ```
                            CREATE TABLE stu(
                                id int, 
                                name varchar(20) not null
                            )
                            ```

        创建后添加约束 --> -- 创建表之后添加约束

            ```
                            alter table stu add sex varchar(10) not null; 
                            ```

    * 删除：-- 删除约束 -->    alter table stu add sex varchar(10)
- 唯一约束：unique 值不能重复
    * 添加： 创建时添加唯一约束  -- 创建表时添加唯一约束

                                create table stu(
                                    id int, 
                                    phone_number varchar(20) unique  -- 添加唯一约束
                                ); 
        创建后添加唯一约束  -- 创建后添加唯一约束  创建后添加唯一约束 要看数据数据是否具有唯一性

                        alter table stu modify phone_number varchar(20) unique; 

    * 删除唯一约束 -- 删除唯一约束

                -- alter table stu modify phone_number varchar(20); --  这样是删不了唯一约束的
                alter table stu drop index phone_number; 

- 主键约束：primary key
    * 注意：1. 含义： 非空且唯一  2. 一张表只能有一个字段为主键 3. 主键是表中记录的唯一标识
    * 创建表时 添加主键约束 

            create table stu(
                id int primary key, 
                name varchar(20)
            ); 

    * 删除主键   -- 删除主键

                -- 错误alter table stu modify id int; 
                alter table stu drop primary key; 

    * 创建之后添加主键约束  -- 创建完表之后添加主键约束

                alter table stu modify id int primary key; 

- 自动增长(一般是和主键一块使用)
    * 概念: 如果某一列数据是数值类型的, 使用auto_increment 可以来完成值的自动增长
    * 创建表的时候添加主键并且主键自增长

        create table stu(
            id int primary key auto_increment, 
            name varchar(20)
        ); 

    * 删除主键约束  -- 删除主键约束的自动增长(主键约束是删除不掉的)

                    alter table stu modify id int; 

    * 创建之后添加主键的自动增长 -- 创建表之后添加主键自动增长

                    alter table stu modify id int auto_increment; 

- 外键约束: foreign key，让表和表产生关系，从而保证数据的正确性
    * 在创建表是添加外键约束 语法: 

        create table 表名(
            .....
            外键列
            constraint 外键名称 foreign key (外键列名称) references 主表名称(主键列名称)
        ); 

    * 删除外键 -- 删除外键

                alter table 外键表名称 drop foreign key 外键名称; 

    * 在创建表之后添加外键  -- 添加外键

                alter table 外键表名称 add CONSTRAINT 外键名称 foreign key (外键字段名称) REFERENCES 主表名称(主表外键字段); 

    * 级联操作
        * 添加级联操作： alter table 表名 add constraint 外键名称 foreign key (外键字段名称) references 主表名称(主表列名称) on update cascade on delete cascade; 

## 多表关系

  1. 分类
     * 一对一关系
        * 一对多
        * 多对多

  2. 实现

        * 一对多： 在多的一方创建外键，指向一的一方的主键。
        * 多对多： 多对多关系实现需要借助第三张中间表。中间表至少包含两个字段，这两个字段作为第三张表的外键，分别指向两张表的主键 // 联合主键

## 范式

  - 在设计数据库时需要遵循的一些规范

        目前关系数据库有六种范式：第一范式（1NF）、第二范式（2NF）、第三范式（3NF）、巴斯-科德范式（BCNF）、第四范式(4NF）和第五范式（5NF，又称完美范式）。满足最低要求的范式是第一范式（1NF）。在第一范式的基础上进一步满足更多规范要求的称为第二范式（2NF），其余范式以次类推。一般来说，数据库只需满足第三范式(3NF）就行了。

  - 分类：
        * 第一范式（1NF）：每一列数据都是不可分割的原子数据
        * 第一范式（2NF）：在第一范式的基础上，非码属性必须完全依赖于码（在1NF的基础上消除非主属性对主码的部分函数依赖）
            * 1. 函数依赖 A-->B 如果通过A属性的值可以确定唯一B属性的值，则称B依赖于A   例如：学号 ---> 学生姓名
            * 2. 完全函数依赖： A-->B 如果A是一个属性组，则B属性值的确定需要依赖于A属性组中的所有属性值
            * 3. 部分函数依赖： A-->B 如果A是一个属性组，则B属性值得确定只需要依赖于A属性组中的某些值即可
            * 4. 传递函数依赖： A-->B, B-->C 如果通过A属性的值，可以确定唯一B属性的值，再通过B属性的值可以确定唯一C属性的值则称C传递依赖于A
            * 5. 码：如果在一张表中一个属性（属性组），被其他所有属性锁完全依赖，则称这个属性（属性组）为该表的码
        * 第三范式（3NF）：在2NF的基础上，任何非主属性不依赖于其他非主属性（在2NF上消除传递依赖）

## 数据库备份还原

  1. 命令行方式

      * 语法：

            备份：mysqldump -u用户名 -p密码  数据路名 > 保存的路径
            还原： 1. 登录数据库 2. 创建数据库 3. 使用数据库 4. 执行文件： source 文件路径

 2. 图形化工具

## 多表查询：

  - 查询语法:

        select 列名 from 表名

  - 笛卡儿积：有两个集合 取这两个集合所有组成的情况  要完成多表查询，需要消除无用的数据
  - 多表查询分类：
    1. 内链接查询：
        * 隐式内连接：使用where条件 
        * 显示内连接：语法：

            select 字段列表 from 表名1 [inner] join 表名2 on 条件

    2. 外连接查询：
        * 左外连接
            * 语法：select 字段列表 from 表1 left [outer] join 表2 on 条件; 
        * 右外连接
            * 语法：select 字段列表 from 表1 right [outer] join 表2 on 条件; 
    3. 子查询：
        * 概念：查询中嵌套查询
        * 子查询的不同情况
            1. 子查询的结果是单行单列的：

                子查询可以作为条件，使用运算符取判断。

            2. 子查询结果是多行单列的：

                子查询可以作为条件，使用运算符in来判断

            3. 子查询的结果是多行多列的：

                子查询可以作为一张虚拟表进行查询

## 事务

   1. 事务的基本介绍
        概念： 如果一个包含多个步骤的业务操作，被事务管理，那么这些操作要么同时成功，要么同时失败
        操作：开启事务： start transaction      回滚:rollback        提交:commit; mysql 数据库中增删改
   2. 事务的四大特征：

        1. 原子性：是不可分割的最小操作单位，要么同时成功，要么同时失败
        2. 持久性：当事务提交或者回滚后，数据库会持久化的保存数据
        3. 隔离性：多个事务之间互相独立
        4. 一致性：事务操作前后数据总量不变

   3. 事务的隔离级别
    ```
    概念：多个事务之间是相互隔离的相互独立的，但是多个事务操作同一批数据则会引发一些问题，设置隔离级别就可以解决这些问题
    存在问题：
    ```


   - 1.  脏读：一个事务读取到另外一个事务没有提交的数据 
   - 2.  不可重复读：在同一个事务操作中，两次读取到的数据不一样
   - 3.  幻读：一个事务操作数据表中所有记录，另外一个事务添加了一条数据，则第一个事务查询不到自己的修改

    隔离级别

- 1.read uncommitted ：读未提交
    产生问题：三个问题都有可能发生
- 2.read committed： 读已提交
    产生问题：不可重复读和幻读
- 3.repeattable read：可重复读（mysql默认）
    产生问题：幻读
- 4.serializable：串行化
    可以解决所有问题

## DCL:

    DDL:操作数据库和表
    DML：增删改表中的数据
    DQL：查询表中的数据
    DCL：管理用户，授权
    DCL：

        管理用户
            添加用户
            删除用户
            

