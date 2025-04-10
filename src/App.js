import { Routes, Route } from 'react-router-dom';
import FormApp from './FormHandling/FormApp.js'
import DictionaryApp from './DictionaryLookup/DictionaryApp';
import FlipApp from './CoinFlipGame/FlipApp';
import WeatherApp from './WeatherApp/WeatherApp';
import PasswordValidator from './PasswordValidator/PasswordValidator';
import IPAddress from './IPAddressTracker/IPAddress.js';
import MainNavigation from './MainNavigation';

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/form-handling" element={<FormApp />} />
        <Route path="/dictionary-lookup" element={<DictionaryApp />} />
        <Route path="/coin-flip-game" element={<FlipApp />} />
        <Route path="/weather-app" element={<WeatherApp />} />
        <Route path="/password-validator" element={<PasswordValidator />} />
        <Route path="/ip-address-tracker" element={<IPAddress />} />
      </Routes>
    </div>
  );
}

export default App;
