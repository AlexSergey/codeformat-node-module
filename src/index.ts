import { hideBin } from 'yargs/helpers';
import yargs from 'yargs/yargs';

import { helloWorld } from './message.js';

const { argv } = yargs(hideBin(process.argv));
const bootstrap = (): void => {
  // eslint-disable-next-line no-console
  console.log(helloWorld(), argv);
};
bootstrap();
