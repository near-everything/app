import React from 'react'


const Table = React.forwardRef(function Table(props, ref) {
  const { children, ...other } = props
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full whitespace-nowrap" ref={ref} {...other}>
        {children}
      </table>
    </div>
  )
})

export default Table