import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackFrom";
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext'


function App() {

    return ( //Sadece bir element döndürebiliriz
        <FeedbackProvider>
        <Router>
        <Header /> {/* Jsx dosyasındaki componenti app'de kullanma */}
        <div className="container">
            <Routes>
                <Route exact path = "/" element = {
                    <>
                    <FeedbackForm  />
                    <FeedbackStats />
                    <FeedbackList  />
                    </>
                }>
                </Route>      
                <Route path = "/about" element= {<AboutPage />} />
            </Routes>
         <AboutIconLink />      
        </div>
        </Router>
        </FeedbackProvider>
    )
}


export default App;