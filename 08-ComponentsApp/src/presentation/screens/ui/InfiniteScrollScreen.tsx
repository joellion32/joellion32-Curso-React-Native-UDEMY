import { ActivityIndicator, FlatList, Image, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../../config/theme'
import { FadeInImage } from '../../components/ui/FadeInImage'

export const InfiniteScrollScreen = () => {
    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5])

    const loadMore = () => {
        const newArray = Array.from({ length: 5 }, (_, i) => numbers.length + i)

        setTimeout(() => {
            setNumbers([...numbers, ...newArray])
        }, 3000)
    }

    return (
        <View style={{ backgroundColor: 'black' }}>
            <FlatList
                data={numbers}
                onEndReached={loadMore}
                onEndReachedThreshold={0.6}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => <LisItem number={item} />}
                ListFooterComponent={() => (
                    <View style={{ height: 150, justifyContent: 'center' }}>
                        <ActivityIndicator size={40} color={colors.primary} />
                    </View>
                )}
            />
        </View>
    )
}

interface LisItemProps {
    number: number;
}

const LisItem = ({ number }: LisItemProps) => {
    return (
        <FadeInImage uri={`https://picsum.photos/id/${number}/500/400`}
            style={{
                height: 400,
                width: '100%'
            }}
        />
    )
}

