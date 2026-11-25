import { testRunner } from '@cairul/pdk/runner';
import adapter from './run.mjs';
import { jest, junit, testPlugin } from '@cairul/pdk/reports';

const reports = testPlugin('vitest.passed', { junit, json: jest });

export default testRunner(reports, 'vitest.run', adapter);
