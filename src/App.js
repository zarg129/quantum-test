import classes from  './App.module.scss';
import { useState, useEffect } from 'react';
import SelectedPostDetails from './components/SelectedPostDetails/SelectedPostDetails.jsx';
import getAllPosts from './api/api';
import FilterInputByName from './components/FilterInputByName/FilterInputByName';
import ListOfPosts from './components/ListOfPosts/ListOfPosts';

const App = () => {
  const [listOfPosts, setListOfPosts] = useState([]);
  const [userNameFilter, setUserNameFilter] = useState('');
  const [selectedPostId, setSelectedPostId] = useState(null);

  useEffect(() => {
    getAllPosts().then(res => setListOfPosts(res))
  }, [userNameFilter])
  
  return (
    <div className={classes.App}>
      <header className={classes.filterInputBLock}>
        <FilterInputByName userNameFilter={userNameFilter} setUserNameFilter={setUserNameFilter} />
      </header>
      
      <main className={classes.main}>
        <div className={classes.listBlock}>
          <ListOfPosts 
            setListOfPosts={setListOfPosts} 
            userNameFilter={userNameFilter} 
            listOfPosts={listOfPosts} 
            setSelectedPostId={setSelectedPostId} 
            selectedPostId={selectedPostId}
          />
        </div>
        <div className={classes.detailsBlock}>
          <SelectedPostDetails selectedPostId={selectedPostId} listOfPosts={listOfPosts} />
        </div>
      </main>
    </div>
  );
}

export default App;
