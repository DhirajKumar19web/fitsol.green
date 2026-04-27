import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />

      {/* 404 Page */}
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;