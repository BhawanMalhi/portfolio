import './skills.scss'

export default function Skills() {
  const skills = [
    { name: 'HTML5', image: 'assets/html5.png' },
    { name: 'CSS3', image: 'assets/css3.png' },
    { name: 'Sass', image: 'assets/sass.png' },
    { name: 'Express JS', image: 'assets/express.png' },
    { name: 'React', image: 'assets/react.png' },
    { name: 'Node', image: 'assets/node.png' },
    { name: 'JavaScript', image: 'assets/js.png' },
    { name: 'MySql', image: 'assets/mySql.png' },
    { name: 'Java', image: 'assets/java.png' },
    { name: 'C#', image: 'assets/c.png' },
    { name: 'AWS', image: 'assets/aws.png' },
    { name: '.Net', image: 'assets/net.png' },
    { name: 'Visual studio', image: 'assets/VS.png' }

   
  ];
  return (
    <section id="skills">
      <h2 className='skills__title'>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <img src={skill.image} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
