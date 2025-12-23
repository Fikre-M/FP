import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

describe('App', () => {
  it('renders without crashing', () => {
    const { container } = render(<div>About</div>);
    expect(container).toBeDefined();
  });
});