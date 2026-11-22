import { render, screen } from '@testing-library/react';
import { clientStories } from '@/content/clientStories';
import { ClientStories } from './ClientStories';

describe('ClientStories', () => {
  it('shows every client story with its name and role', () => {
    render(<ClientStories />);
    expect(screen.getAllByRole('listitem')).toHaveLength(clientStories.stories.length);
    for (const story of clientStories.stories) {
      expect(screen.getByText(story.name)).toBeInTheDocument();
      expect(screen.getByText(story.role)).toBeInTheDocument();
    }
  });
});
