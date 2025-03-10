import React, { useEffect, useState, useRef } from "react";
import {
  Modal as RNModal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Animated,
  Dimensions,
  Platform,
  ModalProps as RNModalProps,
} from "react-native";
import { ModalProps } from "../types";

const { height, width } = Dimensions.get("window");

const Modal: React.FC<ModalProps> = ({
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
  animationType = "fade",
  ...otherProps
}) => {
  // State to control React Native's Modal visibility
  const [modalVisible, setModalVisible] = useState(false);

  // Animation value - use useRef to maintain same instance
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Initialize modal when visible changes
  useEffect(() => {
    if (visible) {
      // Make modal visible first
      setModalVisible(true);

      // Reset animation value
      fadeAnim.setValue(0);

      // Then animate in
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: animationDuration,
        useNativeDriver: true,
      }).start();
    } else {
      // Animate out
      Animated.timing(fadeAnim, {
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
  }, [visible, animationDuration]);

  // Backdrop animation style
  const backdropStyle = {
    opacity: fadeAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, backdropOpacity],
    }),
    backgroundColor: backdropColor,
  };

  // Content animation style
  const contentAnimationStyle = () => {
    switch (animationType) {
      case "slide":
        return {
          transform: [
            {
              translateY: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [height, 0],
              }),
            },
          ],
        };
      case "fade":
        return {
          opacity: fadeAnim,
        };
      default:
        return {};
    }
  };

  // Handle backdrop press
  const handleBackdropPress = () => {
    if (closeOnBackdropPress) {
      onBackdropPress();
    }
  };

  return (
    <RNModal
      transparent
      visible={modalVisible}
      onRequestClose={onBackdropPress}
      statusBarTranslucent={statusBarTranslucent}
      animationType="none"
      {...otherProps}
    >
      <View style={[styles.container, style]}>
        <TouchableWithoutFeedback onPress={handleBackdropPress}>
          <Animated.View style={[styles.backdrop, backdropStyle]} />
        </TouchableWithoutFeedback>

        <Animated.View style={[contentContainerStyle, contentAnimationStyle()]}>
          {children}
        </Animated.View>
      </View>
    </RNModal>
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

export default Modal;
