import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import PageStub from './components/PageStub';
import Home from './pages/Home';
import { routes } from './routes';
import { stubPageContent } from './pages/stubPages';

const stubRoutes = [
  { path: routes.about, content: stubPageContent.About },
  { path: routes.medicalSpaces, content: stubPageContent.MedicalSpaces },
  { path: routes.officeSpace, content: stubPageContent.OfficeSpace },
  { path: routes.eventSpace, content: stubPageContent.EventSpace },
  { path: routes.churchSpace, content: stubPageContent.ChurchSpace },
  { path: routes.give, content: stubPageContent.Give },
  { path: routes.services, content: stubPageContent.Services },
  { path: routes.newRoots, content: stubPageContent.NewRoots },
  { path: routes.contact, content: stubPageContent.Contact },
  { path: routes.friendsOfGaston, content: stubPageContent.FriendsOfGaston },
];

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        {stubRoutes.map(({ path, content }) => (
          <Route key={path} path={path} element={<PageStub {...content} />} />
        ))}
      </Routes>
    </Layout>
  );
}
