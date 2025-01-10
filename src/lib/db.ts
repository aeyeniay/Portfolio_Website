import { Pool } from 'pg'

declare global {
  var pool: Pool | undefined
}

const pool = global.pool || new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
})

if (process.env.NODE_ENV !== 'production') global.pool = pool

export default pool 