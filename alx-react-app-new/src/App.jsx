// 1. Import the Counter component at the top
import Counter from './components/Counter'; 
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      
      {/* 2. Place the <Counter /> tag inside the return statement */}
      {/* I've wrapped it in a div for better spacing */}
      <div style={{ padding: '20px' }}>
        <Counter />
      </div>

      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
