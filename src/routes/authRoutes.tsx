import { Route, Routes } from 'react-router-dom';
import Login from '../pages/auth';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Login />} />
    </Routes>
  );
};
