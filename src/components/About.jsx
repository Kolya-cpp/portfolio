import "../styles/About.css";


function About() {
  return (
    <section className="about" id="about">

      <h2>Про мене</h2>

      <div className="about-content">

        <div className="about-image">
          👨‍💻
        </div>

        <div className="about-text">

          <p>
            Мене звати <strong>Коля</strong>.
            Я студент Київського фахового коледжу електронних приладів
            та майбутній Software Developer.
          </p>

          <p>
            Найбільше мене цікавить розробка сучасних вебзастосунків,
            програмного забезпечення та баз даних.
          </p>

          <p>
            Постійно вдосконалюю свої навички,
            працюю над власними проєктами та вивчаю нові технології.
          </p>

        </div>

      </div>

    </section>
  );
}

export default About;