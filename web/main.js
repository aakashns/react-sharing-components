import React from 'react';
import ReactDOM from 'react-dom';

import NameBase from '../shared/Name';
import NameViewWeb from './NameViewWeb';

var Name = NameBase(React);

ReactDOM.render(
  <Name view={NameViewWeb} />,
  document.getElementById('app'));
