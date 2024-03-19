import PropTypes from 'prop-types';
import { CiStopwatch } from "react-icons/ci";
import { FaFireFlameCurved } from "react-icons/fa6";

const Cards = ({recipe, handlerWatchTime}) => {
    console.log(recipe)
    const {image, recipe_name, short_description, ingredients, preparing_time, calories} = recipe
    return ( 
        <div className='border border-[#28282833] rounded-2xl mt-3 lg:p-6 p-3'>
            <img src={image} alt="" className='w-full rounded-2xl ' />
            <h3 className=' mt-6 text-xl font-semibold'>{recipe_name}</h3>
            <p className=' mt-4 text-base text-[#878787]'>{short_description}</p>
            <h3 className='mt-10 text-lg font-medium'>Ingredients : {ingredients.length}</h3>
            {
                ingredients.map((all, idx) => {
                    return(
                        <ul key={idx} className='text-[#878787] text-lg'>
                            <li className='flex items-center gap-3'><div className='w-1 h-1 rounded-full bg-[#878787]'></div> {all}</li>
                        </ul>
                    )
                })
            }
            <div className='flex gap-9 mt-10 text-[#878787]'>
                <p className='flex gap-3 items-center'><CiStopwatch /> {preparing_time}</p>
                <p className='flex gap-3 items-center'><FaFireFlameCurved /> {calories}</p>
            </div>
            <div className='mt-4'>
                <button onClick={ () => handlerWatchTime(recipe)} className='btn rounded-[50px] bg-[#0BE58A] hover:bg-[#0BE58A] text-black font-medium'>Want to Cook</button>
            </div>
        </div>
    );
};

Cards.propTypes = {
    recipe: PropTypes.object.isRequired,
    handlerWatchTime: PropTypes.func.isRequired
}

export default Cards;