module.exports = {
    main: {
        input: './src/services/schema.yaml',
        output: {
            target: './src/services/generated.ts',
            prettier: true,
            override: {
                mutator: {
                    path: './src/lib/api-instance.ts',
                    name: 'createInstance',
                },
            },
        },
    },
}
