import Post from "../post/Post";
import"./posts.scss"

const Posts = () => {

  //users
  const posts = [
    {
      id: 1,
      name: "alfred manuel",
      userId: 1,
      profilePic: "https://images.pexels.com/photos/433333/pexels-photo-433333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "alfreeeeeeeeeeed",
      img: "https://images.pexels.com/photos/433333/pexels-photo-433333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      name: "anton montserrat",
      userId: 2,
      profilePic: "https://images.pexels.com/photos/433333/pexels-photo-433333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "antooooooooon",
      img: "https://images.pexels.com/photos/433333/pexels-photo-433333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      name: "sergi alier",
      userId: 3,
      profilePic: "https://images.pexels.com/photos/433333/pexels-photo-433333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "betaaaaaaaaaa",
      img: "https://images.pexels.com/photos/433333/pexels-photo-433333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <div className='posts'>
      {/* all posts */}
      {posts.map(post=>(
        <Post post={post} key={post.id}/>
      ))}
    </div>
  )
};

export default Posts;