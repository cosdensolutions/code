const BASE_URL = "https://jsonplaceholder.typicode.com";

interface Post {
  id: number;
  title: string;
}

export default async function FetchExample3() {
  const response = await fetch(`${BASE_URL}/posts`);
  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  const posts = (await response.json()) as Post[];

  return (
    <div className="tutorial">
      <h1 className="mb-4 text-2xl">Data Fething in React</h1>
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}
