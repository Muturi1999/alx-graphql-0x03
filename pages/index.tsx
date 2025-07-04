import React from 'react';
import ErrorBoundary from '@/components/ErrorBoundary';
import ErrorProneComponent from '@/components/ErrorProneComponent';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Rick and Morty App</h1>
      <p>Testing ErrorBoundary with ErrorProneComponent:</p>
      
      <ErrorBoundary>
        <ErrorProneComponent />
      </ErrorBoundary>
      
      <p>This text should still be visible even if the component above throws an error.</p>
    </div>
  );
};

export default Home;