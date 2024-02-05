import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './scss/main.scss';
import MainPage from './pages/MainPage';
import Layout from './components/_common/layout/Layout';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Layout>
          <Routes>
            {/* 메인 페이지 */}
            <Route path="/" element={<MainPage />} />
          </Routes>
        </Layout>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
