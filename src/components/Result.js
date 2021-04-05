import React from "react";

const Result = ({img_link, name, answer, wrong_answer, wrong_name}) => (
    <div className="result">
        <p>{name} does ({answer}), not {wrong_name} ({wrong_answer}).</p>
        <img className="result_img" src={img_link}></img>
    </div>
);

export default Result;