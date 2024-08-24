import React, { useState } from 'react'
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { RefreshControl, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { colors } from '../../../config/theme'


export const PullToRefreshScreen = () => {
    const [isRefreshing, setIsRefreshing] = useState(false)
    const { top } = useSafeAreaInsets()

    const onRefresh = () => {
        setIsRefreshing(true)

        setTimeout(() => {
            setIsRefreshing(false)
        }, 2000)
    }


    return (
        <ScrollView refreshControl={
            <RefreshControl
                refreshing={isRefreshing}
                progressViewOffset={top}
                onRefresh={onRefresh}
                colors={[colors.primary, 'red', 'orange', 'green']}
            />}>

            <CustomView margin>
                <Title text='Pull to refresh' safe />
            </CustomView>
        </ScrollView>
    )
}