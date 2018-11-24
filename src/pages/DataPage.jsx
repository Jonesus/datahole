import React from 'react';
import { withRouter } from "react-router-dom";

const Back = ({ history }) => (
  <>
    {/* eslint-disable-next-line*/}
    <a style={{display: 'block', textAlign: 'left', marginBottom: '2rem'}} onClick={history.goBack}>&lt; Go back</a>
  </>
);

const BackButton = withRouter(Back);

const Toggler = ({text, id}) => (
  <div style={{display: 'flex', width: '20rem', marginBottom: '2rem'}}>
    <span style={{fontSize: '1.8rem', width: '12rem', textAlign: 'left'}}>
      {text}
    </span>
    <span className="data-toggler">
      <input type="checkbox" name={id} id={id} />
      <label htmlFor={id}>Load</label>
    </span>
  </div>
)

export const DataPage = () => (
  <>
    <BackButton />
    <Toggler text="Facebook" id="facebook" />
    <Toggler text="Twitter" id="twitter" />
    <Toggler text="Instagram" id="instagram" />
    <Toggler text="Tesla" id="tesla" />
    <Toggler text="Fitbit" id="fitbit" />
    <Toggler text="Tinder" id="tinder" />
    <Toggler text="Grindr" id="grindr" />
  </>
);
