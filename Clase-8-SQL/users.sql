
/* Insertar usuarios */
INSERT INTO users (email, password, username) 
VALUES 
("pepe@gmail.com", "Pepe_123", "Pepe"),
("maria@gmail.com", "Maria_123", "Maria")

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,  
    email VARCHAR(50),
    password VARCHAR(50),
    username VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)