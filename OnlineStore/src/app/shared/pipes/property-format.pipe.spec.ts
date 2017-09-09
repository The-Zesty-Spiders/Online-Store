import { PropertyFormatPipe } from './property-format.pipe';

describe('PropertyFormatPipe', () => {
  it('create an instance', () => {
    const pipe = new PropertyFormatPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return empty value', () => {
    const pipe = new PropertyFormatPipe();
    expect(pipe.transform('') === '-').toBe(true);
  });
  it('should kepp value', () => {
    const pipe = new PropertyFormatPipe();
    expect(pipe.transform('test') === 'test').toBe(true);
  });
});
