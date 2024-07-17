interface RadioContainerProps {
    label: string;
    buttons: Array<RadioButtonProps>;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}