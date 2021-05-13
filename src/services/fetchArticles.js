export const fetchArticles = async(keyword)=>{
    const res = await fetch(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=${process.env.API_KEY}`)
    const json = await res.json()

    return json.articles.map(article=>({
        title: article.title,
        image: article.urlToImage,
        url: article.url,
    }))
}

export const fetchHeadlines = async () =>{
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`)

    const json = await res.json();

    return json.articles.map(article=>({
        title: article.title,
        image: article.urlToImage,
        url: article.url,
    }))
}