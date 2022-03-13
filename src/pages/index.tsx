import type { NextPage } from 'next';
import Navbar from '../components/nav-bar/Navbar';

const Home: NextPage = () => {
  return (
    <>
      <Navbar isOpen={true} toggle={() => {}} />
    </>
  );
};

export default Home;
