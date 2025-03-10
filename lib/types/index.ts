import { ReactNode } from "react";
import { StyleProp, ViewStyle, ModalProps as RNModalProps } from "react-native";

export type AnimationDirection = "up" | "down" | "left" | "right";
export type AnimationType = "none" | "slide" | "fade" | "bounce" | "zoom";

export interface BaseModalProps
  extends Omit<RNModalProps, "visible" | "animationType"> {
  visible: boolean;
  onBackdropPress: () => void;
  children: ReactNode;
  backdropOpacity?: number;
  backdropColor?: string;
  contentContainerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
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
