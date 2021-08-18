import  classes  from "./SelectedPostDetails.module.scss";
import logo from '../../images/image 3.png';

const SelectedPostDetails = ({ selectedPostId, listOfPosts }) => {
  const post = listOfPosts.find(post => post.id === selectedPostId) || '';
  const defaultScreen = selectedPostId === null;

  return (
    <div className={classes.postDetailsContainer}>
      {defaultScreen && 
        <div className={classes.defaultContainer}>
          <h1 className={classes.title}>Welcome to task</h1>
          <img src={logo} srcSet={logo} className={classes.logoImg} alt="logo" />
        </div>}
      
      <div className={classes.selectedPostDetails}>
        <div className={classes.postTitle}>{post.title}</div>
        <div className={classes.postBody}>{post.body}</div>
        <div className={classes.postId}>{post.id}</div>
      </div>
    </div>
  )
} 

export default SelectedPostDetails;
