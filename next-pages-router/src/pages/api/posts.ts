import axiosInstance from '@/lib/axios';
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { title, body } = req.body;

      const response = await axiosInstance.post('/posts', { title, body });

      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create post' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}