import SectionTitle from '../SectionTitle';
import { EXPERIENCE_JOBS } from './constants';
import ExperienceItem from './ExperienceItem';
import { Container } from './styles';

function Experiences() {
  return (
    <Container>
      <SectionTitle title="04 Anos" description="de experiência" />

      <section>
        {EXPERIENCE_JOBS.map(job => (
          <ExperienceItem key={job.title} {...job} />
        ))}
      </section>
    </Container>
  );
}

export default Experiences;
