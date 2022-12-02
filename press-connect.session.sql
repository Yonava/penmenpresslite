
-- @BLOCK 
SELECT * FROM Authors;

-- @BLOCK
CREATE TABLE ArticleAuthor (
  Id INT AUTO_INCREMENT,
  Author_Id INT NOT NULL,
  Article_Id INT NOT NULL,
  FOREIGN KEY Author_Id REFERENCES Authors(Id),
  FOREIGN KEY Article_Id REFERENCES Articles(Id),
  PRIMARY KEY (Id)
);

-- @BLOCK
CREATE TABLE Articles (
  Id INT AUTO_INCREMENT,
  Title VARCHAR(255) NOT NULL,
  Category VARCHAR(20),
  Content TEXT,
  Eng_Score TEXT,
  Photo LONGTEXT,
  Issue_Id INT,
  FOREIGN KEY (Issue_Id) REFERENCES Issues(Id),
  PRIMARY KEY (Id)
);

-- @BLOCK
DROP TABLE Articles;

-- @BLOCK
CREATE TABLE Issues (
  Id INT AUTO_INCREMENT,
  Cover_Photo LONGTEXT,
  PRIMARY KEY (Id)
);

-- @BLOCK
CREATE TABLE Authors (
  Id INT AUTO_INCREMENT,
  F_Name VARCHAR(20) NOT NULL,
  M_Name VARCHAR(20),
  L_Name VARCHAR(20),
  Bio TEXT,
  PRIMARY KEY (Id)
);

-- @BLOCK
SELECT * FROM Authors;

-- @BLOCK

