create table users_books(
  id int primary key,
  userId int,
  bookId int,
  
  foreign key(userId) references users(id),
  foreign key(bookId) references books(id)
);

insert into users_books(id, userId, bookId)
values (1, 2, 3);
insert into users_books(id, userId, bookId)
values (2, 1, 3);
insert into users_books(id, userId, bookId)
values (3, 2, 1);