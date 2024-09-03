import React, { useContext, useState } from 'react'
import { Title } from '../../components/ui/Title'
import { CustomView } from '../../components/ui/CustomView'
import { Card } from '../../components/ui/Card'
import { TextInput, View, Text } from 'react-native'
import { globalStyles } from '../../../config/theme'
import { ThemeContext } from '../../context/ThemeContext'

export const TextInputScreen = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const { colors } = useContext(ThemeContext)

    return (
        <CustomView margin>
            <Title safe text={'Text Inputs'} />

            <Card>
                <TextInput
                    style={globalStyles.input}
                    placeholderTextColor={colors.text}
                    onChangeText={value => setForm({ ...form, name: value })}
                    placeholder='Nombre completo'
                    autoCapitalize={'words'}
                    autoCorrect={false}
                />

                <TextInput
                    style={globalStyles.input}
                    placeholderTextColor={colors.text}
                    onChangeText={value => setForm({ ...form, email: value })}
                    placeholder='Correo Electronico'
                    keyboardType='email-address'
                />

                <TextInput

                    style={globalStyles.input}
                    placeholderTextColor={colors.text}
                    onChangeText={value => setForm({ ...form, phone: value })}
                    placeholder='Telefono'
                    keyboardType='phone-pad'
                />
            </Card>

            <View style={{ height: 10 }} />


            <Card>
                <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
            </Card>
        </CustomView>
    )
}

