/**
 * ====================================================
 *  Data sheet: i18n.js
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
 * This module handles internationalization (i18n) for the application.
 * It imports the necessary libraries and modules for i18n,
 * loads translation resources for English and Spanish from JSON files,
 * retrieves the user's saved language preference from secure storage,
 * initializes i18n with the saved language and necessary configurations,
 * provides a function to change the language preference and update i18n accordingly,
 * and exports the i18n instance and initialization function.
 * 
 * Key Components:
 * - i18next: Library for internationalization.
 * - react-i18next: Integration module for React and i18next.
 * - Expo SecureStore: Module for secure key-value storage in Expo.
 * 
 * Main Functionality:
 * - Loads translation resources for English and Spanish.
 * - Retrieves and sets the user's language preference from secure storage.
 * - Initializes i18n with the saved language and necessary configurations.
 * - Provides a function to change the language preference and update i18n.
 * 
 * Exported Functions:
 * - changeLanguage(language): Saves the selected language to secure storage and updates i18n.
 * - initI18n(): Initializes i18n with the saved language and necessary configurations.
 * 
 * Note: This module assumes the existence of 'en.json' and 'es.json' files in the './locales' directory
 * containing translation resources for English and Spanish respectively.
 */

import i18n from 'i18next'; // Import the i18n library for internationalization.
import { initReactI18next } from 'react-i18next'; // Import the react-i18next integration module.
import * as SecureStore from 'expo-secure-store'; // Import the SecureStore module from Expo for secure key-value storage.

import en from './locales/en.json'; // Import English translations from a JSON file.
import es from './locales/es.json'; // Import Spanish translations from a JSON file.

const resources = {
    en,
    es
}; // Define the translation resources for English and Spanish.

const getSavedLanguage = async () => {
  const savedLanguage = await SecureStore.getItemAsync('user-language'); // Retrieve the saved language from secure storage.
  return savedLanguage || 'en'; // Default language to English if none is saved.
};

const initI18n = async () => {
  const savedLanguage = await getSavedLanguage(); // Get the saved language.

  await i18n
    .use(initReactI18next) // Use the react-i18next plugin.
    .init({
      resources, // Load the translation resources.
      lng: savedLanguage, // Set the initial language to the saved language.
      fallbackLng: 'en', // Set the fallback language to English.
      interpolation: {
        escapeValue: false // Disable escaping for interpolation.
      }
    });
};

export const changeLanguage = async (language) => {
  await SecureStore.setItemAsync('user-language', language); // Save the selected language to secure storage.
  i18n.changeLanguage(language); // Change the current language.
};

export { i18n, initI18n }; // Export the i18n instance and the initI18n function.
