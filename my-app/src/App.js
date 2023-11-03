import css from './App.module.css';
import ClassCounter from './components/ClassCounter';
import ControlledForm from './components/ControlledForm';
import ControlledFormHooks from './components/ControlledFormHooks';
import HooksCounter from './components/HooksCounter';
import UseStateWithArrays from './components/UseStateWithArrays';

function App() {
  return (
    <div className={css.App}>
      {/* <ClassCounter />
      <HooksCounter /> */}
      {/* <ControlledForm /> */}
      {/* <ControlledFormHooks /> */}
      <UseStateWithArrays />
    </div>
  );
}

export default App;