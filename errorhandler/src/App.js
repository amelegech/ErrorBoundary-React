import React from 'react';
import './App.css';
import Course from './components/Course';
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <div className="App">
     <h2>Error Boundary </h2>
     <p><em>Eroor Boundary</em> is a react componente that catch javascript errorin the reactcomponente tree. <br/> Error boundary can catch the error during the rendering phase.</p>
      <p>Error boundary use componentDidCatch(error, errorInfo) signiture and it will return console.log(error), console.log(errorInfo) <br/>and static getDrivedStateFromError(error)return hasError:true</p>
      <hr/>
      <div>
        <ErrorBoundary>
        <Course name="REACT" />
        </ErrorBoundary>

        <ErrorBoundary>
        <Course name="ANGULAR" />
        </ErrorBoundary>
        <ErrorBoundary>
        <Course name="NODEJS" />

        </ErrorBoundary>
        <ErrorBoundary>
        <Course name="JAVA" />
        </ErrorBoundary>
        
        
        
    
      </div>
    </div>
  );
}

export default App;
