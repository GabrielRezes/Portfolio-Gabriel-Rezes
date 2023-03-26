import { ItemContainer } from './styles';

export interface ExperienceProps {
  year: string;
  duration: string;
  title: string;
  description: string;
}

function ExperienceItem({
  year,
  duration,
  title,
  description
}: ExperienceProps) {
  return (
    <ItemContainer>
      <div>
        <h1>
          {year} <span className="duration">{duration}</span>
        </h1>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </ItemContainer>
  );
}

export default ExperienceItem;
