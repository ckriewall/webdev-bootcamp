import Post from '../data/models/postModel.js'

const addPost = async (submittedPost) => {
  try {
    const newPost = new Post(submittedPost)
    const res = await newPost.save()
  } catch (err) {
    console.log(err)
  }
}

const getPost = async (id) => {
  try {
    const post = await Post.findById(id)
    return post
  } catch (err) {
    console.log(err)
  }
}

const getPosts = async () => {
  try {
    const posts = await Post.find()
    return posts
    return posts
  } catch (error) {
    console.log(err)
  }
}

export { addPost, getPost, getPosts }
