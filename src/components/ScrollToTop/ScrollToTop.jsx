import { useState, useEffect } from 'react';
import { ToTopBtn } from './ScrollToTop.styled';
import { ToTopIcon } from './ScrollToTop.styled';

const ScrollToTop = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 600) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    showBtn && (
      <ToTopBtn>
        <ToTopIcon onClick={goToTop} />
      </ToTopBtn>
    )
  );
};

export default ScrollToTop;
