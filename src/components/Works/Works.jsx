import React from "react";
import { useState } from "react";
import "./works.scss";
export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const workData = [
    {
      id: "1",
      title: "Investment Advisior",
      company: "Scotiabank",
      timeline: "(Aug, 2023 - Jan, 2024)",
      description:
        "I created plans to reach specific financial goals for clients by conducting financial analysis and due diligence, and compiling detailed reports. Additionally, I provided investment advisory services, ensuring client satisfaction and trust. My work involved applying an understanding of company valuation, tax planning, and long-term equity strategies. I also managed and maintained strong relationships with clients, demonstrating excellent problem-solving skills and analytical thinking throughout.",
      src: "assets/scotia.png",
    },
    {
      id: "2",
      title: "Credit Analyst",
      company: "Scotiabank",
      timeline: "(July, 2022 - July, 2023)",
      description:
        "I demonstrated success in a target-based performance environment by consistently surpassing goals. Leveraging my technology expertise, I introduced clients to mobile banking solutions. I assisted customers with day-to-day transactions, showcasing strong people-centric skills. Additionally, I was trained in revolving credit and line of credit services. My strong communication and team collaboration skills were evident throughout my interactions with clients and colleagues.",
      src: "assets/scotia.png",
    },
    {
      id: "3",
      title: "Team Supervisior",
      company: "Mary Browns",
      timeline: "(June, 2022 - Sept, 2023)",
      description:
        "I managed and assisted with new partner training while handling daily customer queries and complaints. During scheduled shifts, I executed store operations, organizing opening and closing duties as assigned. By constantly evaluating the environment and customers for cues, I anticipated customer and store needs. I also communicated essential information to the manager, ensuring the team could respond effectively as necessary.",
      src: "assets/mary.png",
    },
  ];
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(
          currentSlide < workData.length - 1 ? currentSlide + 1 : 0
        );
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {workData.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h1>{d.company}</h1>
                  <h2>
                    {d.title}
                    <span>{d.timeline}</span>
                  </h2>

                  <p>{d.description}</p>
                </div>
              </div>
              <div className="right">
                <img src={d.src} alt={d.company} />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}


