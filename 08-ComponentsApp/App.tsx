import React from 'react';
import { Navigation } from './src/presentation/navigation/Navigation';
import { ThemeProvider } from './src/presentation/context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  )
}

