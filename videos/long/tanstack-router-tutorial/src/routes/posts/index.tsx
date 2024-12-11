import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/posts/')({
  component: Posts,
  validateSearch: (search) => {
    return {
      q: (search.q as string) || '',
    };
  },
  loaderDeps: ({ search: { q } }) => ({ q }),
  loader: async ({ deps: { q } }) => {
    const posts = ['post1', 'post2', 'post3'];
    return {
      posts: posts.filter((post) => post === q),
    };
  },
});

function Posts() {
  const { posts } = Route.useLoaderData();
  const { q } = Route.useSearch();

  return (
    <div>
      {posts.map((post) => (
        <div key={post}>
          <Link
            to="/posts/$postId"
            params={{
              postId: post,
            }}
          >
            {post}
          </Link>
        </div>
      ))}
    </div>
  );
}
