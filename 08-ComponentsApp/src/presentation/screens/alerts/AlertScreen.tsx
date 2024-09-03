import React, { useContext } from 'react'
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { globalStyles } from '../../../config/theme'
import Button from '../../components/ui/Button'
import { Alert, View } from 'react-native'
import { showPrompt } from '../../../config/adapters/prompt.adapter'
import { ThemeContext } from '../../context/ThemeContext'

export const AlertScreen = () => {
    const { isDark } = useContext(ThemeContext)
    console.log(isDark)

    const createTwoButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
            {
                userInterfaceStyle: isDark ? 'dark' : 'light'
            }
        );

    const createThreeButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Ask me later',
                onPress: () => console.log('Ask me later pressed'),
            },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
            { cancelable: true, userInterfaceStyle: isDark ? 'dark' : 'light' });


    const onShowPrompt = () => {
        showPrompt({
            title: 'Lorem Ipsum',
            subTitle: 'Example....',
            buttons: [
                { text: 'Ok', onPress: () => console.log('Ok') }
            ],
            placeholder: 'PlaceHolder'
        })
    }

    return (
        <CustomView style={globalStyles.globalMargin}>
            <Title safe text="Alertas" />

            <Button text="Alerta - 2 Botones" onPress={createTwoButtonAlert} />
            <View style={{ height: 10 }} />

            <Button text="Alerta - 3 Botones" onPress={createThreeButtonAlert} />
            <View style={{ height: 10 }} />

            <Button text="Prompt - Input" onPress={onShowPrompt} />

        </CustomView>
    )
}

