import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { GITHUB_URL } from '@/config';
import About from '@/pages/about/About';


describe('About component', () => {
  test('renders headings and text', () => {
    render(<About />);
    
    const heading = screen.getByRole('heading', { name: /about/i });
    expect(heading).toBeInTheDocument();
  });

  test('renders links with correct hrefs', () => {
    render(<About />);

    const githubLink = screen.getByRole('link', { name: /Github/i });
    expect(githubLink).toHaveAttribute('href', GITHUB_URL);
  });
});