import { join } from 'node:path';
import {
  list,
  locations,
  lineLocations,
  option,
  repeat,
  report,
  requireExclusive,
  selectors,
  value,
} from '@cairul/plugin-kit/runner';
import { junit } from '@cairul/plugin-kit/reports';

export default {
  command: ['vitest'],
  select: selectors({ files: list, locations: lineLocations, namePattern: value, projects: list }),
  build(select, temp) {
    requireExclusive(select.files, select.locations);
    return {
      args: [
        'run',
        '--reporter=junit',
        '--outputFile',
        join(temp, 'result.xml'),
        ...repeat('--project', select.projects),
        ...option('--testNamePattern', select.namePattern),
        ...(select.files ?? locations(select.locations)),
      ],
      read: report('result.xml', junit),
    };
  },
};
