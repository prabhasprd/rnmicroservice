import React from 'react';
import {Federated} from '@callstack/repack/client';

export const MicroApplication = React.lazy(() =>
  Federated.importModule('MicroApp', './App'),
);

export const MicroApplicationHome = React.lazy(() =>
  Federated.importModule('MicroApp', './HomeScreen'),
);
