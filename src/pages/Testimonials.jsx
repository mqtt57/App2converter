const testimonials = [
  { name: 'Emma', text: 'Un super moment détente, je recommande !' },
  { name: 'Léa', text: 'Professionnelles et à l\'écoute.' },
  { name: 'Sarah', text: 'Résultat impeccable, j\'adore !' }
];

export default function Testimonials() {
  return (
    <div className="page testimonials">
      {testimonials.map((t, i) => (
        <div className="testimonial" key={i}>
          <p className="text">"{t.text}"</p>
          <p className="author">- {t.name}</p>
        </div>
      ))}
    </div>
  );
}
