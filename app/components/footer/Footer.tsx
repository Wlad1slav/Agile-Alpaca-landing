import './style/footer.scss';

function Footer() {
    return (
        <footer>
            <div className="head">
                <div style={{
                    borderBottom: "2px solid rgb(60,60,60)",
                    borderRight: "2px solid rgb(60,60,60)",
                    paddingRight: "30%"
                }}>
                    <h3>Contacts</h3>
                    <ul>
                        <li><a href="mailto:info@alpaca-agile@gmail.com">info@alpaca-agile@gmail.com</a></li>
                        <li><a href="tel:21453253443">+21 45325 3443</a></li>
                    </ul>
                </div>

                <div style={{
                    borderBottom: "2px solid rgb(60,60,60)",
                    borderRight: "2px solid rgb(60,60,60)",
                    paddingRight: "15%",
                    paddingLeft: "1%"
                }}>
                    <h3>Our services</h3>
                    <ul>
                        <li><a href="/">Creating a Shopify store</a></li>
                        <li><a href="/">Creating a Shopify store</a></li>
                        <li><a href="/">Creating a Shopify store</a></li>
                        <li><a href="/">Creating a Shopify store</a></li>
                        <li><a href="/">Creating a Shopify store</a></li>
                        <li><a href="/">Creating a Shopify store</a></li>
                    </ul>
                </div>

                <div style={{
                    borderBottom: "2px solid rgb(60,60,60)",
                    paddingRight: "10%",
                    paddingLeft: "1%"
                }}>
                    <h3>We are on social networks</h3>
                    <ul>
                        <li><a href="/">LinkendIn</a></li>
                        <li><a href="/">GitHub</a></li>
                    </ul>
                </div>
            </div>

            <div className="foot">
                <p>© 2024 by Agile-Alpaca</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan iaculis tortor, vel bibendum lectus mattis et.</p>
            </div>
        </footer>
    );
}

export default Footer;