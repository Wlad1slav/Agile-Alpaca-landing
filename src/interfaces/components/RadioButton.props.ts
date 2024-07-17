interface RadioButtonProps {
    name: string;
    value: string;
    id?: string;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
}