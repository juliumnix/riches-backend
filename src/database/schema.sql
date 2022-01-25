CREATE DATABASE riches;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


CREATE TABLE IF NOT EXISTS usuarios (
                id_usuario UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
                email VARCHAR NOT NULL,
                senha VARCHAR NOT NULL,
                nome VARCHAR,
                saldo NUMERIC,
                CONSTRAINT usuarios_pk PRIMARY KEY (id_usuario)
);

CREATE TABLE IF NOT EXISTS movimentacao (
                id_usuario UUID DEFAULT uuid_generate_v4(),
                id_movimentacao SERIAL,
                valor NUMERIC NOT NULL,
                entrada BOOLEAN,
                saida BOOLEAN,
                CONSTRAINT movimentacao_pk PRIMARY KEY ( id_movimentacao)
);

CREATE TABLE IF NOT EXISTS metas (
                id_usuario UUID DEFAULT uuid_generate_v4(),
                id_meta SERIAL,
                nome VARCHAR NOT NULL,
                url_image VARCHAR NOT NULL,
                numero_parcela INTEGER NOT NULL,
                realizado NUMERIC,
                valor NUMERIC NOT NULL,
                CONSTRAINT metas_pk PRIMARY KEY (id_meta)
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