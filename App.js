/**
 * ====================================================
 *  Data sheet: App.js
 * ====================================================
 *  Company Name: Maobits LLC.
 *  Department: Mobile Application Development
 *  Department Head: Mauricio Chara Hurtado (@maurollc)
 *  Support: code@maobits.com
 *  Web: www.maobits.com
 *  Version: 1.0.0
 *  Creation Date: May 23, 2024
 *  Last Update Date: May 23, 2024
 *  License: CC0 1.0 Universal (CC0 1.0) Public Domain Dedication
 *  Support: code@maobits.com
 *  Last commit message: Implementation of loading translations from external JSON.
 *  Last commit date: May 21, 2024  
 * ====================================================
 */

/**
 * This is the main entry point of the React Native application.
 * It imports necessary libraries and components, initializes internationalization (i18n),
 * and renders the root component of the application wrapped with I18nextProvider.
 * 
 * Key Components:
 * - React: JavaScript library for building user interfaces.
 * - useState: Hook for managing state in functional components.
 * - useEffect: Hook for performing side effects in functional components.
 * - react-native: Framework for building mobile applications.
 * - I18nextProvider: Component from react-i18next for providing i18n context to child components.
 * 
 * Main Functionality:
 * - Initializes i18n using the 'initI18n' function when the component mounts.
 * - Renders an ActivityIndicator while i18n is being initialized.
 * - Renders the Main component wrapped with I18nextProvider once initialization is complete.
 * 
 * Exported Component:
 * - App: Root component of the application.
 * 
 * Note: This component assumes the existence of a './i18n' file containing i18n configuration
 * and a './screens/Main' file containing the root component of the application.
 */
import React, { useState, useEffect } from 'react'; // Import React and necessary hooks
import { View, Text, ActivityIndicator } from 'react-native'; // Import necessary components from react-native
import 'intl-pluralrules'; // Import intl-pluralrules library for pluralization support
import { I18nextProvider } from 'react-i18next'; // Import I18nextProvider from react-i18next for internationalization
import { i18n, initI18n } from './i18n'; // Import i18n instance and initI18n function from './i18n' file
import Main from './screens/ScreenLanguageSettings'; // Import Main component from './screens/Main' file
import ScreenLanguageSettings from './screens/ScreenLanguageSettings';

export default function App() {
  const [isInitialized, setIsInitialized] = useState(false); // State to track if initialization is complete

  useEffect(() => {
    // Effect to initialize i18n when component mounts
    const initializeI18n = async () => {
      await initI18n(); // Call initI18n function to initialize i18n
      setIsInitialized(true); // Set isInitialized to true once initialization is complete
    };
    initializeI18n(); // Invoke the initialization function
  }, []);

  // If initialization is not complete, show an ActivityIndicator
  if (!isInitialized) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // Once initialization is complete, render the Main component wrapped with I18nextProvider
  return (
    <I18nextProvider i18n={i18n}>
      <ScreenLanguageSettings />
    </I18nextProvider>
  );
}
