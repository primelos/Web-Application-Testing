import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react'
// import  {render, fireEvent, getByTestId, cleanup} from '@testing-library/react';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);

});
test('renders without crashing', () => {
  const {getByText} = rtl.render(<App/>);
  getByText(/hit/i);
})
test('renders app without error', () => {
  rtl.render(<App />)
})
test ('render correctly', () => {
 const {getByText} = (/this/i) 
})

 fireEvent.click(getByText('button'))
