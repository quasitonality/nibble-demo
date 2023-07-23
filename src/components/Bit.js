
// width="42.63mm" height="106.25mm"
function Bit({status}) {

  const fillColor = status ? 'url(#a)' : '#0F0F0F'
  const fillOpacity = status ? 1 : 0.5

  return (
    <div>
      <svg width="auto" height="auto" version="1.1" viewBox="0 0 42.63 106.25" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
      <radialGradient id="a" cx="93.046" cy="69.742" r="21.315" gradientTransform="matrix(1 0 0 2.4923 0 -104.08)" gradientUnits="userSpaceOnUse">
      <stop stop-color="#ffffff" offset="0"/>
      <stop stop-color="#fffff0" offset="1"/>
      </radialGradient>
      </defs>
      <g transform="translate(-71.731 -16.618)">
      <rect x="72.464" y="17.351" width="41.165" height="104.78" fill={fillColor} fill-rule="evenodd" stroke="#000" stroke-width="1.465" fill-opacity={fillOpacity}/>
      </g>
      </svg>
    </div>
  )
}

export default Bit