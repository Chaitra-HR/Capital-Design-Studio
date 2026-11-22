import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { finalCta } from '@/content/finalCta';
import { FinalCta } from './FinalCta';

describe('FinalCta', () => {
  it('shows the headline and links the button to the booking page', () => {
    render(
      <MemoryRouter>
        <FinalCta />
      </MemoryRouter>,
    );
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(finalCta.title.emphasis);
    expect(screen.getByRole('link', { name: /Book a clarity call/ })).toHaveAttribute(
      'href',
      finalCta.cta.href,
    );
  });
});
