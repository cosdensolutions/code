import {
  useCreatePostMutation,
  useGetPostsQuery,
} from "../state/posts/postsApiSlice";

const PostsList = () => {
  const {
    data: posts,
    isLoading,
    isError,
  } = useGetPostsQuery({
    limit: 1,
    offset: 0,
  });

  const [createPostMutation, { isLoading: isCreatingPost }] =
    useCreatePostMutation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <div>
      <button
        onClick={() => {
          const post = { title: "My new post" };
          createPostMutation(post);
        }}
      >
        {isCreatingPost ? "Creating..." : "Create Post"}
      </button>
      <ul>
        {posts?.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default PostsList;
