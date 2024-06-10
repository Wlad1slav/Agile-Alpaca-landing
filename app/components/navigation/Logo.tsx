import './styles/logo.scss';

function Logo() {
    return (
        <a href="/" className='logo'>
            <img src="/images/logo.webp" alt="Alpaca Agile logo"/>
            <span>/ agile-alpaca</span>
        </a>
    );
}

export default Logo;