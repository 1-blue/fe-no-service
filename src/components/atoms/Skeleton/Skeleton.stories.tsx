import type { Meta, StoryObj } from "@storybook/react";

import Skeleton from "./index";

const meta = {
  title: "Atoms/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
    componentSubtitle: "공용 스켈레톤 컴포넌트",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    className: "w-10 h-10 rounded-full",
  },
};
export const List: Story = {
  decorators: [
    () => (
      <section className="flex flex-col gap-4 w-60">
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <Skeleton key={i} className="w-full h-6" />
          ))}
      </section>
    ),
  ],
};