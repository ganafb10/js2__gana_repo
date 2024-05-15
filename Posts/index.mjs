
//fetch posts,
//display the posts using the token

import { POSTS_URL } from "../shared/constants.mjs";
import { doFetch } from "../utils/doFetch.mjs";

const defaultProfileImage ="https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a"

const generateSinglePostHtml=(post)=>{
    const postImageContainer= document.createElement('div');
    const postContainer = document.createElement('div');

    const postLink = document.createElement('a');
    postLink.href = `/post/?id=${post.id}`;


    const postTitle = document.createElement('h5');
    postTitle.textContent=post.title;

    postLink.append(postTitle);

    const postBody = document.createElement('p');
    postBody.textContent=post.body;

    const postReactions = document.createElement('p');
    postReactions.textContent= `Reactions: ${ post._count.reactions}`;

    const postComments = document.createElement('p');
    postComments.textContent= `Comments: ${post._count.comments}`;

    let postImageUrl = (!!post?.media && post?.media!=='')? post.media: defaultProfileImage;
    const postImage = document.createElement('img');
    postImage.src = postImageUrl;
    postImageContainer.append(postImage);
    
    postContainer.append(postImageContainer, postLink, postBody, postReactions, postComments);


    return postContainer
};

const ShowReactions= false;

function displayPosts(posts){
    const postsDisplayContainer= document.querySelector('#posts-display-container');
    postsDisplayContainer.textContent=""; // this clears the container
    console.log(posts);
    posts.filter((post)=>{
        if (ShowReactions){
            if(post._count.reactions>0){
                return true;
            }
        }else{
            return true
        }
    }).forEach((post) => {
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