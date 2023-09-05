import { FC } from 'react';

import { ExampleComponent } from '../components/ExampleComponent/ExampleComponent';

export const App: FC = () => {
  return (
    <ExampleComponent title='Lorem ipsum'>
      <p>Content</p>
    </ExampleComponent>
  );
};
