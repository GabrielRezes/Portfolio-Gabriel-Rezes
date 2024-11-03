/* eslint-disable react/jsx-no-comment-textnodes */
import { EXPERTISE_LIST } from '../Experiences/constants';
import SectionTitle from '../SectionTitle';
import { Container, ExpertiseItem, List } from './styles';

function Expertise() {
  return (
    <Container data-aos="fade-up">
      <SectionTitle title="Expertises" description="stacks" />

      <section>
        <List>
          {EXPERTISE_LIST.map(item => (
            <ExpertiseItem key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </ExpertiseItem>
          ))}
        </List>
      </section>
    </Container>
  );
}

export default Expertise;
