import { Navbar, Hero, Features, About, FAQs } from './components';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <MainContent />
    </Router>
  );
};

const MainContent = () => {
  const location = useLocation();
  const { pathname } = location;

  // Determine the background class based on the current path
  let backgroundClass;
  switch (pathname) {
    case '/':
      backgroundClass = 'bg-hero';
      break;
    case '/hero':
      backgroundClass = 'bg-hero';
      break;
    case '/features':
      backgroundClass = 'bg-features';
      break;
    case '/about-us':
        backgroundClass = 'bg-about';
        break;
    case '/faqs':
      backgroundClass = 'bg-faqs';
      break;
    default:
      backgroundClass = 'bg-[#FF907A]';
  }

  return (
    <div className={`w-full overflow-hidden ${backgroundClass}`}>
      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/hero" element={<Hero />} />
            <Route path="/features" element={<Features />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/faqs" element={<FAQs />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App
