import PromisesDemo, { CallbackHellSolution } from "./PromisesComponent";
import CallbackHell from "./CallbackHell";

function App() {
  return (
    <div className="App">
      <PromisesDemo />
      <h2>this project is to learn about asynchronous javascript</h2>
      <CallbackHell />
      <CallbackHellSolution />
    </div>
  );
}

//setTimeout(timeoutExampleFunction, 5000, "praveen") =  first param is func, second is time in milliseconds, after that we can pass all the arguments for the callback function
//we can also cancel the timout by using clearTimeout() and passing the ref of timout function

//setInterval will include the time taken by the function to run into the interval time for recalls
//so we can consider using recurssive setTimout function for consistence callbacks if we know our function is going to take some time to finish and we want consistant callbacks
/*setTimout(function recFunc(){
    yourComplexFunction()
    setTimout(recFunc, interval);
}, interval); 
  
*/
export default App;
