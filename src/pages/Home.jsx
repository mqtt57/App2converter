import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page home">
      <p>Bienvenue dans notre institut App2Converter&nbsp;!</p>
      <img src="https://source.unsplash.com/featured/?salon,cozy" alt="Salon cosy" />
      <Link className="button" to="/prestations">Voir nos prestations</Link>
    </div>
  );
}
