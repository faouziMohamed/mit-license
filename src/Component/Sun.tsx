export default function Sun() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='w-8 h-8'
      xmlSpace='preserve'
      id='sunny_day'
      x='0'
      y='0'
      version='1.1'
      viewBox='0 0 600 600'>
      <style jsx>{`
        .sun {
          fill: orange;
          stroke: #eee;
          stroke-width: 12;
          stroke-miterlimit: 10;
        }
      `}</style>
      <circle cx='303.4' cy='302.1' r='136.8' className='sun' />
      <path
        d='m425.1 179.8 48.3-48.5M183.8 422.2l-48.2 48.5M183.3 180.4l-48.5-48.3M425.7 421.7l48.4 48.2M303 131V63M303 474v68M128 302H60M471 302h68'
        className='sun'
      />
    </svg>
  );
}
