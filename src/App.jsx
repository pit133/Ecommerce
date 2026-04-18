import Button from './components/Button/Button';
import IconButton from "./components/IconButton/IconButton";
const App = () => {
  return (
    <div>
      <Button content='Apply Filters'/>
      <Button content='+' signButton={true} />
      <IconButton icon={
        <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.833496 0.833334H2.50016L4.71683 11.1833C4.79814 11.5624 5.00905 11.9012 5.31326 12.1415C5.61746 12.3819 5.99592 12.5086 6.3835 12.5H14.5335C14.9128 12.4994 15.2806 12.3694 15.576 12.1315C15.8715 11.8937 16.0769 11.5621 16.1585 11.1917L17.5335 5H3.39183" stroke="#0A0A0A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      }/>
    </div>
  )
}

export default App