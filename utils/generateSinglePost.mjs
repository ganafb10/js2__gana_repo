
import { defaultProfileImage } from "../shared/constants.mjs";

export const generateSinglePostHtml=(post)=>{
    const postImageContainer= document.createElement('div');
    const postContainer = document.createElement('div');

    const postLink = document.createElement('a');
    postLink.href = `/post/?id=${post.id}`;


    const postTitle = document.createElement('h3');
    postTitle.textContent=post.title;

    postLink.append(postTitle);

    const postBody = document.createElement('p');
    postBody.textContent=post.body;

    const postReactions = document.createElement('p');
    postReactions.textContent=post._count.reactions;

    const postComments = document.createElement('p');
    postComments.textContent=post._count.comments;

    
    let postImageUrl = post.media ?? defaultProfileImage;
    const postImage = document.createElement('img');
    postImage.src = postImageUrl;
    postImageContainer.append(postImage);
    
    postContainer.append(postImageContainer, postLink, postBody, postReactions, postComments);


    return postContainer
};