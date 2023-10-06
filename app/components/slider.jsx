import React from 'react';
import Image from 'next/image';

function Slider(props) {
    return (
        <div >
              <Image
                                className="img-responsive"
                                src="/assets/images/travel-picture-bon.jpg"
                                alt="Tuifly Logo"
                                width={0}
                                height={0}
                                sizes='100vw'
                                style={{ width: '100%', height: '720px' }} // optional
                                priority
                            />
           </div>
    );
}

export default Slider;