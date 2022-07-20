import { helloWorld } from './message.js';

const obj = { bar, baz: { foo: 'qux' } };

const bootstrap = (): void => {
  // eslint-disable-next-line no-console
  console.log(helloWorld());
};
bootstrap();
