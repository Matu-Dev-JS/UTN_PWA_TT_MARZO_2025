CREATE TABLE channels (
    id INT PRIMARY KEY AUTO_INCREMENT,  
    name VARCHAR(50),
    private BOOLEAN,
    workspace_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (workspace_id) REFERENCES workspaces(Id) ON DELETE CASCADE
)