import { decode, encode } from '../../src/module';

describe('synchsafe', () => {
    describe('decode()', () => {
        it('should decode a number', () => {
            expect(decode(30000)).to.equal(15024);
        });
    });

    describe('encode()', () => {
        it('should encode a number', () => {
            expect(encode(15024)).to.equal(30000);
        });
    });
});
