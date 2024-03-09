import Search from 'components/searchpage/Search';
import Title from 'components/_common/Title';
import Banner from 'components/_common/Banner';
import banner from '../assets/images/banner.png';
import { useMediaQuery } from 'react-responsive';
const SearchPage = () => {
  const isMobile: boolean = useMediaQuery({
    query: '(max-width:802px)',
  });
  const ment = "'다시'가 선별한\n 시니어 전문가들을 만나보세요!";
  return (
    <div className="container">
      {isMobile ? (
        <>
          <Title label="AI 인재 추천" />
          <Banner
            image={banner}
            content={ment}
            subContent="AI 기술을 이용한 맞춤형 인재 추천 서비스"
            styleClass="banner-search"
          />
        </>
      ) : (
        <Banner
          image={banner}
          title="AI 인재 추천"
          content="다시가 선별한 시니어 전문가들을 만나보세요!"
          subContent="AI 기술을 이용한 맞춤형 인재 추천 서비스"
          styleClass="banner-search"
        />
      )}
      <Search />
    </div>
  );
};

export default SearchPage;
