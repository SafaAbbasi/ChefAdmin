import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/dashboard';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Dashboard />} />
    </Routes>
  );
};
