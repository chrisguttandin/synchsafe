import { decode, encode } from '../../src/module';

describe('synchsafe', () => {
    for (const [x, y] of [
        [30000, 15024],
        [459008, 114816]
    ]) {
        describe(`decode(${x})`, () => {
            it(`should return ${y}`, () => {
                expect(decode(x)).to.equal(y);
            });
        });

        describe(`encode(${y})`, () => {
            it(`should return ${x}`, () => {
                expect(encode(y)).to.equal(x);
            });
        });
    }
});
