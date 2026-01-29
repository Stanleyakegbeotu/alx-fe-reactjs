import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      <Header />
      {/* Passing different data to the same component using props */}
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <UserProfile name="John" age="30" bio="Avid traveler and foodie" />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
