import { Dimensions, Platform } from 'react-native'

let HederHeight = Platform.OS === 'ios' ? 66 : 46

let FooterHeight = 55

const constants = {
    hedaerHeight: HederHeight,
    footerHeight: FooterHeight,
    viewHeight: Dimensions.get('window').height - HederHeight,
    screenHeight: Dimensions.get('window').height,
    screenWidth: Dimensions.get('window').width
}

export default constants

