CREATE DATABASE riches;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


CREATE TABLE IF NOT EXISTS usuarios (
                id_usuario UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
                email VARCHAR NOT NULL,
                senha VARCHAR NOT NULL,
                nome VARCHAR,
                CONSTRAINT usuarios_pk PRIMARY KEY (id_usuario)
);

-- CREATE TABLE IF NOT EXISTS categories (
--   id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
--   name VARCHAR NOT NULL,
-- );

-- CREATE TABLE IF NOT EXISTS contacs (
--   id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
--   name VARCHAR NOT NULL,
--   email VARCHAR UNIQUE,
--   phone VARCHAR,
--   category_id UUID, 
--   FOREIGN KEY(category_id) REFERENCES categories(id)
-- );