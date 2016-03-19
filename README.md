
student_major，基于java开发，整合了hibernate技术，主要完成以下功能
```
（1）管理员登录，注销，更改密码，以及对于专业，学生的管理
（2）对于专业的管理包括增删查改
（3）对于学生的管理包括增删查改
```
数据库中包含三个表
（1）manager
```
CREATE TABLE `manager` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `name` text,
  `password` text,
  PRIMARY KEY (`id`)
) 
```
(2)student
```
| student | CREATE TABLE `student` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `name` text,
  `gender` int(11) DEFAULT NULL,
  `major_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
)
```
(3)major

```
 CREATE TABLE `major` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `name` text,
  `college` text,
  PRIMARY KEY (`id`)
) 












echo "# java_searchenginee" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/snoweek/java_student_major.git
git push -u origin master


