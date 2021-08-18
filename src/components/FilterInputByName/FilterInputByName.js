import classes from './FilterInputByName.module.scss';

const FilterInputByName = ({ userNameFilter, setUserNameFilter }) => {
  const onHandleChangeName = (event) => setUserNameFilter(event.target.value);

  return(
    <div className={classes.container}>
      <h1 className={classes.title}>Select User:</h1>
      <input 
        className={classes.nameInput} 
        onChange={onHandleChangeName} 
        value={userNameFilter} 
        placeholder='Search by username'>
      </input>
    </div>
  )
}

export default FilterInputByName;
