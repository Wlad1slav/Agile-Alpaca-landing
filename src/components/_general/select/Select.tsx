import './styles/select.scss';

function Select({options, name, placeholder, value, onChange, label, ...props}: SelectProps) {

    return (
        <div className="select" {...props}>
            <label>{label}</label>
            <select name={name} value={value} onChange={onChange}>
                {options.map((option) => <option key={option.value} value={option.value}>{option.text}</option>)}
            </select>
        </div>
    );
}

export default Select;