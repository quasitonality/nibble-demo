import Nibble from './components/Nibble.js'
import {useState} from 'react'

function App() {
  const [nibbles, setNibbles] = useState([0,0,0])

  function setNibble(index, value) {
    nibbles[index] = value
    setNibbles(nibbles.slice(0))
  }

  function bindNibble(index) {
    return setNibble.bind(null, index)
  }

  const unsigned = nibbles.toReversed().reduce((acc, value, index)=>{
    return acc + value * (16 ** index)
  }, 0)

  const colorChannels = nibbles.map((value)=>{
    return value + value * 16
  })

  const color = '#' + colorChannels.reduce((acc, channel)=>{
    let hexstring = channel.toString(16)
    while (hexstring.length < 2) hexstring = '0' + hexstring
    return acc + hexstring
  }, '')

  const RANGE = 16 ** nibbles.length
  const signed = unsigned < RANGE / 2 ? unsigned : unsigned - RANGE

  function add(value) {
    for (let x = nibbles.length - 1; x >= 0; x--) {
      let nibble = nibbles[x]
      setNibble(x, (value + nibble) % 16)
      value = Math.floor((value + nibble) / 16)
    }
  }

  function subtract(value) {
    for (let x = nibbles.length - 1; x >= 0; x--) {
      let nibble = nibbles[x]
      setNibble(x, (16 + nibble - value) % 16)
      if (value % 16 > nibble) value += 16
      value = Math.floor(value / 16)
    }
  }

  function addOne() {
    add(1)
  }

  function subtractOne() {
    subtract(1)
  }

  return (
    <div className="bg-base-100 min-h-screen absolute top-0">
      <h1 className='text-center text-3xl p-3 bg-base-300'>Nibbles & Bits</h1>
      <div className='flex mx-4 items-center'>
          <button className='btn mx-2' onClick={subtractOne}>Decrease</button>
          <div className='my-2'>
            <Nibble key={'r'} value={nibbles[0]} setNibble={bindNibble(0)}/>
          </div>
          <div className='my-2'>
            <Nibble key={'g'} value={nibbles[1]} setNibble={bindNibble(1)}/>
          </div>
          <div className='my-2'>
            <Nibble key={'b'} value={nibbles[2]} setNibble={bindNibble(2)}/>
          </div>
          <button className='btn mx-2' onClick={addOne}>Increase</button>
      </div>
      <div className='flex m-4 items-center'>
        <div className='m-4 grow'>
          <p className='text-2xl text-center'>Unsigned Integer</p>
          <p className='display-val'>{unsigned}</p>
        </div>
        <div className='m-4 grow'>
        <p className='display-val rounded-full ' style={{backgroundColor: color}} >Color</p>
        </div>
        <div className='m-4 grow'>
          <p className='text-2xl text-center'>Signed Integer</p>
          <p className='display-val' >{signed}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
