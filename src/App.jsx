import Header from "./components/Headers";
import Home from "./pages/Home";
import Groups from "./pages/Groups";
import Questions from "./pages/Questions";
import Information from "./pages/Information";
import Footer from "./components/Footer";
import Message from "./components/Message";

export default function App() {

  return (
    <>
      <Header />
      <Home />
      <Information/>
      <Groups />
      <Questions />
      <Footer/>
      <Message/>
    </>
  )
}

