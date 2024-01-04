import { ParallaxProvider } from "react-scroll-parallax";
import Demo from "./components/Parallax/Parallax";

function App() {
  return (
    <>
      <ParallaxProvider>
        <Demo />
        {/* <Homepage /> */}
        {/* <Main/> */}
      </ParallaxProvider>

  
    </>
  );
}

export default App;
