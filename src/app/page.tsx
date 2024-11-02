import { Metadata } from 'next';
import { generateMetadata } from './components/Metadata';
import ClientPage from "@/app/ClientPage";

export const metadata: Metadata = generateMetadata({
  title: 'Innovative Webentwicklung',
  description: 'WebDevian GmbH - Ihre Experten für moderne Webentwicklung, E-Commerce und digitale Lösungen in der Schweiz.',
  path: '/'
});

export default function Page() {
  return <ClientPage />;
}
