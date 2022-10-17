import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FreelaForm from './pages/FreelaForm';
import FreelaList from './pages/FreelaList';

import Landing from './pages/landing/index';

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/"  element={<Landing />} />
            <Route path="seja-um-freela"  element={<FreelaForm />} />
            <Route path="/encontre-um-freela"  element={<FreelaList />} />
        </Routes>
    </BrowserRouter>
  );
}

export default Router;