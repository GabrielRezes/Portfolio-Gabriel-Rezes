import Link from 'next/link';
import { Container } from './styles';

interface ProjectItemPageProps {
  title: string;
  type: string;
  imgUrl: string;
  slug: string;
}

function ProjectItemPage({ title, type, imgUrl, slug }: ProjectItemPageProps) {
  return (
    <Container imgUrl={imgUrl}>
      <Link href={`/projetos/${slug}`}>
        <a>
          <div className="overlay" />
          <section>
            <h1>{title}</h1>
            <h2>{type}</h2>
          </section>
        </a>
      </Link>
    </Container>
  );
}

export default ProjectItemPage;
