import SpaceDetailPage from '../components/SpaceDetailPage';
import { medicalSpaces } from './spaceContent';

export default function MedicalSpaces() {
  return <SpaceDetailPage {...medicalSpaces} />;
}
