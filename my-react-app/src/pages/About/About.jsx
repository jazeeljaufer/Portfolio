import './About.css';
import Aboutme from '../../Components/aboutme/Aboutme';
import Work from '../../Components/Work/Work';
import Skill from '../../Components/skill/Skill';
import Worktogether from '../../Components/worktogether/Worktogether';

const About = () => {
  return (
    <div className="About">
      <Aboutme /> 
      <Work />
      <Skill />
      <Worktogether/>
    </div>
  );
};

export default About;

