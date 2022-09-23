import { Calculator } from 'components/Calculator'
import { ReactComponent as Logo } from './assets/logo.svg'

function App() {
  return (
    <div className="min-h-screen w-full bg-neutral-light-grayish-cyan">
      <div className="flex h-screen flex-col items-center justify-center">
        <Logo className="mb-6 lg:mb-12" />

        <Calculator />
      </div>
    </div>
  )
}

export default App
