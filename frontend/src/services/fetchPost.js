const fetchPost = async (postId, accessToken, setPost) => {
  try {
    const response = await fetch(`/api/v1/posts/${postId}`, {
      headers: { authorization: `Bearer ${accessToken}` },
    });

    const { result } = await response.json();

    setPost(result);
  } catch (error) {
    console.log(error);
  }
};

export default fetchPost;
