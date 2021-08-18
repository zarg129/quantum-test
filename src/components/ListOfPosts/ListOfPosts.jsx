import { useEffect } from 'react';
import getAllPosts from '../../api/api';
import classes from './ListOfPosts.module.scss';

const ListOfPosts = (
  { setListOfPosts,
    userNameFilter, 
    listOfPosts, 
    setSelectedPostId, 
    selectedPostId 
  }) => {

  useEffect(() => {
    getAllPosts().then(res => setListOfPosts(res))
  }, [setListOfPosts, userNameFilter])
  
  return(
    <ul className={classes.list}>
      {listOfPosts
        .filter(post => post.username.toLowerCase().includes(userNameFilter.toLocaleLowerCase()) || userNameFilter === '')
        .map(post => {
          const isActivePost = selectedPostId  === post.id;
          return ( 
            <li 
              className={isActivePost ? classes.listItemActive : classes.listItemDefault} 
              key={post.id} 
              onClick={() => setSelectedPostId(post.id)}
            >
              {post.id}. {post.username}: {post.title} 
            </li>
          )
        })}
    </ul>
  )
};

export default ListOfPosts;
