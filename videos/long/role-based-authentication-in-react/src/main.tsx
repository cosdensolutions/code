import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthProvider from './components/AuthProvider';
import ProtectedRoute from './components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/protected',
    element: (
      <ProtectedRoute allowedRoles={['admin', 'viewer']}>
        <div>Protected content</div>
      </ProtectedRoute>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);
