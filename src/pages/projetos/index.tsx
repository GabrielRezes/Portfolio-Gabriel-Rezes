import Header from '../../components/Header';
import ProjectItemPage from '../../components/ProjectItemPage';
import { PROJECTS } from '../../components/Projects/constants';
import { ProjectsContainer } from '../../styles/pages/ProjectsStyles';

function Projects() {
  return (
    <ProjectsContainer>
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
