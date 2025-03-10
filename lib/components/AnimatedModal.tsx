import React, { useEffect, useState, useRef } from "react";
import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Animated,
  Dimensions,
  Platform,
  ModalProps as RNModalProps,
} from "react-native";
import { AnimatedModalProps } from "../types";

const { height, width } = Dimensions.get("window");

const AnimatedModal: React.FC<AnimatedModalProps> = ({
  visible,
  onBackdropPress,
  children,
  backdropOpacity = 0.5,
  backdropColor = "#000",
  contentContainerStyle,
  style,
  closeOnBackdropPress = true,
  animationDuration = 300,
  statusBarTranslucent = true,
  animationIn = "fade",
  animationOut = animationIn, // Default to same animation for in/out
  animationDirection = "up",
  avoidKeyboard = false,
  ...otherProps
}) => {
  // State to control React Native's Modal visibility
  const [modalVisible, setModalVisible] = useState(false);

  // Animation progress value - use useRef to maintain the same instance
  const animationProgress = useRef(new Animated.Value(0)).current;

  // Initialize modal when visible changes
  useEffect(() => {
    if (visible) {
      // Make modal visible first (to show backdrop and content)
      setModalVisible(true);

      // Reset animation value
      animationProgress.setValue(0);

      // Then animate in
      Animated.timing(animationProgress, {
        toValue: 1,
        duration: animationDuration,
        useNativeDriver: true,
      }).start();
    } else {
      // Animate out
      Animated.timing(animationProgress, {
        toValue: 0,
        duration: animationDuration,
        useNativeDriver: true,
      }).start(({ finished }) => {
        // Hide modal after animation completes
        if (finished) {
          setModalVisible(false);
        }
      });
    }
  }, [visible, animationDuration, animationProgress]);

  // Backdrop animation style
  const backdropAnimationStyle = {
    opacity: animationProgress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, backdropOpacity],
    }),
    backgroundColor: backdropColor,
  };

  // Get the content animation style based on animation type
  const getContentAnimationStyle = () => {
    switch (animationIn) {
      case "fade":
        return {
          opacity: animationProgress,
        };

      case "slide":
        if (animationDirection === "up") {
          return {
            transform: [
              {
                translateY: animationProgress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [height, 0],
                }),
              },
            ],
          };
        } else if (animationDirection === "down") {
          return {
            transform: [
              {
                translateY: animationProgress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-height, 0],
                }),
              },
            ],
          };
        } else if (animationDirection === "left") {
          return {
            transform: [
              {
                translateX: animationProgress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [width, 0],
                }),
              },
            ],
          };
        } else {
          return {
            transform: [
              {
                translateX: animationProgress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-width, 0],
                }),
              },
            ],
          };
        }

      case "bounce":
        if (animationDirection === "up" || animationDirection === "down") {
          return {
            transform: [
              {
                translateY: animationProgress.interpolate({
                  inputRange: [0, 0.5, 0.8, 1],
                  outputRange: [
                    animationDirection === "up" ? height : -height,
                    animationDirection === "up" ? -20 : 20,
                    animationDirection === "up" ? 10 : -10,
                    0,
                  ],
                }),
              },
            ],
          };
        } else {
          return {
            transform: [
              {
                translateX: animationProgress.interpolate({
                  inputRange: [0, 0.5, 0.8, 1],
                  outputRange: [
                    animationDirection === "left" ? width : -width,
                    animationDirection === "left" ? -20 : 20,
                    animationDirection === "left" ? 10 : -10,
                    0,
                  ],
                }),
              },
            ],
          };
        }

      case "zoom":
        return {
          transform: [
            {
              scale: animationProgress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            },
          ],
        };

      default:
        return {
          opacity: animationProgress,
        };
    }
  };

  return (
    <Modal
      transparent
      visible={modalVisible}
      onRequestClose={onBackdropPress}
      statusBarTranslucent={statusBarTranslucent}
      animationType="none"
      {...otherProps}
    >
      <View style={[styles.container, style]}>
        <TouchableWithoutFeedback
          onPress={() => closeOnBackdropPress && onBackdropPress()}
        >
          <Animated.View style={[styles.backdrop, backdropAnimationStyle]} />
        </TouchableWithoutFeedback>

        <Animated.View
          style={[
            contentContainerStyle,
            getContentAnimationStyle(),
          ]}
        >
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width,
    height: Platform.OS === "ios" ? height : "100%",
  },
});

export default AnimatedModal;
