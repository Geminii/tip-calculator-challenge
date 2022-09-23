type CalculatorLineProps = {
  title: string
  description: string
  amount: number
}

export const CalculatorLine = ({
  title,
  description,
  amount
}: CalculatorLineProps) => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex flex-col">
        <p className="text-white">{title}</p>
        <span className="text-sm text-neutral-dark-grayish-cyan">
          / {description}
        </span>
      </div>
      <p className="text-3xl text-primary">${amount.toFixed(2)}</p>
    </div>
  )
}
