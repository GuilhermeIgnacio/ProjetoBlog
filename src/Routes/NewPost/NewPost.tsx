import { blogFetch } from "../../Axios/config";
import "./NewPost.css";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

export const NewPost = () => {
  const navigate = useNavigate();

  const [addTitle, setAddTitle] = useState("");
  const [addBody, setAddBody] = useState("");

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddTitle(e.target.value);
    console.log("Title Enviado");
  };

  const handleBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAddBody(e.target.value);
    console.log("Body enviado");
  };

  const createPost = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (addTitle && addBody) {
      await blogFetch.post("/posts", {
        title: addTitle,
        body: addBody,
        userId: 1,
      });
      alert("Post Criado Com Sucesso!");
      navigate("/");
    } else {
      alert("Campos incompletos");
    }
  };

  return (
    <div className="new-post">
      <h2>Inserir Novo Post</h2>
      <form
        onSubmit={(e) => {
          createPost(e);
        }}
      >
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            name="title"
            id="title"
            value={addTitle}
            placeholder="Título do Post"
            onChange={handleTitleChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="body">Conteúdo:</label>
          <textarea
            name="body"
            id="body"
            value={addBody}
            placeholder="Conteúdo do Post"
            onChange={handleBodyChange}
          ></textarea>
        </div>

        <div className="form-control">
          <input type="submit" value="Criar Post" className="btn" />
        </div>
      </form>
    </div>
  );
};
