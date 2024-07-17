import RadioButton from "@/components/_general/radio/RadioButton";
import './styles/radio-container.scss';

function RadioContainer({label, buttons, onChange, ...props}: RadioContainerProps) {

    return (
        <div className="radio-container" {...props}>
            <label className="radio-container__main-label">{label}</label>
            {buttons.map((value) => {
                return <RadioButton key={value.value} {...value} onChange={onChange} />
            })}
        </div>
    );
}

export default RadioContainer;