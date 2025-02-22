CREATE DATABASE collegehub;
USE collegehub;

CREATE TABLE courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(255) NOT NULL,  
    semester VARCHAR(50) NOT NULL,   
    subject VARCHAR(255) NOT NULL    
);