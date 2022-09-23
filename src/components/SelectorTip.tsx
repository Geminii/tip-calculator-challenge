import classnames from 'classnames'
import { useEffect, useRef, useState } from 'react'

type SelectorTipProps = {
  title: string
  selected: number | null
  handleChange: (value: number) => void
}

export const SelectorTip = ({
  title,
  selected,
  handleChange
}: SelectorTipProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const tips = [5, 10, 15, 25, 50]
  const tipClass =
    'rounded-md bg-neutral-dark-cyan text-xl py-2 text-white transition-colors duration-200 ease-in-out hover:bg-neutral-light-grayish-cyan hover:text-neutral-dark-cyan'

  const toggleEditing = () => {
    setIsEditing(true)
  }

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus()
    }
  }, [isEditing])

  useEffect(() => {
    if (selected === null) setIsEditing(false)
  }, [selected])

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
            className={classnames(tipClass, { 'bg-primary': tip === selected })}
            onClick={() => handleChange(tip)}
          >
            {tip}%
          </button>
        ))}

        {isEditing && (
          <input
            type="number"
            ref={inputRef}
            className="pr-2 text-right text-xl focus:outline-primary focus:md:outline-2"
            onChange={(e) => handleChange(parseInt(e.target.value))}
          />
        )}
        {!isEditing && (
          <button
            className="rounded-md bg-neutral-very-light-grayish-cyan py-2 text-neutral-dark-grayish-cyan transition-colors duration-200 ease-in-out hover:bg-neutral-light-grayish-cyan hover:text-neutral-dark-cyan"
            onClick={toggleEditing}
          >
            Custom
          </button>
        )}
      </div>
    </div>
  )
}
