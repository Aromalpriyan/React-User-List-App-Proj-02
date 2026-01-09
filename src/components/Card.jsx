import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';

const Card = ({item}) => {
  return (
    <div>
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
	        <img src={item.photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	            <div className="flex flex-col justify-between p-6 space-y-8">
		        <div className="space-y-2">
			    <h2 className="text-3xl font-semibold tracking-wide">{item.name}</h2>
			    <p className="dark:text-gray-800 font-bold"><EmailIcon/>:{item.email}</p>
                <p className="dark:text-gray-800 font-bold"><PlaceIcon/>:{item.place}</p>
		        </div>
		        <button type="button" className="cursor-pointer flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-sky-600 dark:text-gray-50" fdprocessedid="y604kv">More Details</button>
	            </div>
        </div>
    </div>
  )
}

export default Card