import pool from "../config/database";

const createUsersTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      ALTER TABLE users
      ADD COLUMN passwordhash VARCHAR(255) NOT NULL;
    `;
    await client.query(queryText);
    console.log('Tabela "users" criada com sucesso!');
  } catch (err) {
    console.error("Erro ao criar tabela:", err);
  } finally {
    client.release();
  }
};

createUsersTable().then(() => process.exit(0));
