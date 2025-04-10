import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li><Link to="/form-handling">Form Handling</Link></li>
                    <li><Link to="/dictionary-lookup">Dictionary Lookup</Link></li>
                    <li><Link to="/coin-flip-game">Coin Flip Game</Link></li>
                    <li><Link to="/weather-app">Weather App</Link></li>
                    <li><Link to="/password-validator">Password Validator</Link></li>
                    <li><Link to="/ip-address-tracker">IP Address Tracker</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;