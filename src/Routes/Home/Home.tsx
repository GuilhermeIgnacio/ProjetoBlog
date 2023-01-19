import { blogFetch } from "../../Axios/config";
import { useState, useEffect, MouseEventHandler } from "react";
import { Posts } from "../Posts";
import "./Home.css";

export const Home = () => {
  const [posts, setPosts] = useState<Posts[]>([]);

  const getPosts = async () => {
    try {
      let response = await blogFetch.get("/posts");

      let data = response.data;
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="home">
      <h1>Últimos Posts</h1>
      {posts.length === 0 ? (
        <p className="loading">Carregando...</p>
      ) : (
        posts.map((post) => (
          <div className="posts" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </div>
  );
};
