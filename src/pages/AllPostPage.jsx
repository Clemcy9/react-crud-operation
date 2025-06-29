import React, { useEffect, useState } from "react";
import Cardcontainer from "../components/Cardcontainer";
import Card from "../components/Card";

function AllPostPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((result) => {
        let temp = result["products"].slice(0, 5);
        setPosts(temp);
        console.log("this is temp", temp);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    console.log("posts updated", posts);
  }, [posts]);
  return (
    <div>
      <Cardcontainer>
        {posts.map((post) => (
          <Card
            key={post.id}
            image={post.thumbnail}
            title={post.title}
            body={post.description}
          />
        ))}{" "}
      </Cardcontainer>
    </div>
  );
}

export default AllPostPage;
