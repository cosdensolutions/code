import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';

import Stack from '@/components/Stack';

type StoryProps = ComponentProps<typeof Stack> & {
  numberOfChildren: number;
};

const meta: Meta<StoryProps> = {
  component: Stack,
  tags: ['autodocs'],
  argTypes: {
    numberOfChildren: {
      options: [1, 5, 10],
      control: {
        type: 'select',
      },
    },
    orientation: {
      options: ['horizontal', 'vertical'],
      control: {
        type: 'select',
      },
    },
  },
  args: {
    numberOfChildren: 5,
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: ({ numberOfChildren, ...args }) => {
    return <Stack {...args}>{createChildren(numberOfChildren)}</Stack>;
  },
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: ({ numberOfChildren, ...args }) => {
    return <Stack {...args}>{createChildren(numberOfChildren)}</Stack>;
  },
};

function createChildren(numberOfChildren: number) {
  return Array(numberOfChildren)
    .fill(null)
    .map((_, index) => {
      return (
        <div
          key={index}
          style={{ width: 100, height: 100, backgroundColor: 'red' }}
        />
      );
    });
}
