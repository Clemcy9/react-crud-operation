import React, { useEffect } from "react";
import Cardcontainer from "../components/Cardcontainer";
import Card from "..components/Card";

function AllPostPage() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <Cardcontainer>
        <Card />
        <Card />
      </Cardcontainer>
    </div>
  );
}

export default AllPostPage;
