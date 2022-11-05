module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['import', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:prettier/recommended',
        'prettier',
    ],
    rules: {
        'import/no-named-as-default-member': 'off',
        'function-call-argument-newline': ['error', 'consistent'],
        'import/no-named-as-default': 'off',
        'no-unused-vars': ['off'],
        'comma-dangle': ['error', 'always-multiline'],
    },
};
