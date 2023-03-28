import { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line consistent-return
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json({ message: 'Deu certo!' });
  } catch (err) {
    return res.json({
      error: true,
      message: err.message
    });
  }
};
