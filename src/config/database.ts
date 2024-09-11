import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://ads_v68k_user:R356qYmWQ91QFDIMpWrSt4j0zpN7b6Yr@dpg-cr75tbq3esus738aomt0-a.oregon-postgres.render.com/ads_v68k';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;