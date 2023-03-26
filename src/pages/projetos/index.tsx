import Head from 'next/head';

import Header from '../../components/Header';
import ProjectItemPage from '../../components/ProjectItemPage';
import { PROJECTS } from '../../components/Projects/constants';

import { ProjectsContainer } from '../../styles/pages/ProjectsStyles';

function Projects() {
  return (
    <ProjectsContainer>
      <Head>
        <title>Projetos | Meu portfólio</title>
        <meta
          name="description"
          content="Está sessão contém algums dos meu trabalhos."
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Está sessão contém algums dos meu trabalhos."
        />
      </Head>

      <Header />
      <main className="container">
        {PROJECTS.map(project => (
          <ProjectItemPage {...project} />
        ))}
      </main>
    </ProjectsContainer>
  );
}

export default Projects;
