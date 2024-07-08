import React from 'react';
import { createRoot } from 'react-dom/client';
import ProjectManagementApp from '@/components/ProjectManagementApp';
import '@/styles/globals.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProjectManagementApp />
  </React.StrictMode>
);