import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import { PROJECTS } from './constants';
import ProjectItem from './ProjectItem';
import { Container } from './styles';

function Projects() {
  return (
    <Container>
      <SectionTitle title="Últimos projetos" />

      <section>
        {PROJECTS.map(project => (
          <ProjectItem {...project} />
        ))}
      </section>

      <button type="button">
        <Link href="/projetos">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}

export default Projects;
