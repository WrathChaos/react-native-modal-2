# React Native Modal

A customizable modal library for React Native with touchable backdrop and support for custom UI.

## Features

- 🎨 Fully customizable UI
- 🔄 Multiple animation types (fade, slide, bounce, zoom)
- 🧭 Directional animations (up, down, left, right)
- 🎯 Touchable backdrop to close modal
- 📱 Works on both iOS and Android
- 🔧 TypeScript support
- 🪝 Includes useModal hook for easy state management

## Installation

```bash
npm install react-native-modal-2
# or
yarn add react-native-modal-2
```

## Usage

### Basic Modal

```jsx
import React from "react";
import { View, Text, Button } from "react-native";
import { Modal, useModal } from "react-native-modal-2";

const App = () => {
  const { visible, showModal, hideModal } = useModal();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Show Modal" onPress={showModal} />

      <Modal visible={visible} onClose={hideModal} animationType="fade">
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Hello!</Text>
          <Text style={{ marginVertical: 10 }}>
            This is a basic modal with a touchable backdrop.
          </Text>
          <Button title="Close" onPress={hideModal} />
        </View>
      </Modal>
    </View>
  );
};

export default App;
```

### Animated Modal

```jsx
import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { AnimatedModal } from "react-native-modal-2";

const App = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Show Animated Modal" onPress={showModal} />

      <AnimatedModal
        visible={visible}
        onClose={hideModal}
        animationIn="slide"
        animationOut="slide"
        animationDirection="up"
      >
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Animated Modal
          </Text>
          <Text style={{ marginVertical: 10 }}>
            This modal slides up from the bottom.
          </Text>
          <Button title="Close" onPress={hideModal} />
        </View>
      </AnimatedModal>
    </View>
  );
};

export default App;
```

## API Reference

### Modal Props

| Prop                  | Type                        | Default  | Description                                          |
| --------------------- | --------------------------- | -------- | ---------------------------------------------------- |
| visible               | boolean                     | required | Controls the visibility of the modal                 |
| onClose               | function                    | required | Callback when modal is closed                        |
| children              | ReactNode                   | required | Content to render inside the modal                   |
| animationType         | 'none' \| 'slide' \| 'fade' | 'fade'   | Type of animation for the modal                      |
| backdropOpacity       | number                      | 0.5      | Opacity of the backdrop                              |
| backdropColor         | string                      | '#000'   | Color of the backdrop                                |
| contentContainerStyle | ViewStyle                   | {}       | Style for the content container                      |
| modalContainerStyle   | ViewStyle                   | {}       | Style for the modal container                        |
| closeOnBackdropPress  | boolean                     | true     | Whether to close the modal when backdrop is pressed  |
| animationDuration     | number                      | 300      | Duration of the animation in milliseconds            |
| statusBarTranslucent  | boolean                     | true     | Whether the modal should appear under the status bar |

### AnimatedModal Props

Extends all Modal props plus:

| Prop               | Type                                    | Default | Description                                 |
| ------------------ | --------------------------------------- | ------- | ------------------------------------------- |
| animationIn        | 'fade' \| 'slide' \| 'bounce' \| 'zoom' | 'fade'  | Type of entrance animation                  |
| animationOut       | 'fade' \| 'slide' \| 'bounce' \| 'zoom' | 'fade'  | Type of exit animation                      |
| animationDirection | 'up' \| 'down' \| 'left' \| 'right'     | 'up'    | Direction of the animation                  |
| avoidKeyboard      | boolean                                 | false   | Whether the modal should avoid the keyboard |

### useModal Hook

```jsx
const { visible, showModal, hideModal, toggleModal } = useModal(initialState);
```

| Parameter    | Type    | Default | Description                           |
| ------------ | ------- | ------- | ------------------------------------- |
| initialState | boolean | false   | Initial visibility state of the modal |

| Return Value | Type     | Description                             |
| ------------ | -------- | --------------------------------------- |
| visible      | boolean  | Current visibility state                |
| showModal    | function | Function to show the modal              |
| hideModal    | function | Function to hide the modal              |
| toggleModal  | function | Function to toggle the modal visibility |

## License

MIT
