import { memo } from 'react';

const PostsTab = () => {
  // Log once. The actual slowdown is inside SlowPost.
  console.log(
    '[ARTIFICIALLY SLOW] Rendering 500 <SlowPost />',
  );

  let items = [];
  for (let i = 0; i < 2500; i++) {
    items.push(<SlowPost key={i} index={i} />);
  }
  return <ul className='items'>{items}</ul>;
};

const SlowPost = ({ index }: { index: number }) => {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return <li className='item'>Post #{index + 1}</li>;
};

export default memo(PostsTab);
