
-- @BLOCK
CREATE TABLE ArticleAuthor (
  articleId INT NOT NULL,
  authorId INT NOT NULL,
  PRIMARY KEY (articleId, authorId),
  FOREIGN KEY (articleId) REFERENCES Articles(id),
  FOREIGN KEY (authorId) REFERENCES Authors(id)
);

-- @BLOCK
CREATE TABLE Articles (
  title VARCHAR(255) NOT NULL,
  content LONGTEXT,
  category VARCHAR(255),
  photo LONGTEXT,
  score INT,
  id INT AUTO_INCREMENT,
  issueId INT,
  releaseDay INT,
  releaseMonth INT,
  releaseYear INT,
  FOREIGN KEY (issueId) REFERENCES Issues(id),
  PRIMARY KEY (id)
);

-- @BLOCK
CREATE TABLE Issues (
  id INT AUTO_INCREMENT,
  photo LONGTEXT,
  releaseDay INT,
  releaseMonth INT,
  releaseYear INT,
  PRIMARY KEY (id)
);

-- @BLOCK
CREATE TABLE Authors (
  id INT AUTO_INCREMENT,
  firstName VARCHAR(20) NOT NULL,
  middleName VARCHAR(20),
  lastName VARCHAR(20),
  bio TEXT,
  photo LONGTEXT,
  joinDay INT,
  joinMonth INT,
  joinYear INT,
  title VARCHAR(255),
  PRIMARY KEY (id)
);

