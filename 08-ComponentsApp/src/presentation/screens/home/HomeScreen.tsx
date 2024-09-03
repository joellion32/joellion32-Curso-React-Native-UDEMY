import { View } from 'react-native'
import React, { useContext } from 'react'
import { globalStyles } from '../../../config/theme';
import { ScrollView } from 'react-native-gesture-handler';
import { Title } from '../../components/ui/Title';
import { animationMenuItems, menuItems, uiMenuItems } from './menu-items';
import { MenuItem } from '../../components/ui/MenuItem';
import { ThemeContext } from '../../context/ThemeContext';
import { CustomView } from '../../components/ui/CustomView';

export const HomeScreen = () => {
    const { colors } = useContext(ThemeContext)

    return (
        <CustomView style={globalStyles.globalMargin}>
            <ScrollView>
                <Title text="Opciones del menú" safe={true} />
                {
                    animationMenuItems.map((item, index) => (
                        <MenuItem
                            key={item.component}
                            {...item}
                            isFirst={index === 0}
                            isLast={index === menuItems.length - 1}
                        />
                    ))
                }

                <View style={{ height: 10 }} />

                {
                    menuItems.map((item, index) => (
                        <MenuItem
                            key={item.component}
                            {...item}
                            isFirst={index === 0}
                            isLast={index === menuItems.length - 1}
                        />
                    ))
                }

                <View style={{ height: 10 }} />

                {
                    uiMenuItems.map((item, index) => (
                        <MenuItem
                            key={item.component}
                            {...item}
                            isFirst={index === 0}
                            isLast={index === menuItems.length - 1}
                        />
                    ))
                }
            </ScrollView>
        </CustomView>
    )
}



