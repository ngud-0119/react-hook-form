import { Refine } from '@refinedev/core'
import { RefineKbar, RefineKbarProvider } from '@refinedev/kbar'

import { notificationProvider, RefineSnackbarProvider, ThemedLayoutV2 } from '@refinedev/mui'

import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import routerBindings, { DocumentTitleHandler, UnsavedChangesNotifier } from '@refinedev/react-router-v6'
import dataProvider from '@refinedev/simple-rest'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { ColorModeContextProvider } from './contexts/color-mode'
import Create from './Pages/create'

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <CssBaseline />
          <GlobalStyles styles={{ html: { WebkitFontSmoothing: 'auto' } }} />
          <RefineSnackbarProvider>
            <Refine
              dataProvider={dataProvider('https://api.fake-rest.refine.dev')}
              notificationProvider={notificationProvider}
              resources={[
                {
                  name: 'posts',
                  list: '/',
                },
              ]}
              routerProvider={routerBindings}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
              }}>
              <Routes>
                <Route
                  element={
                    <ThemedLayoutV2>
                      <Outlet />
                    </ThemedLayoutV2>
                  }>
                  <Route index element={<Create />} />
                </Route>
              </Routes>
              <RefineKbar />
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
          </RefineSnackbarProvider>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  )
}

export default App