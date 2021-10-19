import React, { useState } from 'react';

import Footer from '../Footer/Footer';
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator';


const Review = () => {
  return(
  <div >
    <ProgressIndicator completed="50" />
    <Footer page={'review'}  ></Footer>
  </div>
  );
};


export default Review;
