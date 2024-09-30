import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'

import * as schema from './schema'

const sql = neon(
  'postgresql://smart:XG2lUvtM6zrK@ep-shrill-thunder-a5hfc0w7.us-east-2.aws.neon.tech/beat-cancer?sslmode=require',
)
export const db = drizzle(sql, { schema })
