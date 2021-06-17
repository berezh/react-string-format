import { format } from '..';

test('localization format number', () => {
    expect(format('')).toBe('');
    expect(format('a', 1)).toBe('a');
    expect(format('a{0}b', 1)).toBe('a1b');
    expect(format('{0}', 1)).toBe(`1`);
    expect(format('{0}b', 1)).toBe('1b');
    expect(format('a{0}b{0}', 1)).toBe('a1b1');
});

test('many params', () => {
    expect(format('a{0}b{1}c{2}d{3}e{4}', 'a0', 'b1', 'c2', 'd3', 'e4')).toBe('aa0bb1cc2dd3ee4');
});

// test('localization format entity', () => {
//     expect(LocalizationUtil.format('a{0}b', <div></div>)).toMatchObject(['a', <div></div>, 'b']);
// });
