import { createDrawerNavigator } from '@react-navigation/drawer'
import React, { View } from 'react-native'
import { COLORS } from '../constants';
import { MainLayout } from '../screens';

const Drawer = createDrawerNavigator();
const CustomDrawer = () => {

    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.primary
        }}>
            <Drawer.Navigator
                drawerType="slide"
                overlayColor="transparent"
                drawerStyle={{
                    flex: 1,
                    width: '65%',
                    paddingRight: 20,
                    backgroundColor: 'transparent',
                }}
                sceneContainerStyle={{
                    backgroundColor: 'transparent',
                }}
                initialRouteName="MainLayout"
            >
                <Drawer.Screen name="MainLayout">
                    {props => <MainLayout {...props} />}
                </Drawer.Screen>

            </Drawer.Navigator>
            {/* <MainLayout /> */}
        </View>
    )
}
export default CustomDrawer;