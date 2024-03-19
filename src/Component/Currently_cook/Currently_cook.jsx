import PropTypes from 'prop-types';

const Currently_cook = ({preparingWatch, idx}) => {
    const {recipe_name, preparing_time, calories} = preparingWatch
    return (
        <tr className='bg-base-200 rounded-2xl'>
            <th>{idx}</th>
            <td>{recipe_name}</td>
            <td>{preparing_time}</td>
            <td>{calories}</td>
        </tr>
    );
};

Currently_cook.propTypes = {
    preparingWatch: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired
}

export default Currently_cook;