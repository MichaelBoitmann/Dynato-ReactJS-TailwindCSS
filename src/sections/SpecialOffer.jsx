import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center 
    max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1 '>
        <img 
          src={offer} 
          alt="Special Offer" 
          width={773} 
          height={687}
          className="object-contain w-full" />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className="font-palanquin text-4xl capitalize font-bold 
        lg:max-w-lg">
          <span className='text-coral-red'> Limited Edition </span> 
            Deal
        </h2>
        <p className="font-montserrat text-slate-gray text-lg 
                      leading-8 mt-6 mb-14 sm:max-w-sm">
          Join the ultimate shopping spree and uncover amazing   
          deals, top picks, and unbeatable savings. Experience the  
          best in value and style, transforming your shopping 
          adventure into an unforgettable journey for all ages. 
          Don’t miss out!
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our commitment to meticulous detail and exceptional 
          quality guarantees your complete satisfaction.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label="View Details" iconURL={arrowRight} />
          <Button 
            label="Learn More" 
            backgroundColor="bg-white"
            borderColor="border-slate-gray" 
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer