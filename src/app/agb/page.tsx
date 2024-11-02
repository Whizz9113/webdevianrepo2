import { Metadata } from 'next';
import { generateMetadata } from '../components/Metadata';
import ClientAGBPage from "./ClientAGBPage";

export const metadata: Metadata = generateMetadata({
  title: 'Allgemeine Geschäftsbedingungen',
  description: 'Die allgemeinen Geschäftsbedingungen der WebDevian GmbH für unsere Dienstleistungen und Produkte.',
  path: '/agb'
});

export default function AGBPage() {
  return <ClientAGBPage />;
} 