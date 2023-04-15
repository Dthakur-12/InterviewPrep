import React,{Suspense} from 'react'
// import A from './Components/FirstFunctional'
import CheckUser from './Components/conditionalRendering/CheckUser'
import Ternary from './Components/conditionalRendering/Ternary'
import FirstClassComp from './Components/FirstClassComp'
import LifeCyclemethods from './Components/ReactLifecyclemethods/LifeCyclemethods'
import HooksEx from './Components/Hooks/HooksEx'
import SideEffect from './Components/Hooks/SideEffect'
import ControlledComp from './Components/Forms/ControlledComp'
import UnControllComponent from './Components/Forms/UnControllComponent'
import StateLiftinUp from './Components/Upliftingstate/StateLiftinUp'
import ComponentA from './Components/Propdrilling/ComponentA'
import RoutesFile from './Components/Routes/RoutesFile'
import ClickCoutner from './Components/Hoc/ClickCoutner'
import HoverCounter from './Components/Hoc/HoverCounter'
import FetchAPiCall from './Components/API Call/FetchAPiCall'
import AxiosCall from './Components/API Call/AxiosCall'
import OptMemo from './Components/UseMemo/OptMemo'
import OptUseCallback from './Components/UseMemo/OptUseCallback'
import CounterState from './Components/UseReducer/CounterState'
import CounterwithReducer from './Components/UseReducer/CounterwithReducer'
import DemoUseState from './Components/Interview Prep/DemoUseState'
import DemoUseEffect from './Components/Interview Prep/DemoUseEffect'
import DemoUsememo from './Components/Interview Prep/DemoUsememo'
import DemouseRef from './Components/Interview Prep/DemouseRef'
// const LazyComp=React.lazy(()=>import('./Components/Lazy Loading/LazyComponent'));







const App = () => {
//   // const name="Durgesh"
  const getData=(data)=>{
    console.log("this data is from parent component",data);
  }


  
  return (
    <>
   
    {/* <RoutesFile/> */}
    {/* <ClickCoutner/>
    <HoverCounter/> */}
    {/* <FetchAPiCall/> */}
    {/* <AxiosCall/> */}
    {/* <OptMemo/> */}
    {/* <OptUseCallback/> */}
    <StateLiftinUp getName={getData}/>
    {/* <CounterState/> */}
    {/* <CounterwithReducer/> */}
{/* <Suspense fallback={<div><h1>Loading....... Data is coming</h1></div>}>
<LazyComp/>
</Suspense> */}
{/* <DemoUseState/> */}
{/* <DemoUseEffect/> */}
{/* <DemoUsememo/> */}
 {/* <LifeCyclemethods/> */}

{/* <DemouseRef/>    */}
    </>
  
  )
}

export default App