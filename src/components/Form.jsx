import React, { useState } from "react";

function Form() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const inputValues = {
      title: title,
      body: body,
      userId: userId,
    };
    // console.log(inputValues);

    // sending data to backend via fetch api
    fetch("https://jsonplaceholder.typicode.com/posts", {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(inputValues),
      method: "POST",
    })
      .then((response) => response.json())
      .then((json) => console.log("this is result", json))
      .catch((error) => console.log("error occured", error));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="body"
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <input
          type="text"
          placeholder="userId"
          name="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button>submit</button>
      </form>
    </div>
  );
}

export default Form;
