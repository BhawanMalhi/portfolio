import React from "react";
import "./works.scss";
export default function Works() {
  const workData = [
    {
      id: "1",
      title: "Investment Advisior",
      company:"Scotiabank",
      timeline: "(Aug, 2023 - Jan, 2024)",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste recusandae quam quibusdam facilis! Quod, necessitatibus odio explicabo quae ma",
      src: "assets/scotia.png",
    },
    {
        id: "2",
        title: "Credit Analyst",
        company:"Scotiabank",
        timeline: "(July, 2022 - July, 2023)",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste recusandae quam quibusdam facilis! Quod, necessitatibus odio explicabo quae ma",
        src: "assets/scotia.png",
      },
      {
        id: "3",
        title: "Team Supervisior",
        company:"Mary Browns",
        timeline: "(June, 2022 - Sept, 2023)",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste recusandae quam quibusdam facilis! Quod, necessitatibus odio explicabo quae ma",
        src: "assets/mary.png",
      },
  ];
  return (
    <div className="works" id="works">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <h2>
                  Investment Advisior<span>(Aug, 2023 - Jan, 2024)</span>
                </h2>

                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
                  recusandae quam quibusdam facilis! Quod, necessitatibus odio
                  explicabo quae magnam itaque ullam earum vel. Commodi, enim
                  error! Assumenda earum ad blanditiis?
                </p>
              </div>
            </div>
            <div className="right">
              <img src="assets/scotia.png" alt="Scotiabank Logo" />
            </div>
          </div>
        </div>
      </div>
      <img src="assets/arrow.png" alt="" className="arrow left" />
      <img src="assets/arrow.png" alt="" className="arrow right" />
    </div>
  );
}
