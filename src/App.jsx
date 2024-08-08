import Header from "./components/Header";
import Content from "./components/Content";
import Preview from "./components/Preview";
import CompanysLogo from "./components/CompanysLogo";
import Bottom from "./components/Bottom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-baiJamjuree flex flex-col gap-20">
      <Header />
      <Content />
      <Preview />
      <CompanysLogo />
      <Bottom />
      <Footer />
    </div>
  );
}

export default App;
