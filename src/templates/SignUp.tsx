import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { NavBar } from './NavBar';

const SignUp = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <NavBar></NavBar>
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSdQBwxbU97VXa9Phi4ACSrQMfIJNp6ZFPfQvhAjJ2J1ekoMJg/viewform?embedded=true"
      width="100%"
      height="900vh"
    >
      Loading…
    </iframe>
  </div>
);

export { SignUp };
