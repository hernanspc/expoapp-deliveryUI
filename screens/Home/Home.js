import React from 'react';
import {
    View,
    Text,
    Image,
    TextInput
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, FONTS, icons, SIZES } from '../../constants';

const Home = () => {

    function renderSearch() {
        return (
            <View
                style={{
                    flexDirection: 'row', height: 40, alignItems: 'center',
                    marginHorizontal: SIZES.padding,
                    marginVertical: SIZES.base,
                    paddingHorizontal: SIZES.radius,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.lightGray2
                }}
            >
                <Image
                    source={icons.search}
                    style={{ height: 20, width: 20, tintColor: COLORS.black }}
                />

                <TextInput
                    style={{ flex: 1, marginLeft: SIZES.radius, ...FONTS.body3 }}
                    placeholder='search food...'
                />

                <TouchableOpacity>
                    <Image
                        source={icons.filter}
                        style={{ height: 20, width: 20, tintColor: COLORS.black }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
            }}
        >
            {/* Search */}
            {renderSearch()}
            {/* List */}
        </View>
    )
}

export default Home;