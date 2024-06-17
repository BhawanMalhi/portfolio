import "./about.scss";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="about__info">
        <h1 className="about__info--title">About Me</h1>
        <p className="about__info--text">
          My career in software engineering began during high school, at a time
          when coding was starting to make a significant impact. I enrolled in
          an extracurricular class to learn basic Java, and, as many can relate,
          my first program was the classic "Hello, World!" printed to the
          console. 
        </p>
        <p className="about__info--text">
          Following high school, I pursued higher education in Canada, majoring
          in software engineering. During my studies, I gained expertise in web
          development and became proficient in various programming languages,
          including Java, C#, and C++.
        </p>
        <p className="about__info--text">
          Upon graduation, I accumulated substantial experience in customer
          service, particularly within the financial sector, where I worked in
          both investment and credit departments. This experience honed my
          problem-solving skills and my ability to communicate effectively with
          clients.
        </p>
        <p className="about__info--text">
          Recently, I encountered a wonderful opportunity at BrainStation to
          further advance my web development skills. This program has provided
          me with in-depth knowledge of JavaScript, React, SASS, and other
          modern web technologies.
        </p>
        <p className="about__info--text">
          I am eager to leverage this experience in the software development
          field and make a meaningful impact through my work. 
          <i className="fa-solid fa-pen-fancy"></i>
         
        </p>
      </div>
    </div>
  );
}
