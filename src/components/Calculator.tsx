import { InputWithLabel } from 'components/InputWithLabel'
import { ReactComponent as DollarIcon } from '../assets/icon-dollar.svg'
import { ReactComponent as PersonIcon } from '../assets/icon-person.svg'
import { CalculatorLine } from 'components/CalculatorLine'
import { SelectorTip } from 'components/SelectorTip'
import { useEffect, useState } from 'react'

export const Calculator = () => {
  const [bill, setBill] = useState(0)
  const [numberOfPeople, setNumberOfPeople] = useState(0)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0)
  const [totalPerPerson, setTotalPerPerson] = useState(0)
  const [tip, setTip] = useState<number | null>(null)

  const calculate = () => {
    setErrorMessage('')

    if (numberOfPeople === 0) {
      setErrorMessage("Can't be zero")
      setTipAmountPerPerson(0)
      setTotalPerPerson(0)

      return
    }

    const calculatedTipAmountPerPerson = tip ? tip / 100 / numberOfPeople : 0
    const calculatedTotal = tip
      ? bill + (bill * (tip / 100)) / numberOfPeople
      : bill / numberOfPeople

    setTipAmountPerPerson(calculatedTipAmountPerPerson)
    setTotalPerPerson(calculatedTotal)
  }

  const handleReset = () => {
    setBill(0)
    setTip(null)
    setNumberOfPeople(0)
    setTipAmountPerPerson(0)
    setTotalPerPerson(0)
  }

  useEffect(() => {
    if (bill > 0) calculate()
  })

  return (
    <div className="flex w-full flex-col justify-between gap-12 rounded-lg bg-white p-6 lg:max-w-[924px] lg:flex-row lg:py-8 lg:pl-12 lg:pr-9">
      <div className="flex w-full flex-col gap-11 lg:w-1/2">
        <InputWithLabel
          id="bill"
          title="Bill"
          value={bill}
          setValue={(value) => setBill(value)}
        >
          <DollarIcon />
        </InputWithLabel>
        <SelectorTip
          title="Select Tip %"
          selected={tip}
          handleChange={(value) => setTip(value)}
        />
        <InputWithLabel
          id="number-people"
          title="Number of People"
          value={numberOfPeople}
          setValue={(nbPeople) => setNumberOfPeople(nbPeople)}
          errorMessage={errorMessage}
        >
          <PersonIcon />
        </InputWithLabel>
      </div>
      <div className="flex w-full flex-col justify-between gap-6 rounded-lg bg-neutral-dark-cyan py-10 pl-12 pr-9 lg:min-h-[416px] lg:w-1/2">
        <div className="flex flex-col gap-12">
          <CalculatorLine
            title="Tip Amount"
            description="person"
            amount={tipAmountPerPerson}
          />
          <CalculatorLine
            title="Total"
            description="person"
            amount={totalPerPerson}
          />
        </div>

        <button
          className="w-full rounded-md bg-primary py-2 text-center uppercase text-neutral-dark-cyan shadow-sm"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  )
}
