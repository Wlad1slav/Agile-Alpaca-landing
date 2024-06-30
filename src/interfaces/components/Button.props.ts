interface ButtonProps {
    url: string;
    text: string;
    margin?: MarginCssClasses;
    buttonStyle: 'outline' | 'filling';
    size?: 'small' | 'long';
    icon?: string | JSX.Element;
}