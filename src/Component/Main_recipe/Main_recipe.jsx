import { useState } from "react";
import Cards from "../Cards/Cards";
import Our_recipe from "../Our_recipe/Our_recipe";
import { useEffect } from "react";
import Click_watch from "../Click_watch/Click_watch";
import './main-recipe.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main_recipe = () => {
    const [recipe, setRecipe] = useState([]);
    const [watchTime, setWatchTime] = useState([]);

    
    useEffect(() => {
        fetch("app.json")
        .then(res => res.json())
        .then(data => setRecipe(data))
    },[])


    const handlerWatchTime = time => {
        console.log(watchTime, time)
        const x = watchTime.find(chack=> chack.id == time.id)
        if(x){
            return toast("not Allow")
        }
        const newWatchTime = [...watchTime, time]
        setWatchTime(newWatchTime) 
    }

    return (
        <div className="container mx-auto lg:mt-24 mt-12 p-3">
            <Our_recipe></Our_recipe>
            <div className="lg:flex gap-10 lg:mt-12 mt-6">
                <div className="display-grid lg:w-8/12">  
                    {
                        recipe.map(recipe => {
                            return <Cards key={recipe.id} handlerWatchTime={handlerWatchTime} recipe={recipe}></Cards>
                        })
                    }
                </div>
                <div className="lg:w-4/12">
                    <Click_watch setWatchTime={setWatchTime}  watchTimes={watchTime}></Click_watch>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Main_recipe;




        // const toNumber = Number(Array.from(time).slice(0, 2).join(''));
        // // const toArray = Array.from(toNumber);
        // // const toString2 = toArray.slice(0, 2).join('');
        // // console.log(Number(toString2))
        // console.log(toNumber)

        // // console.log('click me', time)
        // setWatchTime(watchTime + toNumber)