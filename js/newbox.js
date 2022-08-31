const newsObject = {
    news1: { headline: 'placeholder headline1', picture: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', url: '#'},
    news2: { headline: 'placeholder headline2', picture: '/assets/newsPic/newsplaceholder.jpg', url: '#'},
    news3: { headline: 'placeholder headline3', picture: '/assets/newsPic/newsplaceholder.jpg', url: '#'},
    news4: { headline: 'placeholder headline4', picture: '/assets/newsPic/newsplaceholder.jpg', url: '#'},
    news5: { headline: 'placeholder headline5', picture: '/assets/newsPic/newsplaceholder.jpg', url: '#'},
    news6: { headline: 'placeholder headline6', picture: '/assets/newsPic/newsplaceholder.jpg', url: '#'},
    news7: { headline: 'placeholder headline7', picture: '/assets/newsPic/newsplaceholder.jpg', url: '#'},
    news8: { headline: 'placeholder headline8', picture: '/assets/newsPic/newsplaceholder.jpg', url: '#'},
};

//Parent
const news = document.getElementById('newsBox')


//Loop

for (const myIndex in newsObject) {
    let headline = newsObject[myIndex].headline
    let picture = newsObject[myIndex].picture
    let url = newsObject[myIndex].url

    // console.log(headline);
    // console.log(picture);
    // console.log(url);

    newsBox(headline, picture, url)
}

function newsBox(headline, picture, url) {
    const newsFigure = document.createElement("figure")
    const image = document.createElement("img");
    const title = document.createElement("h3");
    const link = document.createElement("a");

    image.src = picture;
    link.setAttribute('href', url)
    title.textContent = headline;

    news.appendChild(newsFigure)
    newsFigure.appendChild(link)
    link.appendChild(image)
    link.appendChild(title)
    
}