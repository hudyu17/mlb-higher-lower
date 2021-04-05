import React from "react";

const Result = ({img_link, name, wrong_name}) => (
    <div className="result">
        <p>{name} does, not {wrong_name} 😢</p>
        <img className="result_img" src={img_link}></img>
    </div>
);

export default Result;