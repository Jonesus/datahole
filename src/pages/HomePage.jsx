import React from 'react';
import { Link } from 'react-router-dom';
import potato from '../assets/potato.webp';

export const HomePage = () => (
  <>
    <h1 className="gradient-spin">Datato.me</h1>
    <code>ˈdeɪtə tuː miː</code>

    <Link to="/browse" className="fingerprint">
      <img className="potato" src={potato} alt="" width={300} />
    </Link>
  </>
);
