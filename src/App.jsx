import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import MedicalSpaces from './pages/MedicalSpaces';
import OfficeSpace from './pages/OfficeSpace';
import EventSpace from './pages/EventSpace';
import ChurchSpace from './pages/ChurchSpace';
import Give from './pages/Give';
import Services from './pages/Services';
import NewRoots from './pages/NewRoots';
import Contact from './pages/Contact';
import FriendsOfGaston from './pages/FriendsOfGaston';
import { routes } from './routes';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.about} element={<About />} />
        <Route path={routes.medicalSpaces} element={<MedicalSpaces />} />
        <Route path={routes.officeSpace} element={<OfficeSpace />} />
        <Route path={routes.eventSpace} element={<EventSpace />} />
        <Route path={routes.churchSpace} element={<ChurchSpace />} />
        <Route path={routes.give} element={<Give />} />
        <Route path={routes.services} element={<Services />} />
        <Route path={routes.newRoots} element={<NewRoots />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.friendsOfGaston} element={<FriendsOfGaston />} />
      </Routes>
    </Layout>
  );
}
