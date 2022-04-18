import { avatarUser } from "./avatarUser.js";

export const comment = ( item ) => {
    const $comment = document.createElement('div');
    $comment.classList.add('comment');
    const id = item.id + '-' + item.user.username + '-' + Date.now();
    $comment.id =  id;

    const $avataruser = avatarUser(item.user.username, item.user.image.png, item.createdAt);

    const $contentComment = contentComment( item.content );

    return {
        $comment,
        $avataruser,
        $contentComment,
        id
    }
}

const contentComment = (comment) => {
    const $contentComment = document.createElement('p');
    $contentComment.textContent = comment;

    return $contentComment;
}