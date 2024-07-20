import Link from 'next/link';
import './logo.scss';

function Logo({withName = true}: Readonly<{
    withName?: boolean;
}>) {
    return (
        <Link href="/" title="Alpaca Agile" className='logo'>
            <img src="/images/logo.webp" alt="Alpaca Agile logo"/>
            {withName && <span>/ agile-alpaca</span>}
        </Link>
    );
}

export default Logo;