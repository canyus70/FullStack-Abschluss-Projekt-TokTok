import { backendUrl } from "../api";

const fetchPost = async (postId, accessToken, setPost) => {
  try {
    const response = await fetch(`${backendUrl}/api/v1/posts/${postId}`, {
      headers: { authorization: `Bearer ${accessToken}` },
    });

    const { result } = await response.json();

    setPost(result);
  } catch (error) {
    console.log(error);
  }
};

export default fetchPost;
