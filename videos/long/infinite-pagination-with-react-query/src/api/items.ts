const items = Array.from({ length: 100 }).map((_, i) => ({
  id: i,
  name: `Item ${i}`,
}));

type Item = (typeof items)[0];

const LIMIT = 10;

export function fetchItems({ pageParam }: { pageParam: number }): Promise<{
  data: Item[];
  currentPage: number;
  nextPage: number | null;
}> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: items.slice(pageParam, pageParam + LIMIT),
        currentPage: pageParam,
        nextPage: pageParam + LIMIT < items.length ? pageParam + LIMIT : null,
      });
    }, 1000);
  });
}
