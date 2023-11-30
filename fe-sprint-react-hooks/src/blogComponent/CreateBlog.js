import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from '../component/Footer';
import Input from '../component/Input';
import useInput from "../util/useInput";

const CreateBlog = () => {
  const [title, titleBind] = useInput('');
  const [body, bodyBind] = useInput("");
  const [author, authorBind] = useInput('');

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    /* 등록 버튼을 누르면 게시물이 등록이 되며 home으로 리다이렉트 되어야 합니다. */
    /* 작성한 내용과 useNavigate를 이용하여 작성해보세요. */
    const data = {
      title,
      body,
      author,
      likes: 0
    }

    navigate('/')
    console.log(e.type); //submit
    fetch('http://localhost:3001/blogs/', {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(() => {
        navigate('/');
        window.location.reload();
      })
      .catch(error => console.log(error));
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <Input label="제목" value={title} />
        <Input label="내용" value={body} />
        <label></label>
        <select>
          <option value="kimcoding">김코딩</option>
          <option value="parkhacker">박해커</option>
        </select>
        <button>등록</button>
      </form>
    </div>
  );
}

export default CreateBlog; 