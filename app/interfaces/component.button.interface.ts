interface ComponentButtonInterface {
    url: string;
    text: string;
    margin?: CssClassMarginInterface;
    buttonStyle: 'outline' | 'filling';
    size?: 'small' | 'long';
    icon?: string | JSX.Element;
}