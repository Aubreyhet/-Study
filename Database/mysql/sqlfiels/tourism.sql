-- 创建旅游线路分类表
create table tab_category(
	cid int primary key auto_increment,
	cname varchar(100) not null unique
);
-- 创建线路表
create table tab_route(
	rid int primary key auto_increment,
	rname varchar(100) not null unique,
	price double,
	rdate date,
	cid int,
	foreign key (cid) references tab_category(cid)  -- 省略外键名称
);
-- 创建用户表
create table tab_user(
	uid int primary key auto_increment,
	username varchar(100) unique not null,
	password varchar(30) not null,
	 name varchar(100),
	 birthday date,
	 sex char(1) DEFAULT '男',
	 telephone varchar(11),
	 email varchar (100)
);
-- 创建中间表关联用户与线路
create table tab_favorite(
	rid int, -- 线路id
	date datetime,
	uid int,
	PRIMARY key (rid,uid),
	foreign key (rid) references tab_route(rid),
	foreign key (uid) references tab_user(uid)
);



-- 添加数据
insert into tab_category values(null,'华中线');
insert into tab_route values(null,'')


select * from tab_route order by cid;