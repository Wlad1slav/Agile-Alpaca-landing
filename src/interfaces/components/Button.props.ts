interface ButtonProps {
    type?: 'submit' | 'reset' | 'button';
    text: string;
    margin?: MarginCssClasses;
    buttonStyle: 'outline' | 'filling';
    size?: 'small' | 'long';
    icon?: string | JSX.Element;
}