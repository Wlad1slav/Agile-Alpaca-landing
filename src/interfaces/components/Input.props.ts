interface InputProps {
    placeholder: string;
    name: string;
    type: InputTypes;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    margin?: MarginCssClasses;
    error?: string;
    helpText?: string;
    required?: boolean;
    min?: number;
    max?: number;
}
