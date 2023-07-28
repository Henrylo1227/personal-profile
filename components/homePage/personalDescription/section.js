import homePage from '../../../pageData/homePage.json';
import { Limelight } from 'next/font/google';
import DiscoverMeBtn from './__components/discoverMeBtn';
import Background from './__components/background';

const limeLight = Limelight({ subsets: ['latin'], weight: '400'});

export default function PersonalDescription() {
  const { content } = homePage;
  const { heading, subHeading, text } = content.description;

  return (
    <section id='personal-description'>
      {/* Section Screen */}
      <div className="block h-screen w-screen items-center bg-grey">
             {/* background */}
             <Background/>
                 
        {/* text and button container */}
        <div className='description-container relative top-1/4 p-3 md:top-1/3 md:left-[15%] z-10'>
          {/* Name */}
          <div className='text-5xl my-2'>
            <div className={limeLight.className}>{heading}</div>
          </div>
          {/* post */}
          <div className='text-3xl my-2 mx-3 italic font-semibold brightness-[75%]'>
            <div>{subHeading}</div>
          </div>
          {/* personal description */}
          <div className='text-xl my-1 mx-4 font-light max-w-sm'>
            <div>{text}</div>
          </div>
          {/* Link to about me */}
          <div className='flex justify-center mt-[20%] md:mt-[5%] md:justify-start'>
            <DiscoverMeBtn/>
          </div>
        </div>

      </div>
    </section>
  )
}
