import { Client } from './client';

describe('Client', () => {
  it('should create an instance', () => {
    expect(new Client(null, null, null, null, null, null)).toBeTruthy();
  });
});
