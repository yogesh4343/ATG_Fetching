
import './App.css';
import UserHeading from './Assets/UserHeading';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ListGridLine from './Components/ListGridLine';
import NavBar from './Components/NavBar';
import NewCardContainer from './Components/NewCardContainer';
import Testnomials from './Components/Testnomials';

function App() {
  return (
    <div className="App ">
    <NavBar />
    <Header />
    <UserHeading font="[40px]" name="User Heading" text="center" />
    <ListGridLine />
    <NewCardContainer />
    <Testnomials />
    <Footer />
    </div>
  );
}

export default App;
