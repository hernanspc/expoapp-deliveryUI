import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FONTS } from '../constants'

const Header = ({ containerStyle, title, leftComponent, rightComponent }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                ...containerStyle
            }}
        >
            {/* LEFT */}
            {leftComponent}

            {/* TITLE */}
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Text style={{ ...FONTS.h3 }}>
                    {title}
                </Text>
            </View>

            {/* RIGHT */}
            {rightComponent}
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})