import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <h1>
        Привіт, я <span>Коля</span> 👋
      </h1>

      <h2>Майбутній Software Developer</h2>

      <p>
        Створюю сучасні вебзастосунки та програмне забезпечення.
        Постійно навчаюсь, розвиваюсь та працюю над власними проєктами.
      </p>

      <div className="hero-buttons">
        <button>Мої проєкти</button>
        <button className="outline">Зв'язатися</button>
      </div>
    </section>
  );
}

export default Hero;