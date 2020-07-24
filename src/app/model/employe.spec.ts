import { Employe } from './employe';

describe('Employe', () => {
  it('should create an instance', () => {
    expect(new Employe(null, null)).toBeTruthy();
  });
});
