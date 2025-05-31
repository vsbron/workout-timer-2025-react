import Footer from "@/ui/Footer";
import Header from "@/ui/Header";
import Main from "@/ui/Main";
import Timer from "./components/Timer";
import Controls from "./components/Controls";
import Options from "./components/Options";

function App() {
  // Returned JSX
  return (
    <>
      <Header />
      <Main>
        <Timer />
        <Controls />
        <Options />
      </Main>
      <Footer />
    </>
  );
}

export default App;
