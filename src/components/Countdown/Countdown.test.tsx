import { describe, it, expect } from 'vitest';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';

import Countdown from './Countdown';

describe('Renders component correctly', async () => {

  const { container } = render(
    <Countdown/>
  );

  const title = container.querySelector('h1');
  
  it('Should have an h1 tag', async () => {  
    expect(title).not.toBeNull();
  });

});