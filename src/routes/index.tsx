import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Identifier from '../pages/Identifier';
import VideoViewer from '../pages/VideoViewer';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Identifier} />
        <Route path="/video" exact component={VideoViewer} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
