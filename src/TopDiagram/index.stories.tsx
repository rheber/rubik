import type { Meta, StoryObj } from 'storybook-solidjs';
import { TopDiagram } from ".";

const meta = {
  title: 'Diagrams/TopDiagram',
  component: TopDiagram,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TopDiagram>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    u: [[0,0,0,0,0],[1,0,1,0,1],[0,1,1,1,0],[1,0,1,0,1],[0,0,0,0,0]],
  },
};
