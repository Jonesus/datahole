import React from 'react';
import { Link } from 'react-router-dom';
import {
  ReactComponent as Fingerprint
} from '../assets/fingerprint-simple-outline.svg';

export const HomePage = () => (
  <>
    <h1 className="gradient-spin">Datahole</h1>

    <Link to="/browse" className="fingerprint">
      <Fingerprint width="5rem" />
    </Link>
  </>
);
