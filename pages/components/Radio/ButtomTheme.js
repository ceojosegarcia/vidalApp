import React from 'react';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import useTheme from '../hooks/useTheme';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing} from 'react-native-reanimated';

const FondoButtom = styled(LinearGradient).attrs(props => ({
  colors: [props.theme.bgPrimary, props.theme.bgSecundary],
}))`
    width: 20px;
    height: 40px;
    margin-top: 20px;
    margin-left: 10px;
    position: relative;
    flex-direction: column;
    border-width: 3px;
    border-color: ${props => ((props.theme) ? props.theme.bgContrast : "#cccccc")};
    border-style: solid;
    border-radius: 20px;
`;

const ButtomBall = styled(Animated.View)`
  width: 14px;
  height: 14px;
  border-radius: 100%;
`;

const ButtomTheme = () => {
  const { theme } = useTheme();
  const marginTop = useSharedValue(0)

  const marginStyle = useAnimatedStyle(() => {
    return {
      marginTop: withTiming(marginTop.value, {
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
      }),
    };
  });

  React.useEffect(()=>{
    marginTop.value = theme.theme && theme.theme === "light" ? 16 : 4;
  },[theme])

    return (
        <FondoButtom theme={theme}>
          <ButtomBall  theme={theme} style={[{ backgroundColor: theme.bgContrast2 }, marginStyle]} />  
        </FondoButtom>
    );
};

export default ButtomTheme;