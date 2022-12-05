
-- @BLOCK 
SELECT * FROM Authors;

-- @BLOCK
CREATE TABLE ArticleAuthor (
  ArticleId INT NOT NULL,
  AuthorId INT NOT NULL,
  PRIMARY KEY (ArticleId, AuthorId),
  FOREIGN KEY (ArticleId) REFERENCES Articles(Id),
  FOREIGN KEY (AuthorId) REFERENCES Authors(Id)
);

-- @BLOCK
CREATE TABLE Articles (
  Title VARCHAR(255) NOT NULL,
  Content LONGTEXT,
  Category VARCHAR(255),
  Photo LONGTEXT,
  Score TEXT,
  Id INT AUTO_INCREMENT,
  Issue_Id INT,
  Release_Day INT,
  Release_Month INT,
  Release_Year INT,
  FOREIGN KEY (Issue_Id) REFERENCES Issues(Id),
  PRIMARY KEY (Id)
);

-- @BLOCK
DROP TABLE Articles;

-- @BLOCK
CREATE TABLE Issues (
  Id INT AUTO_INCREMENT,
  Cover_Photo LONGTEXT,
  Release_Day INT,
  Release_Month INT,
  Release_Year INT,
  PRIMARY KEY (Id)
);

-- @BLOCK
CREATE TABLE Authors (
  Id INT AUTO_INCREMENT,
  F_Name VARCHAR(20) NOT NULL,
  M_Name VARCHAR(20),
  L_Name VARCHAR(20),
  Bio TEXT,
  Photo LONGTEXT,
  Join_Day INT,
  Join_Month INT,
  Join_Year INT,
  Title VARCHAR(255),
  PRIMARY KEY (Id)
);

-- @BLOCK
SELECT * FROM Authors;

-- @BLOCK

