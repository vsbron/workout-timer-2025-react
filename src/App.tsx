import Footer from "@/ui/Footer";
import Header from "@/ui/Header";
import Main from "@/ui/Main";
import Timer from "./components/Timer";
import Controls from "./components/Controls";

function App() {
  // Returned JSX
  return (
    <>
      <Header />
      <Main>
        <Timer />
        <Controls />
      </Main>
      <Footer />
    </>
  );
}

export default App;
