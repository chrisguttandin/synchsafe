const { env } = require('process');

module.exports = {
    build: [
        'clean:build',
        'sh:build-es2018',
        'sh:build-es5',
        'babel:build'
    ],
    lint: [
        'eslint',
        // @todo Use grunt-lint again when it support the type-check option.
        'sh:lint'
    ],
    test: [
        'build',
        ...([ 'chrome', 'firefox' ].includes(env.TARGET))
            ? [
                'karma:unit'
            ]
            : (env.TARGET === 'node')
                ? [
                    'sh:test-unit'
                ]
                : [
                    'karma:unit',
                    'sh:test-unit'
                ]
    ]
};
