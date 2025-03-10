import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Modal, AnimatedModal, useModal } from "./lib";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  // Basic modal using the useModal hook
  const basicModal = useModal();

  // Separate modal states for each animation type
  const [fadeModalVisible, setFadeModalVisible] = useState(false);
  const [slideUpModalVisible, setSlideUpModalVisible] = useState(false);
  const [slideDownModalVisible, setSlideDownModalVisible] = useState(false);
  const [slideLeftModalVisible, setSlideLeftModalVisible] = useState(false);
  const [slideRightModalVisible, setSlideRightModalVisible] = useState(false);
  const [bounceUpModalVisible, setBounceUpModalVisible] = useState(false);
  const [bounceDownModalVisible, setBounceDownModalVisible] = useState(false);
  const [zoomModalVisible, setZoomModalVisible] = useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? "#121212" : "#F3F3F3",
    flex: 1,
  };

  // Modal content component to avoid duplication
  const ModalContent: React.FC<{
    title: string;
    description: string;
    onClose: () => void;
  }> = ({ title, description, onClose }) => (
    <View style={styles.modalContent}>
      <Text style={styles.modalTitle}>{title}</Text>
      <Text style={styles.modalText}>{description}</Text>
      <TouchableOpacity style={styles.modalButton} onPress={onClose}>
        <Text style={styles.modalButtonText}>Close</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar style={isDarkMode ? "light" : "dark"} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.container}>
          <Text style={styles.title}>React Native Modal Examples</Text>

          {/* Basic Modal */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Basic Modal</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={basicModal.showModal}
            >
              <Text style={styles.buttonText}>Show Basic Modal</Text>
            </TouchableOpacity>
          </View>

          {/* Animated Modal */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Animated Modal</Text>

            <Text style={styles.subTitle}>Fade Animation</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setFadeModalVisible(true)}
            >
              <Text style={styles.buttonText}>Fade Animation</Text>
            </TouchableOpacity>

            <Text style={styles.subTitle}>Slide Animations</Text>
            <View style={styles.row}>
              <TouchableOpacity
                style={[styles.button, styles.smallButton]}
                onPress={() => setSlideUpModalVisible(true)}
              >
                <Text style={styles.buttonText}>Slide Up</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.smallButton]}
                onPress={() => setSlideDownModalVisible(true)}
              >
                <Text style={styles.buttonText}>Slide Down</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <TouchableOpacity
                style={[styles.button, styles.smallButton]}
                onPress={() => setSlideLeftModalVisible(true)}
              >
                <Text style={styles.buttonText}>Slide Left</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.smallButton]}
                onPress={() => setSlideRightModalVisible(true)}
              >
                <Text style={styles.buttonText}>Slide Right</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.subTitle}>Bounce Animations</Text>
            <View style={styles.row}>
              <TouchableOpacity
                style={[styles.button, styles.smallButton]}
                onPress={() => setBounceUpModalVisible(true)}
              >
                <Text style={styles.buttonText}>Bounce Up</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.smallButton]}
                onPress={() => setBounceDownModalVisible(true)}
              >
                <Text style={styles.buttonText}>Bounce Down</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.subTitle}>Zoom Animation</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setZoomModalVisible(true)}
            >
              <Text style={styles.buttonText}>Zoom Animation</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Basic Modal */}
      <Modal
        visible={basicModal.visible}
        animationType="fade"
        onBackdropPress={basicModal.hideModal}
      >
        <ModalContent
          title="Basic Modal"
          description="This is a simple modal with a touchable backdrop. Click outside to close it."
          onClose={basicModal.hideModal}
        />
      </Modal>

      {/* Fade Animation Modal */}
      <AnimatedModal
        visible={fadeModalVisible}
        onBackdropPress={() => setFadeModalVisible(false)}
        animationIn="fade"
        animationOut="fade"
      >
        <ModalContent
          title="Fade Animation"
          description="This modal uses fade animation."
          onClose={() => setFadeModalVisible(false)}
        />
      </AnimatedModal>

      {/* Slide Up Modal */}
      <AnimatedModal
        visible={slideUpModalVisible}
        onBackdropPress={() => setSlideUpModalVisible(false)}
        animationIn="slide"
        animationOut="slide"
        animationDirection="up"
      >
        <ModalContent
          title="Slide Up Animation"
          description="This modal slides up from the bottom."
          onClose={() => setSlideUpModalVisible(false)}
        />
      </AnimatedModal>

      {/* Slide Down Modal */}
      <AnimatedModal
        visible={slideDownModalVisible}
        onBackdropPress={() => setSlideDownModalVisible(false)}
        animationIn="slide"
        animationOut="slide"
        animationDirection="down"
      >
        <ModalContent
          title="Slide Down Animation"
          description="This modal slides down from the top."
          onClose={() => setSlideDownModalVisible(false)}
        />
      </AnimatedModal>

      {/* Slide Left Modal */}
      <AnimatedModal
        visible={slideLeftModalVisible}
        onBackdropPress={() => setSlideLeftModalVisible(false)}
        animationIn="slide"
        animationOut="slide"
        animationDirection="left"
      >
        <ModalContent
          title="Slide Left Animation"
          description="This modal slides in from the left."
          onClose={() => setSlideLeftModalVisible(false)}
        />
      </AnimatedModal>

      {/* Slide Right Modal */}
      <AnimatedModal
        visible={slideRightModalVisible}
        onBackdropPress={() => setSlideRightModalVisible(false)}
        animationIn="slide"
        animationOut="slide"
        animationDirection="right"
      >
        <ModalContent
          title="Slide Right Animation"
          description="This modal slides in from the right."
          onClose={() => setSlideRightModalVisible(false)}
        />
      </AnimatedModal>

      {/* Bounce Up Modal */}
      <AnimatedModal
        visible={bounceUpModalVisible}
        onBackdropPress={() => setBounceUpModalVisible(false)}
        animationIn="bounce"
        animationOut="slide"
        animationDirection="up"
      >
        <ModalContent
          title="Bounce Up Animation"
          description="This modal bounces up from the bottom."
          onClose={() => setBounceUpModalVisible(false)}
        />
      </AnimatedModal>

      {/* Bounce Down Modal */}
      <AnimatedModal
        visible={bounceDownModalVisible}
        onBackdropPress={() => setBounceDownModalVisible(false)}
        animationIn="bounce"
        animationOut="slide"
        animationDirection="down"
      >
        <ModalContent
          title="Bounce Down Animation"
          description="This modal bounces down from the top."
          onClose={() => setBounceDownModalVisible(false)}
        />
      </AnimatedModal>

      {/* Zoom Modal */}
      <AnimatedModal
        visible={zoomModalVisible}
        onBackdropPress={() => setZoomModalVisible(false)}
        animationIn="zoom"
        animationOut="zoom"
      >
        <ModalContent
          title="Zoom Animation"
          description="This modal zooms in and out."
          onClose={() => setZoomModalVisible(false)}
        />
      </AnimatedModal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 30,
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  section: {
    marginBottom: 30,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 10,
    marginBottom: 5,
    color: "#555",
  },
  button: {
    backgroundColor: "#2196F3",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 5,
  },
  smallButton: {
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  modalContent: {
    minWidth: 250,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    color: "#555",
  },
  modalButton: {
    backgroundColor: "#2196F3",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  modalButtonText: {
    color: "white",
    fontWeight: "600",
  },
});

export default App;
