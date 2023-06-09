import { FormEvent, useRef, useState } from 'react';
import toast from 'react-hot-toast';

import { sendContactEmail } from '../../services/sendEmail';
import theme from '../../styles/theme';
import { FormContainer, Input, TextArea } from './styles';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);

  const form = useRef();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (loading) return;

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast('Preencha todos os campos para enviar sua mensagem!', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });

      return;
    }

    try {
      setLoading(true);
      await sendContactEmail(form.current);

      setName('');
      setEmail('');
      setMessage('');

      toast('Mensagem enviada com sucesso!', {
        style: {
          background: theme.secondary,
          color: '#fff'
        }
      });
    } catch (err) {
      toast('Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente!', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });

      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    // eslint-disable-next-line react/jsx-no-bind
    <FormContainer ref={form} data-aos="fade-up" onSubmit={handleSubmit}>
      <Input
        value={name}
        onChange={({ target }) => setName(target.value)}
        placeholder="Nome"
        name="name"
      />

      <Input
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        type="email"
        placeholder="E-mail"
        name="email"
      />
      <TextArea
        value={message}
        onChange={({ target }) => setMessage(target.value)}
        placeholder="Mensagem"
        name="message"
      />

      <button type="submit" disabled={loading}>
        ENVIAR
      </button>
    </FormContainer>
  );
}

export default Form;
