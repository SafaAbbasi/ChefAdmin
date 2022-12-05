import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthRoutes } from './authRoutes';
import { AppRoutes } from './appRoutes';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/app/*" element={<AppRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
