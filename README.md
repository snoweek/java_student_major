#student_major
student_major，是一个基于Java Web和Hibernate框架的学生-专业管理系统，主要完成以下功能

1. 管理员登录，注销，更改密码，以及对于专业，学生的管理。
2. 对于专业的管理包括增删查改。
3. 对于学生的管理包括增删查改。

##数据库student_major表信息
如果数据连接信息，例如数据库名或密码发生变化，可以到src/hibernate.cfg.xml中修改。
* manager
```
CREATE TABLE `manager` (
  `manager_id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `name` text,
  `password` text,
  PRIMARY KEY (`manager_id`)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8; 
```
表manager包含三列，manager_id记录管理员的数量，同时用作主键;name记录管理员的姓名;password记录管理员的密码。

* student
```
CREATE TABLE `student` (
  `student_id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `name` text,
  `gender` int(11) DEFAULT NULL,
  `major_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`student_id`)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8; 
```
表student包含四列，student_id用作主键;name记录学生姓名;gender记录学生的性别;major_id指示学生所学的专业。

* major

```
 CREATE TABLE `major` (
  `major_id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `name` text,
  `college` text,
  PRIMARY KEY (`major_id`)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;  
```
表manager包含三列，major_id用作主键;name记录专业名称;content记录专业所在的院系名称。


##License
Apache 
















