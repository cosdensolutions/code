import CountProvider, { useCountStore } from './CountProvider';

type AppProps = {
  initialCount: number;
};

export default function App({ initialCount = 5 }: AppProps) {
  return (
    <CountProvider initialCount={initialCount}>
      <Component />
    </CountProvider>
  );
}

function Component() {
  const count = useCountStore((state) => state.count);
  console.log(count);
  return null;
}
