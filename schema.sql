CREATE DATABASE subj_db;

CREATE TABLE expressions(
    _id SERIAL PRIMARY KEY NOT NULL,
    expression VARCHAR(255) UNIQUE NOT NULL,
    example_en_1 TEXT NOT NULL,
    example_fr_1 TEXT NOT NULL,
    example_en_2 TEXT,
    example_fr_2 TEXT,
    example_en_3 TEXT,
    example_fr_3 TEXT
);

SELECT * FROM expressions;

ALTER TABLE expressions
ADD COLUMN alt_names TEXT [];