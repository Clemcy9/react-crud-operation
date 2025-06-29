import React from "react";

function Card(props) {
  return (
    <div className="mt-5 w-72 flex flex-col justify-center items-center rounded bg-gray-300 ">
      <div className="border mt-5 ">
        <img src={props.image} alt="" />
      </div>

      <div className="">
        <h2 className="p-4">{props.title}</h2>
        <p className=" p-4"> {props.body}</p>
      </div>
    </div>
  );
}

export default Card;
