import Note from './Note';

const Filter = ({handleFilter}) => {
    return (
        <>
            <h2>Filter by name: </h2>
            <input type="text" onChange={handleFilter} />
        </>
    )
}

export default Filter;