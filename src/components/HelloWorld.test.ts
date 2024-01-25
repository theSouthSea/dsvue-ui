import { render, screen } from '@testing-library/vue';

import HelloWorld from './HelloWorld.vue';

test('it should work', () => {
  render(HelloWorld, {
    props: {
      msg: 'Hello World',
    },
  });
  expect(screen.queryByText('Hello World')).toBeTruthy();
});
