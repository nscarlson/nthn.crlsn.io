import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import Editor from 'components/editor/editor';

export default [
  {
    path: '/editor',
    component: Editor,
    indexRoute: {
        component: Editor
    },
    childRoutes: [
      {
        path: '*',
        component: Editor
      }
    ]
  }
];
