import React, {useId} from 'react'

function Select({
    options,
    label,
    className,
    ...props
}, ref) {
    const id = useId()
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className='inline-block mb-2 pl-1 text-sm font-medium text-slate-700'>{label}</label>}
        <select
        {...props}
        id={id}
        ref={ref}
        className={`px-4 py-3 rounded-lg bg-white text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 border border-slate-300 w-full hover:border-slate-400 cursor-pointer ${className}`}
        >
            {options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}

export default React.forwardRef(Select)