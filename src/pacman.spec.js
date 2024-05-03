import { html, fixture, expect } from '@open-wc/testing';
import './theme.css'
import './pacman.js';

describe('MyElement', () => {
  it('pacmans', async () => {
    const pacman = await fixture(html`<pacman-component></pacman-component> `);

    expect(pacman.offsetWidth).to.be.greaterThan(0)
    expect(pacman.offsetHeight).to.be.greaterThan(0)
  });
});
