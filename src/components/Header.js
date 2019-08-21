import React from 'react';

const Form = () => {
  return (
    <div>
      <p>test</p>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">&#9776; React-Bootstrap
          <img src={logo} style={{width:100, marginTop: -7}} />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
    </div>
   
  );
};

export default Form;