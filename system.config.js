System.config({
    transpiler: 'typescript',
    typescriptOptions: {
        emitDecoratorMetadata: true
    },
    paths: {
        typescript: './node_modules/typescript/lib/typescript.js'
    },
    packages: {
        app: {
            defaultExtension: 'ts'
        }
    }
});
System.import('app/main')
      .then(null, console.error.bind(console));
