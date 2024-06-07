import { sql } from '@vercel/postgres';
import type { NextRequest } from 'next/server';

import cors from '@/pages/api/_lib/cors';

export const config = {
  runtime: 'edge',
};

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

export default async function handler(_req: NextRequest) {
  try {
    const result = await fetchGFMs();
    return await cors(
      _req,
      new Response(JSON.stringify({ result }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }),
    );
  } catch (err) {
    return cors(
      _req,
      new Response(JSON.stringify({ message: 'ERROR' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }),
    );
  }
}
