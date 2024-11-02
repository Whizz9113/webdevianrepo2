import { Metadata } from 'next';
import { generateMetadata } from '../components/Metadata';
import ClientDatenschutzPage from "./ClientDatenschutzPage";

export const metadata: Metadata = generateMetadata({
  title: 'Datenschutzerklärung',
  description: 'Informationen zum Datenschutz und zur Verarbeitung personenbezogener Daten bei der WebDevian GmbH.',
  path: '/datenschutz'
});

export default function DatenschutzPage() {
  return <ClientDatenschutzPage />;
} 