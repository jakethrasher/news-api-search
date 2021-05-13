const fetchArticles = async()=>{
    const res = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.API_KEY}`)
    const json = await res.json()

    return json.articles.map(article=>({
        author: article.author,
        title: article.title,
        image: article.urlToImage,
        url: article.url,
    }))
}
export default fetchArticles;