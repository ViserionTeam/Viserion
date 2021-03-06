import { Animated, Easing } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main/Main';
import Warn from './pages/Warn/Warn';
import Cam from './pages/Camera/Camera'

const Routes = createAppContainer(
    createStackNavigator({
        Main,
        Warn,
        Cam,
    },
    
    {
        initialRouteName: 'Warn',
        headerMode: 'none',
        mode: 'modal',
        transitionConfig: () => ({
            transitionSpec: {
              duration: 300,
              easing: Easing.out(Easing.poly(4)),
              timing: Animated.timing,
            },
        }),
    },
   
    )
);

export default Routes; 