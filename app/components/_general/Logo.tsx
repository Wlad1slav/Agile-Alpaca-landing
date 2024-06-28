import './logo.scss';

function Logo({withName = true}: Readonly<{
    withName?: boolean;
}>) {
    return (
        <a href="/" className='logo'>
            <img src="/images/logo.webp" alt="Alpaca Agile logo"/>
            {withName && <span>/ agile-alpaca</span>}
        </a>
    );
}

export default Logo;