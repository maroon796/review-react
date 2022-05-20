import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  console.log(people);
  const { id, image, job, name, text } = people[index];
  return <h2>review component</h2>;
};

export default Review;
