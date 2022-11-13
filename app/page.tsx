import Header from '../components/Header';
import HeaderMobile from '../components/HeaderMobile';
import Hero from '../components/Hero';
import HeroMobile from '../components/HeroMobile';
import { H2 } from '../components/H2';
import Service from '../components/Service';
import Article from '../components/Article';
import Footer from '../components/Footer';

import services from '../data/services.json';
import articles from '../data/articles.json';


interface Service {
  title: string;
  image: string;
  text: string;
}

interface ArticleBlog {
  title: string;
  author: string;
  image: string;
  imageAlt: string;
  text: string;
}

const Home = () => {
  const bankServices: Service[] = services.service;
  const blogArticles: ArticleBlog[] = articles.article;

	return (
		<>
			<Header />
      <HeaderMobile />
      <Hero />
      <HeroMobile />

      { /* Banking services container */ }
      <div className="flex flex-col bg-lightGrayishBlue float-left py-[96px] px-[24px] sm:px-[165px]">
        <div className="max-w-[635px]">
          <H2 text="Why choose Easybank?" />
          <p className="text-grayishBlue tracking-[-0.28125px] text-[18px] leading-[28px] font-[400]">
            We leverage Open Banking to turn your bank account into your financial hub.
            Control your finances like never before.
          </p>
        </div>

        { /* Banking services list */ }
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[30px] mt-[72px]">
          {
            bankServices.map((service, index) => {
              return (
                <Service
                  key={index}
                  image={service.image}
                  title={service.title}
                  text={service.text}
                />
              )
            })
          }
        </div>
      </div>

      { /* Banking blog articles container */ }
      <div className="flex flex-col float-left py-[96px] px-[24px] sm:px-[165px] bg-veryLightGray">
        <H2 text="Latest Article" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[30px]">
          {
            blogArticles.map((article, index) => {
              return (
                <Article
                  key={index}
                  image={article.image}
                  imageAlt={article.imageAlt}
                  author={article.author}
                  title={article.title}
                  text={article.text}
                />
              )
            })
          }
        </div>
      </div>

      { /* Footer container */ }
      <Footer />
		</>
	)
}

export default Home;