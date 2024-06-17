import React from "react";
import he from "he";

const handleSubmit = (e) => {
  e.preventDefault();
};

export default function Questions(props) {
  let styles = [];
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <legend className="question">{props.question.question}</legend>
        <div className="question-container">
          {props.question.allAnswers.map((answer, index) => {
            console.log(answer);
            if (props.gameFinished) {
              if (answer === props.question.correctAnswer) {
                styles = {
                  backgroundColor: "#94D7A2",
                  border: "1px solid #94D7A2",
                };
              } else if (
                answer !== props.question.correctAnswer &&
                props.question.selectedAnswer === answer
              ) {
                styles = {
                  backgroundColor: "#F8BCBC",
                  border: "1px solid #F8BCBC",
                };
              } else {
                styles = {
                  opacity: 0.5,
                };
              }
            }
            return (
              <div key={index} className="options--cont">
                <input
                  type="radio"
                  name={props.question.id}
                  value={answer}
                  id={`${props.question.id}-${index}`}
                  checked={props.question.selectedAnswer === answer}
                  onChange={(e) =>
                    props.handleChange(e.target.value, props.question.id)
                  }
                  disabled={props.gameFinished}
                />
                <label htmlFor={`${props.question.id}-${index}`} style={styles}>
                  {he.decode(answer)}
                </label>
                <br />
              </div>
            );
          })}
        </div>
      </form>
    </main>
  );
}
