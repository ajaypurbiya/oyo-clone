/* eslint-disable @next/next/no-img-element */


const Block = ({title, para}) => {
  return (
    <div className=" border-r border-gray-300 w-60 h-full flex items-center px-2">
      <img 
        src={'/img.png'} 
        alt='demo' 
        width={50} 
        height={100} 
        className='w-15 h-15 rounded-full mr-3' 
      />
      <div>
        <h3 className=" font-bold">{title}</h3>
        <p className=" text-gray-400 text-xs line-clamp-1">{para}</p>
      </div>
    </div>
  )
}

export default Block
