import { useRouter } from 'next/router';
import BannerProject from '../../../components/BannerProject';
import Header from '../../../components/Header';
import { ProjectContainer } from '../../../styles/pages/ProjectStyles';
import { PROJECTS } from '../../../components/Projects/constants';

function Projects() {
  const router = useRouter();
  const { slug } = router.query;

  const project = PROJECTS.find(project => project.slug === slug);

  console.log(slug);
  return (
    <ProjectContainer>
      <Header />
      <BannerProject
        title={project.title}
        type={project.type}
        imgUrl={project.imgUrl}
      />

      <main>
        <p>
          <h3>Descrição:</h3> <p>{project.details.description}</p>
          <br />
          <br />
          <h3>Tecnologias utilizadas:</h3>
          <p>{project.details.techs}</p>
        </p>

        <button type="button">
          <a href={project.url} target="_blank">
            Ver projeto online
          </a>
        </button>
      </main>
    </ProjectContainer>
  );
}

export default Projects;
