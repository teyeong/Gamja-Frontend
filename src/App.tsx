import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './scss/main.scss';
import Layout from './components/_common/layout/Layout';
import { RecoilRoot } from 'recoil';

import MainPage from './pages/MainPage';
import SignInPage from 'pages/SignInPage';
import SignUpPage from 'pages/SignUpPage';
import MyPage from 'pages/MyPage';
import Verification from 'components/signuppage/verification/Verification';
import UserType from 'components/signuppage/usertype/UserType';
import Complete from 'components/signuppage/complete/Complete';
import SeniorForm from 'components/signuppage/form/SeniorForm';
import CompanyForm from 'components/signuppage/form/CompanyForm';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Layout>
          <Routes>
            {/* 메인 페이지 */}
            <Route path="/" element={<MainPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />}>
              <Route path="verification" element={<Verification />} />
              <Route path="user-type" element={<UserType />} />
              <Route path="senior/form" element={<SeniorForm />} />
              <Route path="company/form" element={<CompanyForm />} />
              <Route path="complete" element={<Complete />} />
            </Route>
            <Route path="/my-page" element={<MyPage />} />
          </Routes>
        </Layout>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
