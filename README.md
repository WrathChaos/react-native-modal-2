# React Native Modal 2

A powerful, customizable modal library for React Native with smooth animations, touchable backdrop, and comprehensive TypeScript support.

<p align="center">
  <img src="https://img.shields.io/npm/v/react-native-modal-2.svg" />
  <img src="https://img.shields.io/npm/dt/react-native-modal-2.svg" />
  <img src="https://img.shields.io/github/license/WrathChaos/react-native-modal-2" />
</p>

## Features

- 🎨 Fully customizable UI with flexible styling options
- 🔄 Multiple animation types (fade, slide, bounce, zoom)
- 🧭 Directional animations (up, down, left, right)
- 🎯 Touchable backdrop to close modal
- 📱 Works seamlessly on both iOS and Android
- 🔧 Comprehensive TypeScript support
- 🪝 Includes useModal hook for easy state management
- ⚡ Optimized performance with native driver animations
- 🧩 Simple API with sensible defaults

## Installation

```bash
# npm
npm install react-native-modal-2

# yarn
yarn add react-native-modal-2

# pnpm
pnpm add react-native-modal-2
```

## Quick Start

### Basic Modal

```jsx
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Modal, useModal } from "react-native-modal-2";

const App = () => {
  const { visible, showModal, hideModal } = useModal();

  return (
    <View style={styles.container}>
      <Button title="Show Basic Modal" onPress={showModal} />

      <Modal visible={visible} onBackdropPress={hideModal} animationType="fade">
        <View style={styles.modalContent}>
          <Text style={styles.title}>Hello!</Text>
          <Text style={styles.description}>
            This is a basic modal with a fade animation.
          </Text>
          <Button title="Close" onPress={hideModal} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContent: {
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    marginBottom: 20,
  },
});

export default App;
```

### Animated Modal with Advanced Animations

```jsx
import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { AnimatedModal } from "react-native-modal-2";

const App = () => {
  const [slideModalVisible, setSlideModalVisible] = useState(false);
  const [bounceModalVisible, setBounceModalVisible] = useState(false);
  const [zoomModalVisible, setZoomModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button 
        title="Slide Up Modal" 
        onPress={() => setSlideModalVisible(true)} 
        style={styles.button}
      />
      
      <Button 
        title="Bounce Modal" 
        onPress={() => setBounceModalVisible(true)} 
        style={styles.button}
      />
      
      <Button 
        title="Zoom Modal" 
        onPress={() => setZoomModalVisible(true)} 
        style={styles.button}
      />

      {/* Slide Modal */}
      <AnimatedModal
        visible={slideModalVisible}
        onBackdropPress={() => setSlideModalVisible(false)}
        animationIn="slide"
        animationDirection="up"
        backdropOpacity={0.7}
      >
        <View style={styles.modalContent}>
          <Text style={styles.title}>Slide Up Modal</Text>
          <Text style={styles.description}>
            This modal slides up from the bottom of the screen.
          </Text>
          <Button title="Close" onPress={() => setSlideModalVisible(false)} />
        </View>
      </AnimatedModal>

      {/* Bounce Modal */}
      <AnimatedModal
        visible={bounceModalVisible}
        onBackdropPress={() => setBounceModalVisible(false)}
        animationIn="bounce"
        animationDirection="down"
        backdropColor="#2c3e50"
      >
        <View style={styles.modalContent}>
          <Text style={styles.title}>Bounce Modal</Text>
          <Text style={styles.description}>
            This modal bounces in from the top with a custom backdrop color.
          </Text>
          <Button title="Close" onPress={() => setBounceModalVisible(false)} />
        </View>
      </AnimatedModal>

      {/* Zoom Modal */}
      <AnimatedModal
        visible={zoomModalVisible}
        onBackdropPress={() => setZoomModalVisible(false)}
        animationIn="zoom"
        animationOut="zoom"
        animationDuration={400}
      >
        <View style={styles.modalContent}>
          <Text style={styles.title}>Zoom Modal</Text>
          <Text style={styles.description}>
            This modal zooms in and out with a custom animation duration.
          </Text>
          <Button title="Close" onPress={() => setZoomModalVisible(false)} />
        </View>
      </AnimatedModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  button: {
    marginVertical: 10,
  },
  modalContent: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "white",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    marginBottom: 20,
  },
});

export default App;
```

## API Reference

### Modal Component

The `Modal` component provides a simple modal with basic animation options.

#### Props

| Prop                  | Type                        | Default  | Description                                          |
| --------------------- | --------------------------- | -------- | ---------------------------------------------------- |
| visible               | boolean                     | required | Controls the visibility of the modal                 |
| onBackdropPress       | function                    | required | Callback when backdrop is pressed or modal is closed |
| children              | ReactNode                   | required | Content to render inside the modal                   |
| animationType         | 'none' \| 'slide' \| 'fade' | 'fade'   | Type of animation for the modal                      |
| backdropOpacity       | number                      | 0.5      | Opacity of the backdrop                              |
| backdropColor         | string                      | '#000'   | Color of the backdrop                                |
| contentContainerStyle | ViewStyle                   | {}       | Style for the content container                      |
| modalContainerStyle   | ViewStyle                   | {}       | Style for the modal container                        |
| closeOnBackdropPress  | boolean                     | true     | Whether to close the modal when backdrop is pressed  |
| animationDuration     | number                      | 300      | Duration of the animation in milliseconds            |
| statusBarTranslucent  | boolean                     | true     | Whether the modal should appear under the status bar |

### AnimatedModal Component

The `AnimatedModal` component extends the basic Modal with more advanced animation options.

#### Props

Includes all props from the Modal component, plus:

| Prop               | Type                                    | Default        | Description                                 |
| ------------------ | --------------------------------------- | -------------- | ------------------------------------------- |
| animationIn        | 'fade' \| 'slide' \| 'bounce' \| 'zoom' | 'fade'         | Type of entrance animation                  |
| animationOut       | 'fade' \| 'slide' \| 'bounce' \| 'zoom' | same as animationIn | Type of exit animation                 |
| animationDirection | 'up' \| 'down' \| 'left' \| 'right'     | 'up'           | Direction of the animation                  |
| avoidKeyboard      | boolean                                 | false          | Whether the modal should avoid the keyboard |

### useModal Hook

A convenient hook for managing modal visibility state.

```jsx
const { visible, showModal, hideModal, toggleModal } = useModal(initialState);
```

#### Parameters

| Parameter    | Type    | Default | Description                           |
| ------------ | ------- | ------- | ------------------------------------- |
| initialState | boolean | false   | Initial visibility state of the modal |

#### Return Values

| Return Value | Type     | Description                             |
| ------------ | -------- | --------------------------------------- |
| visible      | boolean  | Current visibility state                |
| showModal    | function | Function to show the modal              |
| hideModal    | function | Function to hide the modal              |
| toggleModal  | function | Function to toggle the modal visibility |

## Animation Types

### Fade
The modal fades in and out with a smooth opacity transition.

### Slide
The modal slides in from the specified direction (up, down, left, right).

### Bounce
The modal bounces in from the specified direction with a spring-like effect.

### Zoom
The modal zooms in and out with a scaling effect.

## Customization Examples

### Custom Modal Styling

```jsx
<AnimatedModal
  visible={visible}
  onBackdropPress={hideModal}
  animationIn="slide"
  contentContainerStyle={{
    backgroundColor: '#f8f9fa',
    borderRadius: 15,
    padding: 20,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  }}
  backdropColor="#2c3e50"
  backdropOpacity={0.8}
>
  {/* Modal content */}
</AnimatedModal>
```

### Custom Animation Duration

```jsx
<AnimatedModal
  visible={visible}
  onBackdropPress={hideModal}
  animationIn="bounce"
  animationDuration={500} // Slower animation (500ms)
>
  {/* Modal content */}
</AnimatedModal>
```

## Troubleshooting

### Animations Not Working

If animations aren't working correctly:

1. Make sure you're using a unique modal instance for each animation type
2. Verify that you're not rapidly toggling the modal visibility
3. Check that you're using the correct animation type and direction

### Modal Content Not Displaying Correctly

If your modal content isn't displaying correctly:

1. Check your content container styles
2. Make sure your content doesn't exceed the modal dimensions
3. Use ScrollView for content that might be too large

### Performance Issues

If you're experiencing performance issues:

1. Use `useNativeDriver: true` for animations (this is enabled by default)
2. Avoid complex layouts inside the modal
3. Reduce the number of simultaneous animations

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

## Author

[WrathChaos](https://github.com/WrathChaos)
