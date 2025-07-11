import { debounce } from '../../algorithms/09-07-2025/custom-debounce';

jest.useFakeTimers();

describe('debounce', () => {
  it('calls the function once after bursts of calls', () => {
    const fn = jest.fn();
    const debounced = debounce(fn, 200);

    debounced(); // t = 0
    jest.advanceTimersByTime(50); // t = 50
    debounced(); // reset
    jest.advanceTimersByTime(50); // t = 100
    debounced(); // reset

    expect(fn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(200); // t = 300
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('passes args and preserves this-context', () => {
    const ctx = { id: 42 };
    const spy = jest.fn(function (this: typeof ctx, a: number, b: number) {
      return { self: this, sum: a + b };
    });

    const debounced = debounce(spy, 100);

    debounced.call(ctx, 3, 4);
    jest.runAllTimers();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.results[0].value).toEqual({ self: ctx, sum: 7 });
  });

  it('does not call fn if time has not yet elapsed', () => {
    const fn = jest.fn();
    const debounced = debounce(fn, 300);

    debounced();
    jest.advanceTimersByTime(299);

    expect(fn).not.toHaveBeenCalled();
  });

  it('resets timer on every new call', () => {
    const fn = jest.fn();
    const debounced = debounce(fn, 100);

    debounced();
    jest.advanceTimersByTime(90);
    debounced();
    jest.advanceTimersByTime(90);

    expect(fn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(20);
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
