module.exports = {
    trailingComma: 'all',
    printWidth: 100,
    tabWidth: 4,
    endOfLine: 'auto',
    singleQuote: true,
    bracketSpacing: true,
    singleAttributePerLine: true,
    importOrder: [
        // react (first) and others libraries
        '^react$',
        '<THIRD_PARTY_MODULES>',
        // components
        '(components)|(.tsx$)',
        // hooks
        '(hooks)|(^use)',
        // helper functions
        'utils',
        // app constants
        'constants',
        // state management logic
        '.(scss|css|sass)$',
        // other files
        '^[./]',
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
};
