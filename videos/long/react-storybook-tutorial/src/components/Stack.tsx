import { CSSProperties, PropsWithChildren } from 'react';

type StackProps = PropsWithChildren & {
  orientation: 'horizontal' | 'vertical';
};

export default function Stack({
  children,
  orientation = 'horizontal',
}: StackProps) {
  const orientationStyles: Record<StackProps['orientation'], CSSProperties> = {
    horizontal: {
      display: 'flex',
      flexDirection: 'row',
      gap: '1rem',
    },
    vertical: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
  };

  return <div style={{ ...orientationStyles[orientation] }}>{children}</div>;
}
