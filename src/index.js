import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import App from './App';
import Register from './components/register';
import Login from './components/loginPage';
import  FormikDemoComponent from './components/formicDemoComponent';
import FormikDemo2Component from './components/formikDemo2Components';
import FormValidationComponent from './components/formikvslidation';
import YapValidationCopmonent from './components/YapValefationComponent';
import ValidateComponent from './components/ValidateComponent';
import LifecycleComponent from './components/LifeCycleHooks';
import CycleDemocomponent from './components/CycledemoComponent';
import ConditionalRendering from './components/ConditionalRandering';
import NasaMarseRoberCompnent from './components/NasaMarsRoberComponent';
import AxiosApiComponent from './components/ConsuminrestApiByAxios';
import FatchApiComponent from './components/ConsumingRestApiByFetch';
import FormComponent from './components/formComponent';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    < AxiosApiComponent/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
