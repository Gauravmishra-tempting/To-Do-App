import './App.css';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from './components/loader/Loader.jsx';

const Todoapp = lazy(() => import('./components/pages/Todoapp'));


function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todoapp />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
