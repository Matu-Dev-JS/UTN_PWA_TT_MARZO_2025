CREATE TABLE workspace_members (
    id INT PRIMARY KEY AUTO_INCREMENT,  
    user_id int,
    workspace_id INT,
    rol VARCHAR(10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(Id) ON DELETE CASCADE,
    FOREIGN KEY (workspace_id) REFERENCES workspaces(Id) ON DELETE CASCADE
)