import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [year, setYear] = useState(null);

  useEffect(() => {
    const curYear = new Date().getFullYear();
    setYear(curYear);
  }, []);

  return (
    <footer>
      <p>&copy; Kyle Lynch {year}</p>
    </footer>
  );
};

export default Footer;
