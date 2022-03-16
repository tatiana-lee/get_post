import { getPost } from "./getPost.js"

const btn = document.querySelector('button')

btn.addEventListener('click', event => {
    event.preventDefault()
    getPost()
})
