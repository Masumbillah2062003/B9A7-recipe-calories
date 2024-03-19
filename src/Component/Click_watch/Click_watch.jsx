import PropTypes from 'prop-types';
import Table from '../Table/Table';
import Currently_cook from '../Currently_cook/Currently_cook'
import { useState } from 'react';

const Click_watch = ({watchTimes, setWatchTime}) => {
    const [getpreparing, setPreparing] = useState([])

    const handlerPreparing = (preparing) =>{
        const newPreparing = [...getpreparing, preparing];
        setPreparing(newPreparing)

        const remaining = watchTimes.filter(remove => remove.id !== preparing.id)
        setWatchTime(remaining)
    } 
    
    return (
        <div className='border-[#28282833] border p-8 rounded-3xl'>
                <div>
                    <h1 className='text-2xl font-semibold text-center'>Want to cook : {watchTimes.length}</h1>
                    <div  className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                    <th></th>
                                </tr> 
                            </thead>
                            <tbody>
                                {
                                watchTimes.map((watchTime, idx) => {
                                    return <Table key={idx} idx={idx + 1} handlerPreparing={handlerPreparing} watchTime={watchTime}></Table>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='mt-10'>
                    <h1 className='text-2xl font-semibold text-center'>Currently cooking : {getpreparing.length}</h1>
                    <div  className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                </tr> 
                            </thead>
                            <tbody>
                                {
                                getpreparing.map((preparingWatch, idx) => {
                                    return <Currently_cook key={idx} idx={idx + 1} preparingWatch={preparingWatch}></Currently_cook>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    );
};

Click_watch.propTypes = {
    watchTimes: PropTypes.array.isRequired,
    setWatchTime: PropTypes.array
}


export default Click_watch;