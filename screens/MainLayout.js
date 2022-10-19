import React, { useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import Animated, {
    useSharedValue
} from 'react-native-reanimated';
import { connect } from 'react-redux';
import { Header } from '../components';
import { setSelectedTab } from '../stores/tab/tabActions';
import { COLORS, constants, dummyData, icons, SIZES } from '../constants'

const MainLayout = ({ drawerAnimationStyle, navigation, selectedTab, setSelectedTab }) => {

    useEffect(() => {
        setSelectedTab(constants.screens.home)
    }, [])

    return (
        <Animated.View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                ...drawerAnimationStyle
            }}
        >
            {/* Header */}
            <Header
                containerStyle={{
                    height: 50,
                    paddingHorizontal: SIZES.padding,
                    marginTop: 40,
                    alignItems: 'center',
                }}
                title={selectedTab.toUpperCase()}
                leftComponent={
                    <TouchableOpacity
                        style={{
                            width: 40,
                            height: 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderWidth: 1,
                            borderColor: COLORS.gray2,
                            borderRadius: SIZES.radius,
                        }}
                        onPress={() => navigation.openDrawer()}
                    >
                        <Image
                            source={icons.menu}
                        />
                    </TouchableOpacity>
                }
                rightComponent={
                    <TouchableOpacity
                        style={{
                            borderRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center',

                            width: 40,
                            height: 40,
                            borderWidth: 1,
                            borderColor: COLORS.gray2,
                        }}
                    >
                        <Image
                            // source={dummyData.myProfile?.profile_image}
                            source={{ uri: 'https://yt3.ggpht.com/vPYy-zeU9o6j98WyhS_r5HkMelB9vD--AwzUKB0Xd7Wcm5Qhza4iwOyS8fiGjawcNV3y17a8=s88-c-k-c0x00ffffff-no-rj-mo' }}
                            style={{ width: 40, height: 40, borderRadius: SIZES.radius }}
                        />

                    </TouchableOpacity>
                }
            />

            {/* Content */}
            <View style={{ flex: 1 }}>
                <Text>MainLayoput</Text>
            </View>

            {/* Footer */}

        </Animated.View>
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
            return dispatch(
                setSelectedTab(selectedTab))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);