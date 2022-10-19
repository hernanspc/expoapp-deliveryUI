import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer'
import React, { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, constants, dummyData, FONTS, icons, SIZES } from '../constants';
import { MainLayout } from '../screens';

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({ label, icon }) => {

    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                height: 40,
                marginBottom: SIZES.base,
                alignItems: 'center',
                paddingLeft: SIZES.radius,
                borderRadius: SIZES.base,
                //backgroundColor
            }}
        // onPress
        >
            <Image style={{ width: 20, height: 20, tintColor: COLORS.white }}
                source={icon}
            />
            <Text style={{ marginLeft: 35, color: COLORS.white, ...FONTS.h3 }} >
                {label}
            </Text>

        </TouchableOpacity>
    )
}

const CustomDrawerContent = ({ navigation }) => {

    return (
        <DrawerContentScrollView
            scrollEnabled={true}
            contentContainerStyle={{ flex: 1 }}
        >
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: SIZES.radius
                }}
            >
                {/* Close */}
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        onPress={() => navigation.closeDrawer()}
                    >
                        <Image style={{ height: 35, width: 35, tintColor: COLORS.white }}
                            source={icons.cross}
                        />
                    </TouchableOpacity>

                </View>

                {/* Profile */}
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                        alignItems: 'center',
                    }}
                    onPress={() => console.log('profile ')}
                >
                    <Image style={{ height: 50, width: 50, borderRadius: SIZES.radius }}
                        source={dummyData.myProfile?.profile_image}
                    />
                    <View style={{ marginLeft: SIZES.radius }}>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{dummyData.myProfile?.name}</Text>
                        <Text style={{ color: COLORS.white, ...FONTS.h4 }}>View Your Profile</Text>
                    </View>

                </TouchableOpacity>

                {/* DrawerItems*/}
                <View style={{ flex: 1, marginTop: SIZES.padding }}>
                    <CustomDrawerItem
                        label={constants.screens.home}
                        icon={icons.home}
                    />
                    <CustomDrawerItem
                        label={constants.screens.my_wallet}
                        icon={icons.wallet}
                    />
                    <CustomDrawerItem
                        label={constants.screens.notification}
                        icon={icons.notification}
                    />
                    <CustomDrawerItem
                        label={constants.screens.favourite}
                        icon={icons.favourite}
                    />
                    <View
                        style={{
                            height: 1,
                            marginVertical: SIZES.radius,
                            marginLeft: SIZES.radius,
                            backgroundColor: COLORS.lightGray1
                        }}
                    />

                </View>
                {/* LineDivider */}




            </View>
        </DrawerContentScrollView>
    )
}

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
                drawerContent={props => {
                    return (
                        <CustomDrawerContent
                            navigation={props.navigation}
                        />
                    )
                }}
            >
                <Drawer.Screen name="MainLayout">
                    {props => <MainLayout {...props} />}
                </Drawer.Screen>

            </Drawer.Navigator>
        </View>
    )
}
export default CustomDrawer;