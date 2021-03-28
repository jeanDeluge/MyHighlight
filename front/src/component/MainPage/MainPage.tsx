import React from 'react';
import {Text, View, ImageBackground} from 'react-native';

const MainPage = () => {
    return(
        <View>
            <ImageBackground source={require('../../assets/img/cherry-blossom-444402_1920.jpeg')}>
                <Text> Main Page</Text>
            </ImageBackground>
        </View>
    )
}