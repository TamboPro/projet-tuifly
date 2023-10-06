import React from 'react';
import Image from 'next/image';

function Header(props) {
    return (
           <div className='bg-white'>
              <div className='mx-32'>
                 <div className='mx-32 px-32'>
                   <div className='py-5'>
                            <Image
                                className="img-responsive"
                                src="/assets/images/tuiflylogo.png"
                                alt="Tuifly Logo"
                                width={138}
                                height={42}
                                priority
                            />
                   </div>
                 </div>
              </div>
           </div>
      
    );
}

export default Header;