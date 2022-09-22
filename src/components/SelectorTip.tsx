type SelectorTipProps = {
  title: string
}

export const SelectorTip = ({ title }: SelectorTipProps) => {
  const tips = [5, 10, 15, 25, 50]

  return (
    <div>
      <label
        htmlFor={title.toLowerCase()}
        className="text-neutral-grayish-cyan"
      >
        {title}
      </label>
      <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-3">
        {tips.map((tip) => (
          <button
            key={tip}
            className="rounded-md bg-neutral-dark-cyan py-2 text-white transition-colors duration-200 ease-in-out hover:bg-neutral-light-grayish-cyan hover:text-neutral-dark-cyan"
          >
            {tip}%
          </button>
        ))}

        <button className="rounded-md bg-neutral-dark-cyan py-2 text-white transition-colors duration-200 ease-in-out hover:bg-neutral-light-grayish-cyan hover:text-neutral-dark-cyan">
          Custom
        </button>
      </div>
    </div>
  )
}
