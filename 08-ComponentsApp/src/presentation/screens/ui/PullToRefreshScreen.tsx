import React, { useContext, useState } from 'react'
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { RefreshControl, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ThemeContext } from '../../context/ThemeContext'


export const PullToRefreshScreen = () => {
    const [isRefreshing, setIsRefreshing] = useState(false)
    const { top } = useSafeAreaInsets()
    const { colors } = useContext(ThemeContext)

    const onRefresh = () => {
        setIsRefreshing(true)

        setTimeout(() => {
            setIsRefreshing(false)
        }, 2000)
    }


    return (
        <ScrollView style={{ backgroundColor: colors.background }} refreshControl={
            <RefreshControl
                refreshing={isRefreshing}
                progressViewOffset={top}
                onRefresh={onRefresh}
                progressBackgroundColor={colors.cardBackground}
                colors={[colors.primary, 'red', 'orange', 'green']}
            />}>

            <CustomView margin>
                <Title text='Pull to refresh' safe />
            </CustomView>
        </ScrollView>
    )
}
