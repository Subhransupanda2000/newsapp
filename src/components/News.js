import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles=[
   
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Zendaya: How she's perfected the art of method dressing",
        "description": "Film stars have made fancy dress fashionable in their recent red carpet looks.",
        "url": "https://www.bbc.co.uk/news/entertainment-arts-68798482",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/3861/production/_133133441_gettyimages-2148185375.jpg",
        "publishedAt": "2024-04-14T06:07:17.8092884Z",
        "content": "Getting into character is something that can be all-encompassing for an actor when they're on set.\r\nThere are accents to perfect, facial expressions to master and sometimes a completely new look than… [+6290 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Watch: Tel Aviv residents unfazed by Iran attack threat",
        "description": "People were seen drinking in the streets of Tel Aviv despite Iran confirming a drone launch.",
        "url": "https://www.bbc.co.uk/news/world-middle-east-68808424",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/A676/production/_133141624_p0hqpj0v.jpg",
        "publishedAt": "2024-04-14T04:52:13.8996165Z",
        "content": "Bars in the streets of Tel Aviv were still busy despite Iran launching dozens of drones and missiles at Israel in a retaliatory attack. \r\nA university student described the evening as \"usual night in… [+124 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Little Chefs: What happened to roadside diner chain",
        "description": "At its height, Little Chef had 439 restaurants across the UK but just two decades later they were all gone.",
        "url": "https://www.bbc.co.uk/news/business-68796980",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/16D99/production/_133139539_image-4.png",
        "publishedAt": "2024-04-14T04:37:16.440869Z",
        "content": "With 439 restaurants on major routes across the UK, Little Chef once enjoyed a near monopoly on roadside dining. So, why did the restaurant chain disappear? \r\nMany of us have fond memories of childho… [+6536 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Scrabble Together: 'It feels a bit like cheating'",
        "description": "A new, easier version of the traditional word game leaves us asking: What are board games for?",
        "url": "https://www.bbc.co.uk/news/uk-68801704",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/11C3B/production/_133136727_index-promo.jpg",
        "publishedAt": "2024-04-14T03:07:18.0191678Z",
        "content": "This week, for the first time in its 75-plus year history, a new \"collaborative\" version of Scrabble was launched in an attempt to entice Generation Z players to the traditional word-making game.\r\nI … [+4566 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Ukraine war: Russian double-tap strikes hit civilians then rescuers too",
        "description": "Russia is following up initial attacks with repeat strikes targeting rescuers treating the wounded.",
        "url": "https://www.bbc.co.uk/news/world-europe-68761490",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7CE4/production/_133127913_e4e98231b87fcb47d534d24970273e04ccb4eb510_143_3870_21763870x2176.jpg",
        "publishedAt": "2024-04-14T02:37:18.5670334Z",
        "content": "On the night of 3 April, a swarm of Russian drones attacked Kharkiv, in Ukraine's northeast. \r\nThe country's second-largest city has been targeted almost incessantly since the start of Russia's full-… [+6460 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Chibok girls feel let down 10 years after Nigeria kidnapping",
        "description": "Most of the Chibok girls abducted 10 years ago in Nigeria are now free but some feel badly let down.",
        "url": "https://www.bbc.co.uk/news/world-africa-68769102",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/12392/production/_133124647_a80289f3-8b25-4aaf-a07b-e7f9d23fa848.jpg",
        "publishedAt": "2024-04-14T01:52:12.519342Z",
        "content": "We had to meet Lisu in secret as she says the local Nigerian authorities are trying to prevent her from talking to journalists.\r\nShe was one of the 276 girls abducted from their school in the town of… [+13139 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "US shoots down Iranian drones bound for Israel",
        "description": "President Joe Biden met promptly with US national security officials after Iran launched its attack.",
        "url": "https://www.bbc.co.uk/news/world-us-canada-68810519",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/543C/production/_133146512_glfoc2exaaa2uqy.jpg",
        "publishedAt": "2024-04-14T01:22:20.3786411Z",
        "content": "The US has shot down Iranian drones headed to Israel after Iran launched its retaliatory attack early on Sunday. \r\nThe UK meanwhile said its Royal Air Force (RAF) would intercept drones \"as required\"… [+2765 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Westfield Bondi mall attack: Sydney knife suspect identified by police",
        "description": "Joel Cauchi, 40, fatally stabbed five women and a man at Westfield Bondi Junction mall on Saturday.",
        "url": "https://www.bbc.co.uk/news/world-australia-68810428",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/2CBE/production/_133145411_gettyimages-2147765856.jpg",
        "publishedAt": "2024-04-13T23:52:14.4718015Z",
        "content": "Media caption, Watch: Witnesses describe moment Sydney mall attack\r\nA knife-wielding man who killed six people in a Sydney shopping centre before being shot dead has been identified by Australian pol… [+2130 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Iran launches drones at Israel in retaliatory attack",
        "description": "Israel's military says its forces are on high alert and is \"monitoring all targets\".",
        "url": "https://www.bbc.co.uk/news/world-middle-east-68810053",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/83B3/production/_115651733_breaking-large-promo-nc.png",
        "publishedAt": "2024-04-13T20:52:19.1916746Z",
        "content": "Iran has launched drones at Israel, the Israel Defense Forces (IDF) said, appearing to mark a widely anticipated reprisal attack.\r\nThe IDF said the wave could take hours to reach Israel, a distance o… [+714 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Australia PM hails cop who shot Sydney attacker as 'a hero'",
        "description": "The female officer singlehandedly pursued and killed a man in Sydney after he fatally stabbed six people.",
        "url": "https://www.bbc.co.uk/news/world-australia-68806806",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6011/production/_133139542_gettyimages-2147763247.jpg",
        "publishedAt": "2024-04-13T16:07:19.0655596Z",
        "content": "An Australian police officer has been hailed as a hero by the country's prime minister, after she confronted and shot dead a man who fatally stabbed six people at a Sydney shopping centre. \r\n\"There i… [+3641 chars]"
    }
]

constructor(){
super();
console.log("hello");
this.state={
  articles:this.articles,
  loading:false
}

}
  render() {
    return (
      <div className=
      "container my-3">
        <h2>NewsToday - Top HeadLines</h2>
        <div className='row'>
          {this.state.articles.map((element)=>{
            return <div className='col-md-4'key={element.url}>
              <NewsItem title ={element.title.slice(0,45)} description={element.description.slice(0,88)}
              imageUrl={element.urlToImage}newsUrl={element.url}/>
              </div>
          })}
            
        </div>
 </div>
    )
  }
}

export default News
