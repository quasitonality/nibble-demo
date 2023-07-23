import Bit from './Bit.js'

function Nibble({key, value, setNibble}) {

  const state = []
  for (let x = 0; x < 4; x++) {
    state[x] = Math.floor(value / (2 ** x)) % 2
  }

  function toggleBit(index) {
    state[index] = state[index] ? 0 : 1
    setNibble(state.reduce((acc, value, index)=>{
      return acc + value * (2 ** index)
    }))
  }

  function clear() {
    state.forEach((bit, index)=>{
      if (bit) toggleBit(index)
    })
  }

  function flip() {
    state.forEach((bit, index)=>{
      toggleBit(index)
    })
  }

  function bindClickHandler(index) {
    return toggleBit.bind(null, index)
  }

  function handlePlus() {
    setNibble((value + 1) % 16)
  }

  function handleMinus() {
    setNibble((16 + value - 1) % 16)
  }

  return (
    <div key={key} className='border-2 border-black p-2'>
      <div className='flex'>
        {state.map((value, index)=>{
          return (
            <div key={key + '-' + {index}} onClick={bindClickHandler(index)} className='m-1' >
              <Bit status={state[index]} />
            </div>
          )
        }).reverse()}
      </div>
      <div className='flex'>
        <button className='btn grow m-2' onClick={clear}>Clear</button>
        <button className='btn grow m-2' onClick={flip}>Flip</button>
      </div>
      <div className='flex items-center'>
        <button class='btn mx-4' onClick={handleMinus}>-</button>
        <p className={'display-val grow'}>{value.toString(16).toUpperCase()}</p>
        <button class='btn mx-4' onClick={handlePlus}>+</button>
      </div>
    </div>
  )
}

export default Nibble