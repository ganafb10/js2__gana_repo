import {POSTS_URL } from "../shared/constants.mjs";
import { doFetch } from "../utils/doFetch.mjs";
import { defaultProfileImage } from "../shared/constants.mjs";


function generateSinglePost1Html(post){
    if (!post) {
        // Handle the case where post data is missing or incomplete
        console.error('Invalid post data:', post);
        console.log(post);
        return null;
    }

    const postImageContainer= document.createElement('div');
    const postContainer = document.createElement('div');
    postContainer.className = 'card  shadow-sm'
    
    
    const postTitle = document.createElement('h5');
    postTitle.textContent=post.title; 
    postTitle.className= 'card-title'

    const postBody = document.createElement('p');
    postBody.textContent=post.body;
    postBody.className ='card-text'

    let postImageUrl = (!!post?.media && post?.media!=='')? post.media: defaultProfileImage;
    const postImage = document.createElement('img');
    postImage.src = postImageUrl;
    postImage.className='card-img-top'
    postImageContainer.append(postImage);
    postContainer.append(postImageContainer, postTitle, postBody);

    return postContainer;
}

    function displaySinglePost(post){
        const postDisplayContainer = document.querySelector('#post-display-container');
        postDisplayContainer.innerHTML = ''; // Clear previous content
        const postHtml = generateSinglePost1Html(post);
        postDisplayContainer.appendChild(postHtml);
    }
    

    async function main() {
        const searchParams = new URLSearchParams(window.location.search);
        console.log('has id:', searchParams.has('id'));
        if (searchParams.has('id')) {
            const postId = searchParams.get('id');
            console.log(postId)
    
            const postUrl = `${POSTS_URL}/${postId}`;
            try {
                const post = await doFetch(postUrl, true);
                console.log(post);
                if (post) {
                    displaySinglePost(post);
                } else {
                    console.error('Failed to fetch post data:', post);
                }
            } catch (error) {
                console.error('Error fetching post data:', error);
            }
        }
    }
    main();
    
    
/*async function main(){
    const searchParams = new URLSearchParams(window.location.search);
    console.log('has id:', searchParams.has('id'));
    if(searchParams.has('id')){
        const postid = searchParams.get('id');
        console.log(postid)

        const postUrl = `${POSTS_URL}/${postid}`;
        const post =await doFetch(postUrl, true);
        console.log(post)
        displaySinglePost();
        
    }

}
main();*/