import classNames from 'classnames'
import React from 'react'

type InputWithLabelProps = {
  id: string
  title: string
  value: number
  children: JSX.Element
  errorMessage?: string
  setValue: (value: number) => void
}

export const InputWithLabel = ({
  id,
  title,
  value,
  children,
  errorMessage,
  setValue
}: InputWithLabelProps) => {
  const inputClass =
    'w-full rounded-md bg-neutral-very-light-grayish-cyan py-3 pl-12 pr-4 text-right text-2xl text-neutral-dark-cyan focus:outline-primary outline-2'
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (value) setValue(parseInt(value))
  }

  return (
    <div className="relative">
      <label htmlFor={id} className="text-neutral-grayish-cyan">
        {title}
      </label>
      {errorMessage && (
        <span className="absolute right-0 text-error">{errorMessage}</span>
      )}
      <div className="relative mt-2">
        {children && <div className="absolute inset-5">{children}</div>}
        <input
          id={id}
          type="text"
          className={classNames(inputClass, {
            'outline outline-error': errorMessage
          })}
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}
