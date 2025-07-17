import { esbuildPlugin } from '@web/dev-server-esbuild';
import { playwrightLauncher } from '@web/test-runner-playwright';

export default {
    files: 'src/**/*.test.ts',
    nodeResolve: true,
    plugins: [
        esbuildPlugin({
            ts: true,
            target: 'es2022',
            tsconfig: './tsconfig.json',
            define: {
                'process.env.NODE_ENV': '"test"'
            }
        }),
    ],
    browsers: [
        playwrightLauncher({ product: 'chromium' }),
        playwrightLauncher({ product: 'firefox' }),
        playwrightLauncher({ product: 'webkit' }),
    ],
    testFramework: {
        config: {
            timeout: 5000,
        },
    },
};