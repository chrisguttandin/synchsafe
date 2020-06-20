/**
 * This functions turns a synchronisation-saved integer into regular one.
 */
export const decode = (synchsafed: number) => {
    let mask = 0x7f000000;
    let unsynchsafed = 0;

    while (mask !== 0) {
        unsynchsafed >>= 1; // tslint:disable-line no-bitwise
        unsynchsafed |= synchsafed & mask; // tslint:disable-line no-bitwise
        mask >>= 8; // tslint:disable-line no-bitwise
    }

    return unsynchsafed;
};

/**
 * This functions turns a regular integer into synchronisation-saved one.
 */
export const encode = (unsynchsafed: number) => {
    let mask = 0x7f;
    let synchsafed;
    let unsynchsafedRest = unsynchsafed;

    // tslint:disable-next-line:no-bitwise
    while ((mask ^ 0x7fffffff) !== 0) {
        synchsafed = unsynchsafedRest & ~mask; // tslint:disable-line no-bitwise
        synchsafed <<= 1; // tslint:disable-line no-bitwise
        synchsafed |= unsynchsafedRest & mask; // tslint:disable-line no-bitwise
        mask = ((mask + 1) << 8) - 1; // tslint:disable-line no-bitwise
        unsynchsafedRest = synchsafed;
    }

    return synchsafed;
};
