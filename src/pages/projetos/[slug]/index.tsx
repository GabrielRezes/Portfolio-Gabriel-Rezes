import BannerProject from '../../../components/BannerProject';
import Header from '../../../components/Header';
import { ProjectContainer } from '../../../styles/pages/ProjectStyles';

function Projects() {
  return (
    <ProjectContainer>
      <Header />
      <BannerProject
        title="Projeto 1"
        type="Website"
        imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd_aOGVvsV8lBrC9PUWCpHrvKAdjatx1yS0A&usqp=CAU"
      />

      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ut.
          Voluptas debitis, saepe veniam deserunt reprehenderit, possimus nihil
          vitae itaque amet dolore et sapiente expedita, repellendus tempore
          quos in eaque?
        </p>

        <button type="button">
          <a href="#">Ver projeto online</a>
        </button>
      </main>
    </ProjectContainer>
  );
}

export default Projects;
