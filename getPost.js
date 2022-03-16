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
        document.querySelector('h2').innerText = result[random].title
        document.querySelector('p').innerText = result[random].body
    })
}