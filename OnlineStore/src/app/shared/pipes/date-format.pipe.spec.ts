import { DateFormatPipe } from './date-format.pipe';

describe('DateFormatPipe', () => {
  it('create an instance', () => {
    const pipe = new DateFormatPipe();
    expect(pipe).toBeTruthy();
  });
  it('should transform correctly', () => {
    const pipe = new DateFormatPipe();
    expect(pipe.transform('2017-08-30 21:33:32.327') === '30/08/2017/09:33 PM').toBe(true);
  });
});
