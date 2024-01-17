import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/code-highlight/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/spotlight/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/nprogress/styles.css';
import './App.css';
import React from 'react';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { NavigationProgress } from '@mantine/nprogress';
import { Notifications } from '@mantine/notifications';

import 'src/common/prepareLibs';
import AppRoutes from './routes';
import enableChii from './helpers/enableChii';
import { IS_DEV, USE_CHII } from 'src/common/config';

IS_DEV && USE_CHII && enableChii();

export default function App() {
  return (
    <React.StrictMode>
      <MantineProvider>
        <ModalsProvider>
          <NavigationProgress />
          <Notifications />
          <AppRoutes />
        </ModalsProvider>
      </MantineProvider>
    </React.StrictMode>
  );
}
