import React from 'react';

function TravelForm(props) {
    return (
        <div className='bg-white'>
              <div className='mx-48'>
                <div className='mb-0 px-48'>
                   <div className='fly_tabs py-6 border-b-2 border-[#1b115c]'>
                                             
                            <div className="flex flex-wrap  gap-1 mx-4">
                                    <label className="block  w-2/12  mx-1 ">
                                        <span className="text-gray-700 text-sm font-bold ">Aéroport de Départ: </span>
                                        <select className="block w-full mt-1 py-[0.7rem] border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                        <option>Roissy</option>
                                        <option>Wedding</option>
                                        <option>Birthday</option>
                                        <option>Other</option>
                                        </select>
                                    </label>
                                    <label className="block  w-2/12  mx-1 ">
                                        <span className="text-gray-700 text-sm font-bold ">Aéroport d&lsquo;arrivée:</span>
                                        <select className="block w-full mt-1 py-[0.7rem] border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                        <option>Roisy</option>
                                        <option>Wedding</option>
                                        <option>Birthday</option>
                                        <option>Other</option>
                                        </select>
                                    </label>
                                    <label className="block   w-2/12  mx-1">
                                        <span className="text-gray-700 text-sm font-bold ">Date de depart:</span>
                                        <input
                                        type="date"
                                        className="mt-1 block w-full py-[0.6rem]  border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        />
                                    </label>
                                    <label className="block  w-2/12  mx-1">
                                        <span className="text-gray-700 text-sm font-bold ">Date de retour:</span>
                                        <input
                                        type="date"
                                        className="mt-1 block w-full py-[0.56rem] border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        />
                                    </label>
                                    
                                    <label className="block  w-1/12  mx-1">
                                        <span className="text-gray-700 text-sm font-bold ">Adulte:</span>
                                        <select className="block w-full mt-1 py-[0.7rem] border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        </select>
                                    </label>
                                    <label className="block  w-1/12  mx-1">
                                        <span className="text-gray-700 text-sm font-bold ">Enfant:</span>
                                        <select className="block w-full mt-1 py-[0.7rem] border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                            <option>0</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                    </label>
                                    <div className='block  w-1/12  mx-1'>
                                        <span className="text-white">.</span>
                                        <button type="button" className="w-full bg-blue-700 text-sm font-bold mt-1 py-3 text-gray-100 hover:bg-gray-100 hover:text-[#1b115c] focus:z-10  focus:bg-white focus:text-blue-700">
                                            Rechercher
                                        </button>
                                    </div>
                           
                        </div>
                 </div>
                </div>
              </div>
           </div>
    );
}

export default TravelForm;