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
 * This module creates a language settings screen component for a React Native application.
 * It imports necessary libraries and modules for UI components and internationalization (i18n),
 * renders a background image with language settings options, and provides a language switcher component.
 * 
 * Key Components:
 * - React Native: Framework for building mobile applications.
 * - react-i18next: Integration module for React and i18next.
 * 
 * Main Functionality:
 * - Renders a background image with language settings options.
 * - Utilizes the 'useTranslation' hook to access translation functions.
 * - Includes a LanguageSwitcher component for language selection.
 * 
 * Exported Components:
 * - ScreenLanguageSettings: React component for managing language settings screen.
 * 
 * Note: This component assumes the existence of translation resources for titles and subtitles.
 */


import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next'; // Import translation hook
import LanguageSwitcher from '../components/LanguageSwitcher'; // Import the LanguageSwitcher component

const ScreenLanguageSettings = () => {
  const { t } = useTranslation(); // Translation hook

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* 
        Render an ImageBackground component with a background image.
        The image is sourced from the 'language_background.png' file in the assets folder.
      */}
      <ImageBackground source={require('../assets/backgrounds/language_background.png')} style={styles.background}>
        {/* 
          Render a ScrollView component to allow scrolling when content exceeds the screen size.
          The contentContainerStyle is defined to center align the content vertically.
        */}
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.overlay}>
            {/* 
              Render a title Text component using the translation hook.
              The 'language_settings_title' key is used to fetch the translated text.
            */}
            <Text style={styles.title}>{t('language_settings_title')}</Text>
            {/* 
              Render a subtitle Text component using the translation hook.
              The 'language_settings_subtitle' key is used to fetch the translated text.
            */}
            <Text style={styles.subtitle}>{t('language_settings_subtitle')}</Text>
            {/* Render the LanguageSwitcher component for language selection */}
            <LanguageSwitcher />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000', // Background color to ensure the safety of the visible area
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16, // Padding to ensure content doesn't touch the edges
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay background color with transparency
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    maxWidth: 400, // Max width to prevent overflow on larger screens
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
    textAlign: 'center', // Center text alignment
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: '#ddd',
    textAlign: 'center', // Center text alignment
  },
});

export default ScreenLanguageSettings; // Export the component
