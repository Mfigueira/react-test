import { screen, render } from '@testing-library/react';
import { Async } from './Async';

describe('Async component', () => {
  test('renders post after fetch', async () => {
    // mocked API call - replace the native fetch
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'First Post' }],
    });
    render(<Async />);

    // Array of <li> elements
    const listItemElements = await screen.findAllByRole('listitem');

    expect(listItemElements).not.toHaveLength(0);
  });
});
