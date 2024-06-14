import { validate } from '../formHelper';

describe('formHelper', () => {
  it('validate first name', () => {
    const mockData = {
      firstName: '',
      lastName: 'Test',
      email: 'test@gmail',
    };

    expect(validate(mockData)).toEqual({ email: 'Invalid email address', firstName: 'Required' });
  });

  it('validate email name', () => {
    const mockData = {
      firstName: 'Ola',
      lastName: 'Test',
      email: 'test@gmail.com',
    };

    expect(validate(mockData)).toEqual({});
  });
});
