
  import React from 'react';
  import { storiesOf } from '@storybook/react';

  import { Toggle } from '../../src/components/Toggle';

  import Header from '../base/header';
  import Props from '../base/props';
  import Preview from '../base/preview';

  const doc = require('./doc.json');

  const stories = storiesOf('Toggle', module);

  stories.add('Toggle', ({ props }) => {
    return (
      <div style={{ padding: 20, background: 'white' }}>
        <Header {...props} component={Toggle} doc={doc} />
        <Preview {...props} component={Toggle} doc={doc} />
        <Props {...props} component={Toggle} doc={doc} />
      </div>);
  });
  