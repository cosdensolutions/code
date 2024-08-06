import { useEffect } from 'react';

export function useKeyDown(
  key: KeyboardEvent['key'],
  fn: () => void,
  deps: any[] = [],
) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === key) {
        fn();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, deps);
}
