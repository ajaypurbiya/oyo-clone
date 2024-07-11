
import Image from 'next/image'
import Block from './Block'

const Header1 = () => {
  return (
    <div className=' flex justify-between border-b-2 items-center h-16 px-6'>
      <Image 
        src={'/logo.png'} 
        alt='logo' 
        width={50} 
        height={100} 
        className='w-20 h-20'
      />
      <div className='border-r-1 border-gray-300 h-full flex '>
        <Block title={'Become a mentor'} para={'Additional 10%off on style.'} />
        <Block title={'OYO for business'} para={'Truted by 5000 corporate4s.'}/>
        <Block title={'List your property'} para={'Start earning in 30 min.'}/>
        <Block title={'7648928122'} para={'Call us to book now.'}/>

        <div className="flex items-center px-1">
          <img 
            src={'/img.png'} 
            alt='demo' 
            width={50} 
            height={100} 
            className='w-15 h-15 rounded-full mr-1' 
          />
          <h3 className=' font-bold'>Login / Signup</h3>
        </div>
      </div>
    </div>
  )
}

export default Header1
