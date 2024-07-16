import './style/field.scss';

function Field({children, error, helpText}: Readonly<FieldProps>) {

    return (
        <div className="field">
            {children}

            <div className="additional-text">
                { (helpText && !error) && <p className="field--help">{helpText}</p> }
                { error && <p className="field--error">{error}</p> }
            </div>
        </div>
    );
}

export default Field;