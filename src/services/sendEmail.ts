import axios from 'axios';

export const sendContactEmail = async (
  name: string,
  senderEmail: string,
  message: string
) => {
  const data = {
    name,
    senderEmail,
    message
  };

  try {
    return await axios.post('/api/contact', data);
  } catch (error) {
    return error;
  }
};
