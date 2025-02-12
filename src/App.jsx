import './App.css';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from './components/loader/Loader';


const Todoapp = lazy(() => import('./components/pages/Todoapp'));


function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todoapp />} />
      </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
