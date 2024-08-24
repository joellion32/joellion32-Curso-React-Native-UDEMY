import prompt from 'react-native-prompt-android';

interface Options {
    title: string;
    subTitle?: string;
    buttons: PromptButton[];
    prompType?: 'default' | 'plain-text' | 'secure-text',
    placeholder?: string;
    defaulValue?: string;
}

interface PromptButton {
    text: string;
    onPress: () => void;
    style?: 'cancel' | 'default' | 'destructive'
}


export const showPrompt = ({
    title,
    subTitle,
    buttons,
    prompType = 'plain-text',
    placeholder,
    defaulValue
}: Options) => {
    prompt(
        title,
        subTitle,
        buttons,
        {
            type: prompType,
            cancelable: false,
            defaultValue: defaulValue,
            placeholder: placeholder
        }
    )
}