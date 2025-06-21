import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Animated,
  Easing,
  SafeAreaView,
} from 'react-native';
import Button from './Button';

const {width} = Dimensions.get('window');

type CarouselItem = {
  image: any;
  title: string;
  description: string;
};

type CarouselProps = {
  data: CarouselItem[];
  onPrimaryAction: () => void;
  onSecondaryAction: () => void;
};

const CustomCarousel: React.FC<CarouselProps> = ({
  data,
  onPrimaryAction,
  onSecondaryAction,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showButtons, setShowButtons] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0));
  const translateYAnim = useRef(new Animated.Value(20));

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;

    const fade = fadeAnim.current;
    const translateY = translateYAnim.current;

    if (currentIndex === data.length - 1) {
      fade.setValue(0);
      translateY.setValue(20);

      timeout = setTimeout(() => {
        setShowButtons(true);

        Animated.parallel([
          Animated.timing(fade, {
            toValue: 1,
            duration: 400,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(translateY, {
            toValue: 0,
            duration: 400,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
          }),
        ]).start();
      }, 400);
    } else {
      setShowButtons(false);
      fade.setValue(0);
      translateY.setValue(20);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [currentIndex, data.length]);

  const renderItem = ({item}: {item: CarouselItem}) => (
    <View style={styles.slide}>
      {item.image}
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        onScroll={e => {
          const index = Math.round(e.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
        scrollEventThrottle={16}
      />

      {/* Indicadores */}

      <View style={styles.indicatorContainer}>
        {!showButtons &&
          data.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                {
                  backgroundColor:
                    currentIndex === index ? '#81AD3F' : '#E3E6D5',
                },
              ]}
            />
          ))}
      </View>

      {/* Botones animados */}
      {showButtons && (
        <Animated.View
          style={[
            styles.buttonContainer,
            {
              opacity: fadeAnim.current,
              transform: [{translateY: translateYAnim.current}],
            },
          ]}>
          <Button
            text="Empezar mi camino"
            onPress={onPrimaryAction}
            size="xl"
            variant="primary"
          />
          <TouchableOpacity style={styles.footer} onPress={onSecondaryAction}>
            <Text style={styles.footerText}>
              ¿Ya tienes cuenta? <Text style={styles.link}>Inicia sesión</Text>
            </Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: width * 0.8,
    height: 250,
    borderRadius: 16,
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
    paddingTop: 20,
    fontWeight: 'semibold',
    fontFamily: 'Poppins-SemiBold',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#404040',
    marginHorizontal: 6,
    fontFamily: 'Quicksand-Regular',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
    marginBottom: 32, // margen más amplio
  },
  indicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 6,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: '#888',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  footer: {
    marginTop: 25,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    fontFamily: 'Quicksand-Regular',
    color: '#000000',
  },
  link: {
    fontFamily: 'Quicksand-Bold',
    color: '#81AD3F',
  },
});

export default CustomCarousel;
