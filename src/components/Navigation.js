import { Link } from 'react-router-dom';

const Navigation = () => {
    const navStyling = {
        height: '50px',
        width: '100%',
        backgroundColor: "#ffffff",
        boxShadow: "0px 2px 4px #00000054"
    };

  return (
    <>
        <nav className='navStyling'>
            <div className="container">
                <div className="navWraper">
                    <div className="myLogo">
                        <img src="/img/pizza-logo.png" alt="Foo eating a sandwich." />
                    </div>
                    <ul className='items'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/Products'>Products</Link>
                        </li>
                        <li>
                            <Link to='/About'>About</Link>
                        </li>
                        <li>
                            <Link to='/Cart'>
                                <div className='cartBtn'>
                                <span>9</span>
                                    <img src='/img/cart-icon.png' alt='Cart' />
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navigation;