interface SelectProps {
    options: Array<SelectOption>;
    name: string;
    placeholder?: string;
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}