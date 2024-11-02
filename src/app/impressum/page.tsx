import { Metadata } from 'next';
import { generateMetadata } from '../components/Metadata';
import ClientImpressumPage from "./ClientImpressumPage";

export const metadata: Metadata = generateMetadata({
  title: 'Impressum',
  description: 'Rechtliche Informationen und Kontaktdaten der WebDevian GmbH.',
  path: '/impressum'
});

export default function ImpressumPage() {
  return <ClientImpressumPage />;
} 