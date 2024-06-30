import "./about.scss";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="about__info">
        <h1 className="about__info--title">About Me</h1>
        <div className="about__info--wrapper">
          <div className="left">
           <img src="assets/girlStar.png"/>
          </div>
          <div className="right">
          <p className="about__info--text">
          My interest in software engineering began during high school, at a
          time when coding was starting to make a significant impact. I enrolled
          in an extracurricular class to learn basic Java, and, as many can
          relate, my first program was the classic "Hello, World!" printed to
          the console.
        </p>
        <p className="about__info--text">
          Besides coding and programming, I am also deeply interested in
          astronomy, physics, and math. These subjects captivate me with their
          ability to explain the fundamental workings of the universe. I enjoy
          exploring the mysteries of the cosmos, understanding the principles
          that govern physical phenomena, and solving complex mathematical
          problems.
        </p>
        <p className="about__info--text">
          Additionally, I have a keen interest in politics and historical
          events. I do enjoy exploring the intricacies of political systems,
          understanding the impact of policies, and studying significant
          historical moments that have influenced contemporary life.
         
        </p>
          </div>
        </div>
       
      </div>
    </div>
  );
}
