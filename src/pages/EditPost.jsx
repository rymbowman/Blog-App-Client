import { Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { getPost, updatePost } from "../services/postService";
import { useNavigate, useParams } from "react-router-dom";
import PrimaryButton from "../components/Features/PrimaryButton";
import PrimaryForm from "../components/Features/PrimaryForm";
import Input from "../components/Features/Input";
import PrimaryContainer from "../components/Features/PrimaryContainer";
import { AuthContext } from "../context/AuthContext";
import CategorySelect from "../components/Post/CategorySelect";
import LoadingSpinner from "../components/Features/LoadingSpinner";

const EditPost = () => {
  const [post, setPost] = useState([]);
  const [category, setCategory] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [categoryError, setCategoryError] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPost = async () => {
      const postResponse = await getPost(id);
      if (postResponse) {
        setPost(postResponse);
        setCategory(postResponse.category);
        setTitle(postResponse.title);
        setImage(postResponse.image);
        setDescription(postResponse.description);
        setContent(postResponse.content);
      }
    };
    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!category || (category === "newCat" && !newCategory)) {
      setCategoryError(true);
      return;
    }
    setCategoryError(false);
    const updatedCategory = category === "newCat" ? newCategory : category;
    const updatedPost = {
      category: updatedCategory,
      title,
      image,
      description,
      content,
      wordCount: content.split(/\s+/).filter((word) => word.length > 0).length,
      user_id: user.id,
    };
    await updatePost(id, updatedPost);
    navigate(`/home/${user.id}`);
  };

  if (!post) {
    return <LoadingSpinner loadingMessage={"Cannot find post"} />;
  }

  return (
    <PrimaryContainer>
      <Typography variant="h2">Edit Post</Typography>
      <PrimaryForm componentType="form" formAction={handleSubmit}>
        <CategorySelect
          currentCat={category}
          userId={user.id}
          onCategoryChange={setCategory}
          onCreateCategoryChange={setNewCategory}
        />
        {categoryError && (
          <Typography variant="body2" color="error">
            Please select a category
          </Typography>
        )}
        <Input
          value={title}
          label="Title"
          maxRows={4}
          action={(e) => setTitle(e.target.value)}
        />
        <Input
          value={image}
          label="Image URL"
          maxRows={4}
          action={(e) => setImage(e.target.value)}
        />
        <Input
          value={description}
          label="Description"
          maxRows={4}
          action={(e) => setDescription(e.target.value)}
        />
        <Input
          value={content}
          label="Main Content"
          rows={10}
          action={(e) => setContent(e.target.value)}
        />
        <PrimaryButton buttonText="Save" buttonType="submit" />
      </PrimaryForm>
    </PrimaryContainer>
  );
};

export default EditPost;
