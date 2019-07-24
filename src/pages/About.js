import React from 'react';

import Colors from '../component/HOC/Renkler';

const AboutPage = () => {
  return(
    <div className="container">
      <h4 className="center">Hakkımızda Sayfası</h4>
      <p>Hakkımızda Sayfası İçerik</p>
    </div>
  );
}

export default Colors(AboutPage);