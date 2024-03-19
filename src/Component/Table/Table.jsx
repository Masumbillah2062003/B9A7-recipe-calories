import PropTypes from 'prop-types';

const Table = ({watchTime, idx, handlerPreparing}) => {
    const {recipe_name, preparing_time, calories} = watchTime;
    // console.log(watchTimes)

    return (
        <tr className='bg-base-200 rounded-2xl'>
            <th>{idx}</th>
            <td>{recipe_name}</td>
            <td>{preparing_time}</td>
            <td>{calories}</td>
            <td><button onClick={() => handlerPreparing(watchTime)} className='btn rounded-[50px] bg-[#0BE58A] hover:bg-[#0BE58A]'>Preparing</button></td>
        </tr>
    );
};


Table.propTypes = {
    watchTime: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired,
    handlerPreparing: PropTypes.func.isRequired
}

export default Table;