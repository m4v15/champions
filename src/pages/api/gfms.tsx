import { sql } from '@vercel/postgres';
import type { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';

async function fetchGFMs() {
  try {
    const data = await sql`
      SELECT gfms.title, gfms.imageurl, gfms.url, gfms.progress
      FROM gfms`;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the gfms');
  }
}

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  await NextCors(_req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  try {
    const result = await fetchGFMs();
    res.status(200).json({ result });
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' });
  }
}
