import React from 'react';
import ReactDOM from 'react-dom';

let user ={
  firstName:'John',
  lastName:'Smith'
};

function show(user)
{
  if(user)
  {
  return user.firstName + ' ' + user.lastName;
  }
  return " Stranger";
}
const element= <h1> Hello {show()}</h1>
ReactDOM.render(
    element,
  document.getElementById('root')
);

