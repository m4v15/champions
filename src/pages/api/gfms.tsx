import { sql } from '@vercel/postgres';
import Cors from 'cors';
import type { NextApiRequest, NextApiResponse } from 'next';

const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function,
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

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
  await runMiddleware(_req, res, cors);

  try {
    const result = await fetchGFMs();
    res.status(200).json({ result });
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' });
  }
}
