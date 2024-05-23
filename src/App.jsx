import Header from "./components/Header";

const App = () => {

  return (
    <>
      <div className="w-full min-h-screen h-fit flex justify-center bg-white">
        <div id='page_container' className="w-full max-w-[1800px] flex flex-col items-center">
          <Header />
        </div>
      </div>
    </>
  );
}

export default App;
