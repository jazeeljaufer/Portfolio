import './Resume.css';
import Intro from '../../Components/intro/Intro';
import Education from '../../Components/Education/Education';
import Cetify from '../../Components/Cetify/Cetify';

const Resume = () => {
  return (
    <div className="Resume">
      <Intro/>
      <Education />
      <Cetify />
    </div>
  );
};

export default Resume;

