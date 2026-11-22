import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Button, ButtonLink } from './Button';

describe('Button', () => {
  it('renders a button with its label', () => {
    render(<Button>Get in touch</Button>);
    expect(screen.getByRole('button', { name: 'Get in touch' })).toHaveAttribute('type', 'button');
  });

  it('renders a link when using ButtonLink', () => {
    render(
      <MemoryRouter>
        <ButtonLink to="/contact" withAvatar>
          Book a call
        </ButtonLink>
      </MemoryRouter>,
    );
    expect(screen.getByRole('link', { name: 'Book a call' })).toHaveAttribute('href', '/contact');
  });
});
