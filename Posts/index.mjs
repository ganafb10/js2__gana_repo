
//fetch posts,
//display the posts using the token

import { POSTS_URL } from "../shared/constants.mjs";
import { doFetch } from "../utils/doFetch.mjs";

const defaultProfileImage ="https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a"

const generateSinglePostHtml=(post)=>{
    const postImageContainer= document.createElement('div');
    const postContainer = document.createElement('div');
    postContainer.className = 'card col-md-4 mb-3 shadow-sm'
    postContainer.style.width = '18rem'
    postContainer.style.padding = '5px'
    
    const postLink = document.createElement('a');
    postLink.href = `/post/?id=${post.id}`;

    const postTitle = document.createElement('h5');
    postTitle.textContent=post.title; 
    postTitle.className= 'card-title'

    postLink.append(postTitle);

    const postBody = document.createElement('p');
    postBody.textContent=post.body;
    postBody.className ='card-text'

    let postImageUrl = (!!post?.media && post?.media!=='')? post.media: defaultProfileImage;
    const postImage = document.createElement('img');
    postImage.src = postImageUrl;
    postImage.className='card-img-top'
    postImageContainer.append(postImage);
    
    postContainer.append(postImageContainer, postLink, postBody);


    return postContainer
};

/*const ShowReactions= false;
posts.filter((post)=>{
    if (ShowReactions){
        if(post._count.reactions>0){
            return true;
        }
    }else{
        return true
    }
})*/



/*function filterPostsByTitle(posts, keyword) {
    return posts.filter(post => post.title.toLowerCase().includes(keyword.toLowerCase()));
  }
  document.getElementById('filterInput').addEventListener('input', function(event) {
    const keyword = event.target.value;
    const filteredPosts = filterPostsByTitle(posts, keyword);
    displayPosts(filteredPosts);
  });*/
  

function displayPosts(posts){
    const postsDisplayContainer= document.querySelector('#posts-display-container');
    postsDisplayContainer.textContent=""; // this clears the container
    console.log(posts);
    posts.forEach((post) => {
        const postHtml = generateSinglePostHtml(post);
        postsDisplayContainer.appendChild(postHtml);   
    });
}

async function getPosts(){
    console.log('getting posts');
    const posts = await doFetch(POSTS_URL, true);

    if (posts){
        displayPosts(posts)
    }
}

function main(){
    getPosts();
}
main()