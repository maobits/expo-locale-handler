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
 *  Last Update Date: May 24, 2024
 *  License: CC0 1.0 Universal (CC0 1.0) Public Domain Dedication
 *  Support: code@maobits.com
 *  Last commit message: Added ScreenLanguageSettings component for language settings screen.
 *  Last commit date: May 24, 2024  
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
import { View, TouchableOpacity, Image, StyleSheet, FlatList, Text, Dimensions } from 'react-native';
import { useTranslation } from 'react-i18next'; // Import translation hook
import { changeLanguage } from '../i18n'; // Import function to change language

// List of languages with their respective flags and codes
const languages = [
  { code: 'es', name: 'Español', flag: require('../assets/flags-icons/spain_icon.png') }, // Spanish language with its flag
  { code: 'en', name: 'English', flag: require('../assets/flags-icons/usa_icon.png') }, // English language with its flag
  // Add more languages here
];

// Get the screen width
const screenWidth = Dimensions.get('window').width;

// Component for language switching with a list of flags
const LanguageSwitcher = () => {
  const { t } = useTranslation(); // Translation hook

  return (
    // Render a View container with styles defined in the 'container' style object
    <View style={styles.container}>
      {/* 
        Render a FlatList component to display the list of languages.
        - The 'data' prop is set to the 'languages' array, which contains language objects.
        - The 'keyExtractor' prop extracts the unique key for each item from its 'code' property.
        - The 'renderItem' prop defines how each item in the list should be rendered.
          It renders a TouchableOpacity for each language:
            - When pressed, it calls the 'changeLanguage' function with the language code.
            - It contains an Image component to display the flag of the language.
            - It contains a Text component to display the name of the language.
        - The 'ItemSeparatorComponent' prop renders a separator between each item in the list.
          It renders a View component with styles defined in the 'separator' style object.
      */}
      <FlatList
        data={languages}
        keyExtractor={(item) => item.code}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => changeLanguage(item.code)} style={styles.button}>
            <Image source={item.flag} style={styles.flag} />
            <Text style={styles.languageName}>{item.name}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );

};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ffffffaa',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
    width: screenWidth * 0.8, // Adjust button width to fit content
    maxWidth: 300, // Max width to prevent overflow on larger screens
    marginHorizontal: 'auto', // Center buttons horizontally
  },
  flag: {
    width: 40,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10,
  },
  languageName: {
    fontSize: 16,
    color: '#333',
    flexShrink: 1, // Ensure text does not overflow
  },
  separator: {
    height: 10,
  },
});

export default LanguageSwitcher; // Export the component
