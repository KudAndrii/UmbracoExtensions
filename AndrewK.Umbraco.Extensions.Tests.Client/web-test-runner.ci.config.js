import baseConfig from './web-test-runner.config.js';
import { junitReporter } from '@web/test-runner-junit-reporter';

export default {
    ...baseConfig,
    reporters: [
        'default',
        junitReporter({ outputPath: 'test-results.xml' }),
    ],
};