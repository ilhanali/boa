
  import React from 'react';
  import { BTreeView } from '../../src/components/treeview/b-treeview';

  import PropsViewer from '../base/props-viewer';
  import Playground from '../base/playground';
  import ComponentInfo from '../base/info';

  const data = require('../../src/components/treeview/b-treeview/docs/content.json');
  const defaults = require('../../src/components/treeview/b-treeview/assets/data/defaults.json');

  export default () => {
    return (
      <div style={{ padding: 20, background: 'white' }}>
        <ComponentInfo component={BTreeView} content={data} defaults={defaults} />
        <Playground component={BTreeView} content={data} defaults={defaults} />
        <PropsViewer component={BTreeView} content={data} defaults={defaults} />
      </div>);
  };