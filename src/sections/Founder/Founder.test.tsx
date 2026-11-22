import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { founder } from '@/content/founder';
import { Founder } from './Founder';

describe('Founder', () => {
  it('introduces the founder with a photo and call to action', () => {
    render(
      <MemoryRouter>
        <Founder />
      </MemoryRouter>,
    );
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(founder.title.emphasis);
    expect(screen.getByRole('img', { name: founder.name })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: new RegExp(founder.cta.label) })).toHaveAttribute(
      'href',
      founder.cta.href,
    );
  });
});
