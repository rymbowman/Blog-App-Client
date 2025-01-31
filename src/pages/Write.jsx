import { Typography } from "@mui/material";
import { useContext, useState } from "react";
import { createPost } from "../services/postService";
import { useNavigate } from "react-router-dom";
import CategorySelect from "../components/Post/CategorySelect";
import PostForm from "../components/Post/PostForm";
import { AuthContext } from "../context/AuthContext";
import PrimaryButton from "../components/Features/PrimaryButton";
import PrimaryForm from "../components/Features/PrimaryForm";
import PrimaryContainer from "../components/Features/PrimaryContainer";

const Write = () => {
  const [category, setCategory] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalCategory = category === "newCat" ? newCategory : category;
    const newPost = {
      category: finalCategory,
      title,
      image,
      description,
      content,
      wordCount: content.split(/\s+/).filter((word) => word.length > 0).length,
      user_id: user.id,
    };
    if (
      finalCategory === "" ||
      title === "" ||
      image === "" ||
      description === "" ||
      content === ""
    ) {
      setError("Please fill out all fields.");
      return;
    }
    await createPost(newPost);
    setCategory("");
    setNewCategory("");
    setTitle("");
    setImage("");
    setDescription("");
    setContent("");
    navigate(`/profile/${user.id}`);
  };

  return (
    <PrimaryContainer>
      <PrimaryForm component="form">
        <Typography variant="h2">Share Something</Typography>
        <CategorySelect
          userId={user.id}
          currentCat={category}
          onCategoryChange={setCategory}
          onCreateCategoryChange={setNewCategory}
        />
        <PostForm
          title={title}
          image={image}
          description={description}
          content={content}
          onTitleChange={(e) => setTitle(e.target.value)}
          onImageChange={(e) => setImage(e.target.value)}
          onDescriptionChange={(e) => setDescription(e.target.value)}
          onContentChange={(e) => setContent(e.target.value)}
        />
        <PrimaryButton buttonText="Publish" action={handleSubmit} />
        {error && <Typography variant="h6">{error}</Typography>}
      </PrimaryForm>
    </PrimaryContainer>
  );
};

export default Write;
