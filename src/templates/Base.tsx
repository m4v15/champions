import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { AboutContent } from './AboutContent';
import { Hero } from './Hero';
import { NavBar } from './NavBar';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <NavBar />
    <Hero />
    <AboutContent />
  </div>
);

export { Base };
