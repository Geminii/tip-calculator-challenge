import { InputWithLabel } from 'components/InputWithLabel'
import { ReactComponent as Logo } from './assets/logo.svg'
import { ReactComponent as DollarIcon } from './assets/icon-dollar.svg'
import { ReactComponent as PersonIcon } from './assets/icon-person.svg'
import { CalculatorLine } from 'components/CalculatorLine'
import { SelectorTip } from 'components/SelectorTip'

function App() {
  return (
    <div className="min-h-screen w-full bg-neutral-light-grayish-cyan">
      <div className="flex h-screen flex-col items-center justify-center">
        <Logo className="mb-6 lg:mb-12" />

        <div className="flex w-full flex-col justify-between gap-12 rounded-lg bg-white p-6 lg:max-w-[924px] lg:flex-row lg:py-8 lg:pl-12 lg:pr-9">
          <div className="flex w-full flex-col gap-11 lg:w-1/2">
            <InputWithLabel id="bill" title="Bill" value={142.55}>
              <DollarIcon />
            </InputWithLabel>
            <SelectorTip title="Select Tip %" />
            <InputWithLabel
              id="number-people"
              title="Number of People"
              value={0}
            >
              <PersonIcon />
            </InputWithLabel>
          </div>
          <div className="flex w-full flex-col justify-between gap-6 rounded-lg bg-neutral-dark-cyan py-10 pl-12 pr-9 lg:min-h-[416px] lg:w-1/2">
            <div className="flex flex-col gap-12">
              <CalculatorLine
                title="Tip Amount"
                description="person"
                amount={4.27}
              />
              <CalculatorLine
                title="Total"
                description="person"
                amount={32.79}
              />
            </div>

            <button className="w-full rounded-md bg-primary py-2 text-center uppercase text-neutral-dark-cyan shadow-sm">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
