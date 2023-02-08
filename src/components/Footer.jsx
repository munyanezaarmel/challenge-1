import React from 'react';
import { BsArrowLeft, BsArrowRight, TbBrandTiktok, CiInstagram, CiTwitter, TbBrandFacebook } from 'react-icons/all';

const Footer = () => (
  <footer className="footer">

    <div className="footer__progress">
      <span className="footer__progress-item footer__progress-item--active">01</span>
      <span className="footer__progress-item">02</span>
      <span className="footer__progress-item">03</span>
      <span className="footer__progress-item">04</span>
      <span className="footer__progress-item">05</span>
    </div>
    <div className="footer__icon-container">
      <BsArrowLeft className="footer__icon footer__icon--arrow" />
      <BsArrowRight className="footer__icon footer__icon--arrow" />
      

      <div className="footer__social-media-container">
        <TbBrandTiktok className="footer__icon footer__icon--social-media" />
        <CiInstagram className="footer__icon footer__icon--social-media" />
        <CiTwitter className="footer__icon footer__icon--social-media" />
        <TbBrandFacebook className="footer__icon footer__icon--social-media" />
      </div>
    </div>
  </footer>
);

export default Footer;