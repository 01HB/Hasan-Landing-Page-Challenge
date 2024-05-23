import Header from "./components/Header";
import Banner from "./components/Banner";

const App = () => {

  return (
    <>
      <div className="w-full min-h-screen h-fit flex justify-center bg-white">
        <div id='page_container' className="w-full max-w-[1800px] flex flex-col items-center">
          <Header />
          <Banner />
        </div>
      </div>
    </>
  );
}

export default App;
