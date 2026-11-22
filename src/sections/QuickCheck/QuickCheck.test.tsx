import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { QuickCheck } from './QuickCheck';

function setup() {
  render(
    <MemoryRouter>
      <QuickCheck />
    </MemoryRouter>,
  );
  return screen.getAllByRole('checkbox');
}

describe('QuickCheck', () => {
  it('never shows a call to action in the result', () => {
    const boxes = setup();
    boxes.forEach((box) => fireEvent.click(box));
    expect(screen.getByText('5 of 5 ticked')).toBeInTheDocument();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('starts with nothing ticked and an empty result', () => {
    const boxes = setup();
    expect(boxes).toHaveLength(5);
    boxes.forEach((box) => expect(box).not.toBeChecked());
    expect(screen.getByText('0 of 5 ticked')).toBeInTheDocument();
    expect(screen.getByText('All clear so far.')).toBeInTheDocument();
  });

  it('updates the result as statements are ticked and unticked', () => {
    const boxes = setup();

    fireEvent.click(boxes[0]);
    expect(boxes[0]).toBeChecked();
    expect(screen.getByText('1 of 5 ticked')).toBeInTheDocument();
    expect(screen.getByText('A small gap.')).toBeInTheDocument();

    fireEvent.click(boxes[1]);
    expect(screen.getByText('Worth a closer look.')).toBeInTheDocument();

    fireEvent.click(boxes[2]);
    fireEvent.click(boxes[3]);
    expect(screen.getByText('It’s costing you clients.')).toBeInTheDocument();

    fireEvent.click(boxes[3]);
    fireEvent.click(boxes[2]);
    fireEvent.click(boxes[1]);
    expect(screen.getByText('A small gap.')).toBeInTheDocument();
  });

  it('ticks a statement when its card text is clicked', () => {
    setup();
    fireEvent.click(screen.getByText(/lists products, not people/i));
    expect(screen.getByText('1 of 5 ticked')).toBeInTheDocument();
  });
});
