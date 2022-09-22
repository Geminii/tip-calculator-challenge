type InputWithLabelProps = {
  id: string
  title: string
  value: number
  children: JSX.Element
  className?: string
}

export const InputWithLabel = ({
  id,
  title,
  value,
  children,
  className = ''
}: InputWithLabelProps) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="text-neutral-grayish-cyan">
        {title}
      </label>
      <div className="relative mt-2">
        {children && <div className="absolute inset-5">{children}</div>}
        <input
          id={id}
          type="text"
          className="w-full rounded-md bg-neutral-very-light-grayish-cyan py-3 pl-12 pr-4 text-right text-2xl text-neutral-dark-cyan focus:outline-primary focus:md:outline-2"
          defaultValue={value}
        />
      </div>
    </div>
  )
}
