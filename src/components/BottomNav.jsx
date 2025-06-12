import { NavLink } from 'react-router-dom';

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/" end>🏠</NavLink>
      <NavLink to="/prestations">💅</NavLink>
      <NavLink to="/avis">⭐</NavLink>
      <NavLink to="/contact">✉️</NavLink>
    </nav>
  );
}
