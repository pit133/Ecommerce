import Button from './components/Button/Button';
const App = () => {
  return (
    <div>
      <Button content='Apply Filters'/>
      <Button content='+' signButton={true} />
    </div>
  )
}

export default App