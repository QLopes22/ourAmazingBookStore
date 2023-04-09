
--run this first
create table reviews (
  id int primary key,
  userId int,
  bookId int,
  review text,
  
  foreign key(userId) references users(id),
  foreign key(bookId) references books(id)
);

--then run all of this
insert into books(id, title, author)
values (1, 'Fifty Shades of Grey', 'E. L. James');

insert into books(id, title, author)
values (2, 'How to Teach Quantum Physics to Your Dog', 'Chad Orzel');
 
insert into books(id, title, author)
values (3, 'The Big Short', 'Michael Lewis');

 
insert into users(id, username)
values (1, 'Addy');

insert into users(id, username)
values (2, 'Quentin');

insert into users(id, username)
values (3, 'Marcel');


insert into reviews(id, userId, bookId, review)
values (1, 1, 2,'this book was not that bad');

insert into reviews(id, userId, bookId, review)
values (2, 1, 1, 'this book was trash');

insert into reviews(id, userId, bookId, review)
values (3, 2, 3, 'this book was aight');
