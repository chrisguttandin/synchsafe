'use strict';

/**
 * This functions turns a synchronisation-saved integer into regular one.
 */
module.exports.decode = function decode(synchsafed) {
    var unsynchsafed = 0,
        mask = 0x7F000000;

    while (mask) {
        /* jshint bitwise: false */
        unsynchsafed >>= 1;
        unsynchsafed |= synchsafed & mask;
        mask >>= 8;
        /* jshint bitwise: true */
    }

    return unsynchsafed;
};

/**
 * This functions turns a regular integer into synchronisation-saved one.
 */
module.exports.encode = function encode(unsynchsafed) {
    // @todo return synchsafed;
};
