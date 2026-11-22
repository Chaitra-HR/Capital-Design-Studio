import { fireEvent, render, screen } from '@testing-library/react';
import { faq } from '@/content/faq';
import { Faq } from './Faq';

describe('Faq', () => {
  it('opens one answer at a time', () => {
    render(<Faq />);
    const [first, second] = faq.items;
    const firstButton = screen.getByRole('button', { name: first.question });
    const secondButton = screen.getByRole('button', { name: second.question });

    expect(firstButton).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText(first.answer)).toBeVisible();

    fireEvent.click(secondButton);
    expect(secondButton).toHaveAttribute('aria-expanded', 'true');
    expect(firstButton).toHaveAttribute('aria-expanded', 'false');
    expect(screen.getByText(second.answer)).toBeVisible();

    fireEvent.click(secondButton);
    expect(secondButton).toHaveAttribute('aria-expanded', 'false');
  });
});
