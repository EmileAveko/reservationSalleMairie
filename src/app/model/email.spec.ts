import { Email } from './email';

describe('Email', () => {
  it('should create an instance', () => {
    expect(new Email(null, null, null)).toBeTruthy();
  });
});
