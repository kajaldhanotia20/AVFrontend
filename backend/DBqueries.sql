DROP DATABASE IF EXISTS group4;
CREATE DATABASE group4;
USE group4;

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
  reservation_id varchar(200) not null,
  vehicle_id INT not null,
  user_name varchar(100) not null,
  start_location varchar(100) not null,
  end_location varchar(100) not null,
  start_time TIME not null,
  end_time TIME not null,
  payment_type varchar(100) not null,
  trip_price varchar(100),
  primary key (reservation_id),
  foreign key (user_name) references user (user_name),
  foreign key (vehicle_id) references vehicle (vehicle_id)
);
