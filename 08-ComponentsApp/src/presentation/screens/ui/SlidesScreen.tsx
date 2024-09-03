import { FlatList, ImageSourcePropType, Text, useWindowDimensions, View, Image, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import React, { useContext, useRef, useState } from 'react'
import { globalStyles } from '../../../config/theme';
import Button from '../../components/ui/Button';
import { ThemeContext } from '../../context/ThemeContext';

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType;
}


const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../../assets/slide-1.png'),
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../../assets/slide-2.png'),
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../../assets/slide-3.png'),
    },
];

export const SlidesScreen = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
    const flatLisRef = useRef<FlatList>(null)
    const { colors } = useContext(ThemeContext)

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const { contentOffset, layoutMeasurement } = event.nativeEvent
        const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width)

        // estado para ocultar el boton cuando esta en el ultimo slide
        setCurrentSlideIndex(currentIndex > 0 ? currentIndex : 0)
    }


    // avanzar hacia el proximo slide
    const scrollToSlide = (index: number) => {
        if (!flatLisRef.current) return;

        flatLisRef.current.scrollToIndex({ index: index, animated: true })
    }


    return (
        <View style={{
            flex: 1,
            backgroundColor: colors.background

        }}>
            <FlatList
                ref={flatLisRef} // ir a la pantalla por indice 
                data={items}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => <SlideItem item={item} />}
                horizontal
                pagingEnabled
                scrollEnabled={true}
                showsHorizontalScrollIndicator={false}
                onScroll={(ev) => onScroll(ev)} // capturar argumentos cuando hacemos scroll
            />

            {
                currentSlideIndex == items.length - 1 ? (

                    <Button
                        styles={{ position: 'absolute', bottom: 60, right: 30, width: 100 }}
                        text={'Finalizar'}
                        onPress={() => scrollToSlide(0)}
                    />
                ) : (
                    <Button
                        styles={{ position: 'absolute', bottom: 60, right: 30, width: 100 }}
                        text={'Siguiente'}
                        onPress={() => scrollToSlide(currentSlideIndex + 1)}
                    />
                )
            }



        </View>
    )
}


interface SlideItemProps {
    item: Slide;
}

const SlideItem = ({ item }: SlideItemProps) => {
    const { width } = useWindowDimensions()
    const { title, desc, img } = item
    const { colors } = useContext(ThemeContext)

    return (
        <View style={{
            flex: 1,
            backgroundColor: colors.background,
            borderRadius: 5,
            padding: 40,
            justifyContent: 'center',
            width: width
        }}>
            <Image
                source={img}
                style={{
                    width: width * 0.7,
                    height: width * 0.7,
                    resizeMode: 'center',
                    alignSelf: 'center'
                }}
            />

            <Text style={[globalStyles.title, { color: colors.primary }]}>{title}</Text>
            <Text style={{ color: colors.text, marginTop: 20 }}>{desc}</Text>

        </View>
    )
}