import React from 'react';

function HeaderTabs(props) {
    return (
        <div >
              <div className='mx-48'>
                 <div className='mb-0 px-48'>
                   <div className='fly_tabs_header mr-[48rem]'>
                        <div className="max-w-lg">
                            <div className="inline-flex  mb-5" role="group">
                                <button type="button" className=" bg-blue-700 text-sm font-bold flex px-6 py-4 text-gray-100 hover:bg-gray-100 hover:text-[#1b115c] focus:z-10  focus:bg-white focus:text-blue-700">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    <span className="ml-4">Vols</span>   
                                </button>
                                <button type="button" className=" bg-blue-600 text-sm font-bold flex px-6 py-4 text-gray-100 hover:bg-gray-100 hover:text-[#1b115c] focus:z-10  focus:bg-white focus:text-blue-700">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    <span className="ml-4">Hôtels</span>   
                                </button>
                                <button type="button" className=" bg-blue-500 text-sm  flex font-bold px-6 py-4 text-gray-100 hover:bg-gray-100 hover:text-[#1b115c] focus:z-10  focus:bg-white focus:text-blue-700">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    <span className="ml-4">VTC</span>                                    
                                </button>
                            </div>
                            
                        </div>
                   </div>
                 </div>
              </div>
           </div>
    );
}

export default HeaderTabs;


