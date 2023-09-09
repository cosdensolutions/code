import { useTransition } from 'react';

import Button, {
  ButtonProps,
} from '@/components/ui/Button/Button';

interface TabButtonProps extends ButtonProps {}

const TabButton = ({
  onClick,
  ...rest
}: TabButtonProps) => {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      onClick?.();
    });
  };

  if (isPending) {
    return <p>Loading...</p>;
  }

  return <Button {...rest} onClick={handleClick} />;
};

export default TabButton;
