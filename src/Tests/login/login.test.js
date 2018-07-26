import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../../components/login/login-component';

test('handleChange ', () => {
    const handleChange = Login.handleChange;
  expect(handleChange).toBeFalsy()
});


// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Login />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

