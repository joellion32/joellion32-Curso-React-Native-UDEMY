import { View } from 'react-native'
import React from 'react'
import { globalStyles } from '../../../config/theme';
import { ScrollView } from 'react-native-gesture-handler';
import { Title } from '../../components/ui/Title';
import { animationMenuItems, menuItems, uiMenuItems } from './menu-items';
import { MenuItem } from '../../components/ui/MenuItem';

export const HomeScreen = () => {
    return (
        <View style={globalStyles.mainContainer}>
            <View style={globalStyles.globalMargin}>
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
            </View>
        </View>
    )
}



