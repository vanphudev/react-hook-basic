import Header from "./views/components/Header/header";
import Footer from "./views/components/Footer/footer";
import "./styles/App.scss";

function App() {
   return (
      <div className='App'>
         <Header />
         <div className='container'>
            <h1 className='text-center mt-5'>Welcome to React Phú Devloper</h1>
            <p className='text-center mt-3'>This is a simple React app with Bootstrap 5.</p>
         </div>
         <Footer />
      </div>
   )
}

export default App;
