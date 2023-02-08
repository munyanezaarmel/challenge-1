import React from 'react';
import left from "../images/left.png"
import right from "../images/right2.png"
const Body = () => (
  <div className="body">
    <p className='body__paragraph'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit</p>
   <div className='body__left-image_container' >
    <img src={left} className="body__left-image" alt="Left Image" />
    </div>
    <img src={right} className="body__right-image" alt="Right Image" />
    <span className="body__paragraph-big">Lorem ipsum </span>
    <p className="body__paragraph-min-big">dolor sit amet.</p>
      <span className="body__paragraph-small">Lorem ipsum dolor sit amet, consetetur.</span>
</div>
);

export default Body;
