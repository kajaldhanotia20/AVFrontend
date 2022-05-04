DROP DATABASE IF EXISTS project_AV;
CREATE DATABASE project_AV;
USE project_AV;

create table user (
  user_name varchar(100),
  password varchar(1024) not null,
  first_name varchar(100) not null,
  last_name varchar(100) not null,
  email varchar(100) not null,
  dob date not null,
  phone varchar(100) not null,
  user_type varchar(100) DEFAULT "normal",
  user_location varchar(100),
  primary key (user_name)
);

create table vehicle(
  vehicle_id INT NOT NULL AUTO_INCREMENT,
  vehicle_class varchar(100) not null,
  vehicle_model varchar(100) not null,
  vehicle_brand varchar(100) not null,
  vehicle_license varchar(100) not null,
  primary key (vehicle_id)
);

create table reservation(
  reservation_id varchar(100) not null,
  vehicle_id INT not null,
  user_name varchar(100) not null,
  start_location varchar(100) not null,
  end_location varchar(100) not null,
  start_time datetime not null,
  end_time datetime not null,
  payment_type varchar(100) not null,
  trip_price float,
  primary key (reservation_id),
  foreign key (user_name) references user (user_name),
  foreign key (vehicle_id) references Vehicle (vehicle_id)
);
