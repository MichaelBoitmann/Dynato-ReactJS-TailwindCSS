import Button from '../components/Button'
import { shoe8 } from '../assets/images'


const SuperQuality = () => {
  return (
    <section 
      id="about-us"
      className='flex justify-between items-center;max-lg:flex-col 
      gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className='text-coral-red'> Super</span>
          <span className='text-coral-red'> Quality</span> Shoes

        </h2>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Ensuring premium comfort and style, our meticulously crafter footwear is 
          designed to elevate your experience, providing you with unmatched quality, 
          innovation, and a touch of elegance.
        </p>
 
        />
      </div>
    </section>
  )
}

export default SuperQuality