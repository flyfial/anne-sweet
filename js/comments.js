let commentForm = document.querySelector('.leave-comment');
let commentList = document.querySelector('.comments');
let commentField = document.querySelector('.comment-field');
let name = document.querySelector('.your-name');
let label = document.querySelector('.clear');
let labels = document.querySelectorAll('input');
let submitButton = document.querySelector('.send-btn');

commentForm.onsubmit = function (evt) {
  evt.preventDefault();

  let myName = document.createElement('span');
  myName.classList.add('name-js');
  myName.textContent = name.value;
  myName.value = '';

  commentList.append(myName);

  let newComment = document.createElement('p');
  newComment.classList.add('added-comment');
  newComment.textContent = commentField.value;
  commentField.value = '';
  
  commentList.append(newComment);

  for (let label of labels) {
    label.value = '';
  }
};

commentField.oninput = function () {
  if (commentField.value.length < 10 || commentField.value.length > 200) {
    commentField.classList.add('warning');
    submitButton.disabled = true;
  } else {
    commentField.classList.remove('warning');
    submitButton.disabled = false;
  }
}