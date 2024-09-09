import React, { useState, useEffect } from 'react';
import '../styling/BackToTopButton.css'; // Create a CSS file to style the button (optional)

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to show/hide the button based on the scroll position
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Smoothly scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showButton && (
        <button className="back-to-top-button" onClick={scrollToTop}>
          ⬆️
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
