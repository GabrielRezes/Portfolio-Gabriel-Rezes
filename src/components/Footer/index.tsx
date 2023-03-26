import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/Ai';
import { Container } from './styles';

function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          Voltar ao topo
        </button>

        <section>
          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com/GabrielRezes')}
          />
          <AiOutlineLinkedin
            onClick={() => handleRedirect('www.linkedin.com/in/gabrielrezes')}
          />
        </section>
      </div>
    </Container>
  );
}

export default Footer;