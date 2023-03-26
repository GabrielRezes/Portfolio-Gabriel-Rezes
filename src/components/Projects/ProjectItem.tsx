import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { ProjectContainer } from './styles';

export interface ProjectItemProps {
  imgUrl: string;
  title: string;
  type: string;
  slug: string;
}

function ProjectItem({ imgUrl, title, type, slug }: ProjectItemProps) {
  return (
    <ProjectContainer imgUrl={imgUrl} data-aos="fade-up">
      <section>
        <div className="overlay" />
        <div className="text">
          <h1>{title}</h1>
          <h2>- {type}</h2>
        </div>
      </section>

      <button type="button">
        <Link href={`/projetos/${slug}`}>
          <a>
            Ver mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </ProjectContainer>
  );
}

export default ProjectItem;
