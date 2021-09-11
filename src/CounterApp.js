import CounterWithHook from './CustomHooks/Counter'
import CounterWithHook2 from './CustomHooks/Counter2';
import HOCCounter from './HOCs/Counter';
import HOCCounter2 from './HOCs/Counter2';
import Counter from './renderProps/Counter';

function CounterApp() {

    //~~~~~~~UNCOMMENT APPROPRIATE SECTION TO SEE EXAMPLE WITH EACH DESIGN PATTERN~~~~~~~
 
    //**********RENDER PROPS************/
    // return (
    //     <>
    //         <Counter>
    //             {({count, increase, reset}) => (
    //                  <div>
    //                      <h1>{count}</h1>
    //                      <button onClick={increase}>Increase</button>
    //                      <button onClick={reset}>reset</button>
    //                  </div>
    //              )}
    //         </Counter>
    //         <Counter>
    //            {({decrease, count, increase, reset}) => (
    //              <div>
    //                  <h1>{count <=5 ? count : 5}</h1>
    //                  <button onClick={increase}>Increase</button>
    //                  <button onClick={decrease}>Decreease</button>
    //                  <button onClick={reset}>reset</button>
    //              </div>
    //          )}
    //         </Counter> 
    //     </>
    // )

    //*************HIGER ORDER COMPONENTS*******************/
    //   return (
    //     <>
    //         <HOCCounter />
    //         <HOCCounter2 name={"Garrett"}/>
    //     </>
    //   );

    //*************CUSTOM HOOK*******************/
    //   return (
    //     <>
    //         <CounterWithHook />
    //         <CounterWithHook2 />
    //     </>
    //   );
}

export default CounterApp;