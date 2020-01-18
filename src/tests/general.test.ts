import { format } from '../';

test('localization format number', () => {
    expect(format('')).toBe('');
    expect(format('a', 1)).toBe('a');
    expect(format('a{0}b', 1)).toBe('a1b');
    expect(format('{0}', 1)).toBe(`1`);
    expect(format('{0}b', 1)).toBe('1b');
    expect(format('a{0}b{0}', 1)).toBe('a1b1');
});

// test('localization format entity', () => {
//     expect(LocalizationUtil.format('a{0}b', <div></div>)).toMatchObject(['a', <div></div>, 'b']);
// });
