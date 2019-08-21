const { env } = require('process');

module.exports = {
    build: [
        'clean:build',
        'sh:build-es2018',
        'sh:build-es5',
        'babel:build'
    ],
    lint: [
        'sh:lint-config',
        'sh:lint-src',
        'sh:lint-test'
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
