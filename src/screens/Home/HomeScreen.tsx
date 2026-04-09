import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import LoginScreenBioLogo from '../../assets/svg/LoginScreenBioLogo.svg';
import DailyPhrase from '../../assets/svg/DailyPhrase.svg';
import ScreenLayout from '../ScreenLayout/ScreenLayout';
import CardBoard from '../../components/CardBoard';
import COLORS from '../../theme/colors';
import Divider from '../../components/Divider';
import {
  SmilePlus,
  Leaf,
  BookHeart,
  ChevronLeft,
  ChevronRight,
  CalendarHeart,
} from 'lucide-react-native';
import IconButton from '../../components/IconButton';
import Button from '../../components/Button';
import IconButtonCheck from '../../components/IconButtonCheck';
import {useNavigation} from '@react-navigation/native';
import {useUsers} from '../../hooks/useUserInfo';

const randomCenterPhrases = [
  'Cada emoción que abrazas es una raiz mas fuerte en tu jardin interior',
  'Permítete sentir, crecer y florecer con cada emoción que experimentas',
  'Las emociones son las semillas de nuestro crecimiento personal; cultívalas con amor y atención',
  'En el jardín de la mente, cada emoción es una flor que merece ser cuidada y comprendida',
  'Al nutrir nuestras emociones, cultivamos un paisaje interior lleno de sabiduría y fortaleza',
  'Cada emoción es una oportunidad para aprender y crecer; abrázalas todas con el corazón abierto',
  'El cuidado de nuestras emociones es el primer paso para florecer en todas las áreas de nuestra vida',
  'Como un jardinero cuida sus plantas, cuida tus emociones con paciencia y amor',
  'Las emociones son las flores del alma; riega las positivas y aprende de las desafiantes',
  'Cultivar la atención plena hacia nuestras emociones nos permite florecer en autenticidad y bienestar',
];

const goals = [
  {text: 'Leer 10 minutos', category: 'Crecimiento personal'},
  {text: 'Caminar 20 minutos', category: 'Salud'},
  {text: 'Meditar 5 minutos', category: 'Bienestar'},
];

const HomeScreen = () => {
  const {users, loading, error} = useUsers();
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation<any>();
  const getRandom = (arr: string[]) =>
    arr[Math.floor(Math.random() * arr.length)];
  // Estado global de los checks
  const [checkedGoals, setCheckedGoals] = useState<{[key: string]: boolean}>(
    {},
  );
  const {width} = useWindowDimensions();

  if (loading) {
    return <Text>Cargando...</Text>;
  }
  if (error) {
    return <Text>Error al cargar usuarios</Text>;
  }

  const handleGoalPress = ({
    text,
    checked,
  }: {
    text: string;
    checked: boolean;
  }) => {
    setCheckedGoals(prev => ({
      ...prev,
      [text]: checked,
    }));
  };
  return (
    <ScreenLayout variant="full">
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled">
          <View style={styles.content}>
            <View style={[styles.dateContainer, {width}]}>
              <IconButton
                icon={<ChevronLeft size={22} color="#018454" />}
                iconBgColor={COLORS.white}
                size={5}
                onPress={() => console.log('Izquierda')}
              />

              <View style={styles.centerContent}>
                <CalendarHeart size={22} color={COLORS.description} />
                <Text style={styles.dateText}>Hoy, Octubre 01</Text>
              </View>

              <IconButton
                icon={<ChevronRight size={22} color="#018454" />}
                iconBgColor={COLORS.white}
                size={5}
                onPress={() => console.log('Derecha')}
              />
            </View>
            <LoginScreenBioLogo width={142} height={175} />
            <CardBoard height={220} width={370} marginTop={30}>
              <Text style={[styles.title, styles.black]}>
                ¡Hola, {users[0]?.name || 'Usuario'}!
              </Text>
              <Text style={[styles.title, styles.purple]}>
                ¿Como te sientes hoy?
              </Text>
              <Divider
                color={COLORS.silverGray}
                thickness={1}
                width="95%"
                margin={10}
              />
              <View style={styles.emotionContainer}>
                <IconButton
                  text="Agregar emoción"
                  icon={<SmilePlus size={24} color="#018454" />}
                  iconPosition="top"
                  iconBgColor={COLORS.btnIcon}
                  onPress={() => navigation.navigate('EmotionModalStack')}
                />
                <IconButton
                  text="Mi diario"
                  icon={<BookHeart size={24} color="#018454" />}
                  iconPosition="top"
                  iconBgColor={COLORS.btnIcon}
                  onPress={() => console.log('Presionado')}
                />
                <IconButton
                  text="Frase del día"
                  icon={<Leaf size={24} color="#018454" />}
                  iconPosition="top"
                  iconBgColor={COLORS.btnIcon}
                  onPress={() => setVisible(true)}
                />
              </View>
            </CardBoard>
            <CardBoard height="auto" width={370} marginTop={2} align="left">
              <Text style={[styles.title, styles.black]}>
                Objectivos del día
              </Text>
              <Divider
                color={COLORS.silverGray}
                thickness={1}
                width="95%"
                margin={12}
              />
              {goals.map(goal => (
                <IconButtonCheck
                  key={goal.text}
                  text={goal.text}
                  secondaryText={goal.category}
                  icon={<Leaf size={24} color="#018454" />}
                  iconBgColor={COLORS.btnIcon}
                  checked={!!checkedGoals[goal.text]} // 👈 controlado por el padre
                  onPress={handleGoalPress} // 👈 pasa el callback común
                />
              ))}
            </CardBoard>
          </View>
        </ScrollView>
      </SafeAreaView>

      <Modal visible={visible} animationType="slide" transparent={false}>
        <View style={styles.modalContainer}>
          {/* Header con frase + icono de cerrar */}
          <View style={styles.header}>
            <Text style={styles.topText}>Frase del día</Text>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Text style={styles.closeIcon}>✖</Text>
            </TouchableOpacity>
          </View>

          {/* Frase en el centro */}
          <View style={styles.center}>
            <DailyPhrase width={232} height={253} style={{marginBottom: 20}} />
            <Text style={styles.centerText}>
              {getRandom(randomCenterPhrases)}
            </Text>
          </View>

          {/* Botón cerrar abajo */}
          <View style={styles.buttonWrapper}>
            <Button
              text="Cerrar"
              size="xl"
              variant="tertiary"
              onPress={() => setVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Lato',
    marginTop: 20,
  },
  purple: {
    color: COLORS.others,
  },
  black: {
    color: COLORS.black,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  emotionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  dateContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 16, // margen lateral proporcional
    marginBottom: 35,
  },
  centerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  dateText: {
    fontSize: 16,
    color: COLORS.description,
    fontFamily: 'Lato',
    fontWeight: 'bold',
    marginLeft: 6,
    textAlign: 'center',
  },
  leftButton: {
    position: 'absolute',
    left: 16,
  },
  rightButton: {
    position: 'absolute',
    right: 16,
  },
  // MODAL
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    padding: 20,
  },
  header: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topText: {
    flex: 1, // ocupa todo el espacio disponible
    textAlign: 'center', // centra el texto horizontalmente
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 25,
  },
  closeIcon: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'red',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    fontSize: 18,
    textAlign: 'center',
  },
  buttonWrapper: {
    marginBottom: 16,
  },
});

export default HomeScreen;
