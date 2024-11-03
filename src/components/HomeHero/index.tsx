/* eslint-disable react/jsx-no-comment-textnodes */
import {
  Container,
  TextContainer,
  InfosContainer,
  CodeItem,
  Image
} from './styles';
import picture from '../../assets/01-no-background.png';

function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <Image>
        <img src={picture} alt="Minha foto" />
      </Image>

      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Gabriel</h2>
        </TextContainer>

        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            {/* <span className="comment">//Minha apresentação</span> */}
            <span className="purple">Pessoal</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Gabriel,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Rezes</span>
            </div>
            {'\u007B'}
          </CodeItem>

          <CodeItem data-aos="zoom-in">
            {/* <span className="comment">//Expertise</span> */}
            <span className="purple">Profissional</span> {'\u007B'}
            <div>
              Função: <span className="blue">Dev Front-End,</span>
            </div>
            <div>
              Stack: <span className="blue">Next, React, Angular</span>
            </div>
            {'\u007B'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
