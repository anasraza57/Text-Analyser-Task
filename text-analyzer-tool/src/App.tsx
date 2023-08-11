import './App.scss'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import TextAnalyser from "./components/TextAnalyser";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <TextAnalyser />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
