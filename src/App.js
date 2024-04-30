import React from 'react'
import ErrorComponent from "./components/ErrorComponent/ErrorComponent";
import {Header} from "./components/Header";
import {CounterComponent} from "./components/CounterComponent";
import {UseEffectExample} from "./components/UseEffectExample";
import {UseMemoExample} from "./components/UseMemoExample";
import {UseCallbackExample} from "./components/UseCallbackExample";
import UseLayotEffectExample from "./components/UseLayotEffectExample/UseLayotEffectExample";
import UseCustomHookExample from "./components/UseCustomHookExample/UseCustomHookExample";
import {UseRefExample} from "./components/UseRefExample";
import CssModulesExample from "./components/CssModulesExample/CssModulesExample";
import {CssPreprocessorsExample} from "./components/CssPreprocessorsExample";
import {ExternalCssExample} from "./components/ExternalCssExample";

class App extends React.Component {

render () {
    return (
        <div className="App">
            <ErrorComponent>
               <Header />
                {/*<CounterComponent />*/}
                {/*<UseEffectExample />*/}
                {<UseCallbackExample />}
                {/*<UseLayotEffectExample />*/}
                {/*<UseCustomHookExample />*/}
                {/*<UseRefExample />*/}
                {/*<UseMemoExample />*/}
                {/*<ExternalCssExample />*/}
                {/*<CssModulesExample />*/}
                {/*<CssPreprocessorsExample />*/}
            </ErrorComponent>
        </div>
    );
}

}

export default App;
