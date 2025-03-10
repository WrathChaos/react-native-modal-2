import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export type AnimationDirection = "up" | "down" | "left" | "right";
export type AnimationType = "none" | "slide" | "fade" | "bounce" | "zoom";

export interface BaseModalProps {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
  backdropOpacity?: number;
  backdropColor?: string;
  contentContainerStyle?: StyleProp<ViewStyle>;
  modalContainerStyle?: StyleProp<ViewStyle>;
  closeOnBackdropPress?: boolean;
  animationDuration?: number;
  statusBarTranslucent?: boolean;
}

export interface ModalProps extends BaseModalProps {
  animationType?: "none" | "slide" | "fade";
}

export interface AnimatedModalProps extends BaseModalProps {
  animationIn?: AnimationType;
  animationOut?: AnimationType;
  animationDirection?: AnimationDirection;
  avoidKeyboard?: boolean;
}
