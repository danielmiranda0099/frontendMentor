import {data} from '../../data/data.js';
import { comment } from './comment.js';
import { reply } from './reply.js';

const $root = document.getElementById('comments')

export const cardComments = () => {
    const $fragment = document.createDocumentFragment();
    data[1].comments.forEach( item => {
       
        const $comment = addComment(item);
        
        $fragment.appendChild($comment);
        
        if( item.replies.length > 0 ){
            item.replies.forEach( el => {
                const $comment = addComment(el);
                $comment.classList.add('comment-reply');
                
                $fragment.appendChild($comment);
            })        
        }
        
       
    });

    /***** */
    $root.appendChild($fragment);
}


const addComment = (item) => {
    const {$comment, $avataruser, $contentComment, id} = comment(item); 

    const $headerComment = document.createElement('div');
    $headerComment.classList.add('header-comment');

    const $reply = reply();

    $headerComment.appendChild($avataruser);
    $headerComment.appendChild($reply);
    $comment.appendChild($headerComment);
    $comment.appendChild($contentComment);

    return $comment; 
}




