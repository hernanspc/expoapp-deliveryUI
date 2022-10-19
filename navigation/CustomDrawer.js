import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer'
import { useState } from 'react';
import React, { Image, ScrollView, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
} from 'react-native-reanimated';
import { connect } from 'react-redux';
import { COLORS, constants, dummyData, FONTS, icons, SIZES } from '../constants';
import { MainLayout } from '../screens';
import { setSelectedTab } from '../stores/tab/tabActions';

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({ label, icon, isFocused, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                height: 40,
                marginBottom: SIZES.base,
                alignItems: 'center',
                paddingLeft: SIZES.radius,
                borderRadius: SIZES.base,
                backgroundColor: isFocused ?
                    COLORS.transparentBlack1 : null
            }}
            onPress={onPress}
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

const CustomDrawerContent = ({ navigation, selectedTab, setSelectedTab }) => {
    console.log('CustomDrawerContent ', selectedTab, constants.screens.home)
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
                        alignItems: 'flex-start',
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
                        // source={dummyData.myProfile?.profile_image}
                        source={{ uri: 'https://yt3.ggpht.com/vPYy-zeU9o6j98WyhS_r5HkMelB9vD--AwzUKB0Xd7Wcm5Qhza4iwOyS8fiGjawcNV3y17a8=s88-c-k-c0x00ffffff-no-rj-mo' }}
                    />
                    <View style={{ marginLeft: SIZES.radius }}>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{dummyData.myProfile?.name}</Text>
                        <Text style={{ color: COLORS.white, ...FONTS.h4 }}>View Your Profile</Text>
                    </View>

                </TouchableOpacity>

                {/* DrawerItems*/}
                <ScrollView style={{ flex: 1, marginTop: SIZES.padding }}>
                    <CustomDrawerItem
                        label={constants.screens.home}
                        icon={icons.home}
                        isFocused={selectedTab == constants.screens.home}
                        onPress={() => {
                            setSelectedTab(constants.screens.home);
                            navigation.navigate('MainLayout');

                        }}
                    />
                    <CustomDrawerItem
                        label={constants.screens.my_wallet}
                        icon={icons.wallet}
                    />
                    <CustomDrawerItem
                        label={constants.screens.notification}
                        isFocused={selectedTab == constants.screens.notification}
                        icon={icons.notification}
                        onPress={() => {
                            setSelectedTab(constants.screens.notification);
                            navigation.navigate('MainLayout');
                        }}
                    />
                    <CustomDrawerItem
                        label={constants.screens.favourite}
                        icon={icons.favourite}
                    />
                    {/* LineDivider */}
                    <View
                        style={{
                            height: 1,
                            marginVertical: SIZES.radius,
                            marginLeft: SIZES.radius,
                            backgroundColor: COLORS.lightGray1
                        }}
                    />
                    <CustomDrawerItem
                        label={'Track your Order'}
                        icon={icons.location}
                    />
                    <CustomDrawerItem
                        label={'Coupons'}
                        icon={icons.coupon}
                    />
                    <CustomDrawerItem
                        label={'Settings'}
                        icon={icons.setting}
                    />
                    <CustomDrawerItem
                        label={'Invite to Friend'}
                        icon={icons.profile}
                    />
                    <CustomDrawerItem
                        label={'Help Center'}
                        icon={icons.help}
                    />

                </ScrollView>

                <View style={{ marginBottom: SIZES.padding }}  >
                    <CustomDrawerItem
                        label={'Logout'}
                        icon={icons.logout}
                    />
                </View>
            </View>
        </DrawerContentScrollView>
    )
}

const CustomDrawer = ({ selectedTab, setSelectedTab }) => {
    console.log('selectedTab ', selectedTab)
    const [progress, setProgress] = useState(new Animated.Value(0))

    const scale = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [1, 0.8]
    })

    const borderRadius = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [0, 26]
    })

    const animatedStyle = { borderRadius, transform: [{ scale }] }

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
                    setTimeout(() => {
                        setProgress(props.progress)
                    }, 0)

                    return (
                        <CustomDrawerContent
                            navigation={props.navigation}
                            selectedTab={selectedTab}
                            setSelectedTab={setSelectedTab}
                        />
                    )
                }}
            >
                <Drawer.Screen name="MainLayout">
                    {props => <MainLayout {...props}
                        drawerAnimationStyle={animatedStyle}
                    />}

                </Drawer.Screen>

            </Drawer.Navigator>
        </View>
    )
}

function mapStateToProps(state) {
    return {
        selectedTab: state.tabReducer.selectedTab
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setSelectedTab: (selectedTab) => {
            return dispatch(setSelectedTab(selectedTab))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);
