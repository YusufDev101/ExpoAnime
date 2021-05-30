# Expo framework without authentication v1

## Extensions Used

Auto Close Tag
Auto Complete Tag
Auto Rename Tag
Import Cost
Material Icon Theme
Prettier
Rainbow Brackets
React-Native/React/Redux snippets for es6/es7
Visual Studio IntelliCode

## User Snippets for VSCode (Functional Arrow Components)

To add a user snippet to VSCode, go to File -> Preferences -> User Snippets.
If a user snippet file does not exist it will suggest creating a new global snippet file. Select this option and name it `javascript.json`.

Paste the following into the object inside the `javascript.json` file.

```js
"Function Arrow Component": {
        "prefix": "rnfac",
        "body": [
            "import React from 'react';",
            "import { View, StyleSheet } from 'react-native';",
            "",
            "const ${TM_FILENAME_BASE} = (props) => {",
            "  return (",
            "    <View style={styles.container}>$0</View>",
            "  );",
            "}",
            "",
            "const styles = StyleSheet.create({",
            "  container: {}",
            "});",
            "",
            "export default ${TM_FILENAME_BASE};"
        ]
    },
```

## Getting Started

Create expo project.

```sh
  expo init [projectName]
```

```sh
  cd [projectName]
  code .
```

## Required packages and versions

Install [react-navigation](https://reactnavigation.org/docs/getting-started) current version is 5.

```sh
npm install @react-navigation/native
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
npm install @react-navigation/stack
npm install @react-navigation/drawer
npm install @react-navigation/bottom-tabs
```

Install `expo-constants` for our `Screen` component (this handles the StatusBarHeight).

```sh
expo install expo-constants
```
