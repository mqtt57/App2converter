export default function Contact() {
  return (
    <div className="page contact">
      <form>
        <label>Prénom
          <input type="text" name="name" required />
        </label>
        <label>Email
          <input type="email" name="email" required />
        </label>
        <label>Message
          <textarea name="message" required></textarea>
        </label>
        <button type="submit">Envoyer</button>
      </form>
      <div className="socials">
        <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
      </div>
    </div>
  );
}
