import './styles/gs-button.scss';

function GSButton({text}: Readonly<{
    text: string;
}>) {
    return (
        <button type='submit' className="get-start--button">
            {text}
        </button>
    );
}

export default GSButton;