// taken from https://github.com/webpack/karma-webpack

// require all modules ending in ".spec.ts" from the
// current directory and all subdirectories
const testsContext = (<any>require).context('.', true, /\.spec\.ts$/);
testsContext.keys().forEach(path => {
    try {
        testsContext(path);
    } catch (err) {
        console.error('[ERROR] WITH SPEC FILE: ', path);
        console.error(err);
    }
});

