import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import RecorderPage from './pages/RecorderPage';
import UploadFilePage from './pages/UploadFilePage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<MainLayout />}>
          <Route index path={'/'} element={<HomePage />} />
        </Route>

        <Route path={'/streaming'} element={<RecorderPage />} />
        <Route path={'/upload'} element={<UploadFilePage />} />
      </Routes>
    </div>
  );
}

export default App;
