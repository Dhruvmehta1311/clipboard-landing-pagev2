import Header from "./components/Header";
import Content from "./components/Content";
import Preview from "./components/Preview";
import CompanysLogo from "./components/CompanysLogo";

function App() {
  return (
    <div className="font-baiJamjuree flex flex-col gap-20">
      <Header />
      <Content />
      <Preview />
      <CompanysLogo />
    </div>
  );
}

export default App;
