'use client';

import { useCookies } from 'next-client-cookies';
import { SomeOtherDeepComponent } from './some/other/deep/component';
import { useMemo } from 'react';

const MyComponent = () => {
  const cookies = useCookies();

  useMemo(() => {
    // I need to set the cookie in my main client component
    cookies.set('my-other-cookie', 'my-other-value')
  }, [])

  return (
    <section>
      <p>My cookie value: {cookies.get('my-cookie')}</p>

      <button onClick={() => cookies.set('my-cookie', 'my-value')}>
        Set cookie
      </button>
      {' | '}
      <button onClick={() => cookies.remove('my-cookie')}>Delete cookie</button>

      <hr/>

      Some other deep component: <br /><SomeOtherDeepComponent/>
    </section>
  );
};

// eslint-disable-next-line import/no-default-export
export default MyComponent;
