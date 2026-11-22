import { render, screen, within } from '@testing-library/react';
import { comparison } from '@/content/comparison';
import { Comparison } from './Comparison';

describe('Comparison', () => {
  it('shows a row for every topic with both answers', () => {
    render(<Comparison />);
    const table = screen.getByRole('table');
    for (const row of comparison.rows) {
      const header = within(table).getByRole('rowheader', { name: row.topic });
      const tr = header.closest('tr') as HTMLElement;
      expect(within(tr).getByText(row.others)).toBeInTheDocument();
      expect(within(tr).getByText(row.us.strong)).toBeInTheDocument();
    }
  });
});
