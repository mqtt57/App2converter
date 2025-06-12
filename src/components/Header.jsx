import { useLocation } from 'react-router-dom';

export default function Header() {
  const { pathname } = useLocation();
  let title = 'Accueil';
  switch (pathname) {
    case '/prestations':
      title = 'Prestations';
      break;
    case '/a-propos':
      title = 'À propos';
      break;
    case '/avis':
      title = 'Avis';
      break;
    case '/contact':
      title = 'Contact';
      break;
    case '/faq':
      title = 'FAQ';
      break;
    case '/mentions-legales':
      title = 'Mentions légales';
      break;
    default:
      title = 'Accueil';
  }
  return (
    <header className="top-header">
      <h1>{title}</h1>
    </header>
  );
}
