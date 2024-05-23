 /**
 * ====================================================
 *  Data sheet: Main.js
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
 * This module creates a language switcher component for a React Native application.
 * It imports necessary libraries and modules for internationalization (i18n),
 * provides buttons to switch between English and Spanish languages,
 * and utilizes the 'react-i18next' library for translation.
 * 
 * Key Components:
 * - React Native: Framework for building mobile applications.
 * - react-i18next: Integration module for React and i18next.
 * 
 * Main Functionality:
 * - Renders buttons to switch between English and Spanish languages.
 * - Utilizes the 'useTranslation' hook to access translation functions.
 * - Calls the 'changeLanguage' function to switch between languages.
 * 
 * Exported Components:
 * - LanguageSwitcher: React component for language switching.
 * 
 * Note: This component assumes the existence of a translation resource file
 * containing keys for 'see_in_spanish' and 'see_in_english'.
 */
import React from 'react'; // Import React, necessary to define React components
import { View, Text, StyleSheet } from 'react-native'; // Import necessary React Native components
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook from react-i18next
import LanguageSwitcher from '../components/LanguageSwitcher'; // Import the LanguageSwitcher component from its relative path

// Define the functional component Main
const Main = () => {
  // Use the useTranslation hook to get the t function for translating text
  const { t } = useTranslation();

  /*
    Return the structure of the component.
    It includes a View container, a translated welcome text, and the LanguageSwitcher component.
  */
  return (
    <View style={styles.container}> 
      {/* Display a translated text using the t function */}
      <Text style={styles.welcomeText}>{t('welcome')}</Text>
      {/* Render the LanguageSwitcher component */}
      <LanguageSwitcher />
    </View>
  );
};

// Define styles using the StyleSheet API from React Native
const styles = StyleSheet.create({
  container: {
    flex: 1, // Flexbox: Set the container to occupy all available space
    justifyContent: 'center', // Flexbox: Center the content vertically
    alignItems: 'center', // Flexbox: Center the content horizontally
    padding: 16, // Add padding of 16 units on all sides
    backgroundColor: '#f0f0f0' // Set the background color of the container
  },
  welcomeText: {
    fontSize: 24, // Set font size to 24 units
    fontWeight: 'bold', // Set font weight to bold
    marginBottom: 20, // Add bottom margin of 20 units
    color: '#333' // Set text color to dark gray
  }
});

// Export the Main component so it can be used in other components
export default Main;
