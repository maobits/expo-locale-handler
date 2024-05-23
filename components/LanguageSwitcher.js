/**
 * ====================================================
 *  Data sheet: LanguageSwitcher.js
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


import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from '../i18n';

// Component for language switching
const LanguageSwitcher = () => {
  const { t } = useTranslation(); // Hook to access translation functions

  return (
    <View style={styles.buttonContainer}>
      {/* Button to switch language to Spanish */}
      <Button title={t('see_in_spanish')} onPress={() => changeLanguage('es')} />
      <View style={styles.spacer} />
      {/* Button to switch language to English */}
      <Button title={t('see_in_english')} onPress={() => changeLanguage('en')} />
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row', // Arrange buttons horizontally
    justifyContent: 'space-around', // Evenly space buttons
    width: '100%', // Occupy full width
    maxWidth: 300, // Limit maximum width to 300
    marginTop: 20 // Margin on top
  },
  spacer: {
    width: 10 // Empty space between buttons
  }
});

export default LanguageSwitcher; // Export the component
