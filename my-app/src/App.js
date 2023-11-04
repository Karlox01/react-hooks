import css from './App.module.css';
import ClassCounter from './components/ClassCounter';
import ControlledForm from './components/ControlledForm';
import ControlledFormHooks from './components/ControlledFormHooks';
import HooksCounter from './components/HooksCounter';
import StatefulGreetingWithPrevStateHooks from './components/StatefulGreetingWithPrevStateHooks';
import UseEffectCounter from './components/UseEffectCounter';
import UseStateWithArrays from './components/UseStateWithArrays';
import UseStateWithObjects from './components/UseStateWithObjects';

function App() {
  return (
    <div className={css.App}>
      {/* <ClassCounter />
      <HooksCounter /> */}
      {/* <ControlledForm /> */}
      {/* <ControlledFormHooks /> */}
      {/* <UseStateWithArrays /> */}
      {/* <UseStateWithObjects /> */}
      {/* <StatefulGreetingWithPrevStateHooks /> */}
      <UseEffectCounter />
    </div>
  );
}

export default App;