const services = [
  {
    title: 'Beauté des mains',
    desc: 'Soin complet',
    price: '30€',
    image: 'https://source.unsplash.com/featured/?manicure'
  },
  {
    title: 'Beauté du regard',
    desc: 'Rehaussement',
    price: '40€',
    image: 'https://source.unsplash.com/featured/?eye,beauty'
  },
  {
    title: 'Make-Up',
    desc: 'Maquillage pro',
    price: '50€',
    image: 'https://source.unsplash.com/featured/?makeup'
  },
  {
    title: 'LPG',
    desc: 'Séance minceur',
    price: '35€',
    image: 'https://source.unsplash.com/featured/?spa'
  }
];

export default function Services() {
  return (
    <div className="page services">
      {services.map((s) => (
        <div className="service" key={s.title}>
          <img src={s.image} alt={s.title} />
          <h3>{s.title}</h3>
          <p>{s.desc} - {s.price}</p>
        </div>
      ))}
    </div>
  );
}
