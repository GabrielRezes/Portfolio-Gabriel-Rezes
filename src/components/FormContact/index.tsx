import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container } from './styles';

function FormContact() {
  return (
    <Container>
      <SectionTitle
        title={
          <>
            Precisa dos
            <br />
            meus serviços?
          </>
        }
        // description={
        //   <>
        //     Preencha o formulário abaixo que
        //     <br />
        //     irei retornar em breve!
        //   </>
        // }
        description={
          <>
            Entre em contato commigo
            <br />
            pelo WhatsApp
          </>
        }
      />

      <Form />
    </Container>
  );
}

export default FormContact;
