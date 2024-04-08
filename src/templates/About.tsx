import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { AboutContent } from './AboutContent';
import { NavBar } from './NavBar';

const About = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <NavBar></NavBar>
    <AboutContent />
  </div>
);

export { About };
