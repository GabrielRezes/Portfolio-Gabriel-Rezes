/* eslint-disable react/jsx-no-comment-textnodes */
import { EXPERTISE_LIST } from '../Experiences/constants';
import { CERTIFICATIONS } from '../Projects/constants';
import SectionTitle from '../SectionTitle';
import { Container } from './styles';

function Certifications() {
  return (
    <Container data-aos="fade-up">
      <SectionTitle title="Certificações" description="e cursos" />

      <section>
        {CERTIFICATIONS.map(certification => (
          <article key={certification.title}>
            <h3>{certification.title}</h3>
            <p>{certification.institution}</p>
            <p>{certification.date}</p>
          </article>
        ))}
      </section>
    </Container>
  );
}

export default Certifications;
