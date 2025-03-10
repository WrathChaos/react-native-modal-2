# React Native Modal 2 Example

This is an example project demonstrating the usage of the `react-native-modal-2` library. It showcases various modal animations and customization options.

<p align="center">
  <img src="assets/images/react-logo.png" width="200" />
</p>

## Features Demonstrated

- **Basic Modal** with fade animation
- **Animated Modal** with various animation types:
  - Fade (smooth opacity transitions)
  - Slide (Up, Down, Left, Right directions)
  - Bounce (with spring-like effect)
  - Zoom (scale animations)
- **Custom Styling** options for modals
- **Backdrop customization** (opacity and color)
- **Animation duration** control
- **useModal hook** for state management

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or newer)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- iOS Simulator or Android Emulator (or physical device)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/WrathChaos/react-native-modal-2.git
cd react-native-modal-2/example
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the Expo development server:
```bash
npx expo start
```

4. Run on a simulator/emulator or scan the QR code with the Expo Go app on your device

## Project Structure

```
example/
├── App.tsx              # Main example app with modal demonstrations
├── assets/              # Images and assets
├── lib/                 # Local copy of the modal library
│   ├── components/      # Modal components
│   │   ├── AnimatedModal.tsx
│   │   └── Modal.tsx
│   ├── hooks/           # Custom hooks
│   │   └── useModal.ts
│   ├── types/           # TypeScript type definitions
│   │   └── index.ts
│   └── index.ts         # Library entry point
└── ...
```

## Example Usage

The example app demonstrates several use cases:

### Basic Modal

Shows a simple modal with a fade animation and touchable backdrop.

### Slide Animation

Demonstrates modals that slide in from different directions (up, down, left, right).

### Bounce Animation

Shows modals with bounce animations for a more dynamic entrance.

### Zoom Animation

Displays a modal that zooms in and out with scale animations.

### Custom Styling

Examples of modals with custom styling, backdrop colors, and animation durations.

## Customizing the Example

Feel free to modify the example to test different configurations:

1. Open `App.tsx` to see how different modals are implemented
2. Try changing animation types, directions, and durations
3. Experiment with different styling options
4. Create your own modal implementations

## Troubleshooting

If you encounter any issues:

- Make sure all dependencies are installed correctly
- Try clearing the Metro bundler cache: `npx expo start --clear`
- Check the console for any error messages
- Ensure you're using the latest version of the library

## Contributing

If you find a bug or want to request a new feature, please open an issue on the [GitHub repository](https://github.com/WrathChaos/react-native-modal-2).

## License

MIT
