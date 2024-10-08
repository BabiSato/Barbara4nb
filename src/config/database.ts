import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://postgres:btJovJPGKywUbRFMMYFYpYWDBiOHQFDI@autorack.proxy.rlwy.net:15648/railway';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;