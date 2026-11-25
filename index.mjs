import { testRunner } from '@cairul/plugin-kit/runner';
import adapter from './run.mjs';
import { jest, junit, testPlugin } from '@cairul/plugin-kit/reports';

const reports = testPlugin('vitest.passed', { junit, json: jest });

export default testRunner(reports, 'vitest.run', adapter);
