import React from 'react'

const Colors = (WrappedComponent) => {
  const colors = ['renk', 'pink', 'green', 'purple','blue']
  const randomColor = colors[Math.floor(Math.random() * 5)]

  const colorClass = randomColor+ '-text';

  return(props)=> {
    return(
      <div className={colorClass}>
        <WrappedComponent {...props} />
      </div>
    )
  }
}

export default Colors;