export const getPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        return response.json()
    })
    .then((result) => {
        return result
    })
    .then((result) => {
        let random = Math.floor(Math.random() * result.length)
        document.querySelector('.title').innerText = result[random].title
        document.querySelector('.text-body').innerText = result[random].body
    })
}