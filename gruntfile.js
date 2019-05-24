module.exports = grunt => {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        ts: {
            ts_ms: {
                src: ['src/**/*.ts', '!node_modules/**', '!dist/**/*'],
                outDir: 'dist',
                options: {
                    rootDir: 'src',
                    module: 'commonjs',
                    target: 'es6',
                    experimentalDecorators: true,
                    sourceMap: false
                },
            }
        }
    })

    grunt.loadNpmTasks('grunt-ts');


    grunt.registerTask('compile', ['ts:ts_ms']);
}