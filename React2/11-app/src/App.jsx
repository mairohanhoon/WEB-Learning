import { Button } from "./components/ui/button"
import DockDemo from "./Magic"
import Bendo from "./Bendo"
 
function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh ">
      <Button>Click me</Button>
      <DockDemo/>
      <Bendo/>
    </div>
  )
}
 
export default App