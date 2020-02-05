const { env } = require('process');

module.exports = {
    build: [
        'clean:build',
        'sh:build-es2019',
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
                'sh:test-unit-browser'
            ]
            : (env.TARGET === 'node')
                ? [
                    'sh:test-unit-node'
                ]
                : [
                    'sh:test-unit-browser',
                    'sh:test-unit-node'
                ]
    ]
};
