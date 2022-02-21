async function apiCall(url) {


    //add api call logic here
    try{
        let res=await fetch(url);
    let data=await res.json();
    return data;

    }
    catch(err){
        console.log(err);
    }

}


function appendArticles(articles, main) {

    //add append logic here
    articles.forEach(ele => {
        let div=document.createElement("div");
        let image=document.createElement("img");
        let p=document.createElement("p");
        image.src=ele.urlToImage;
        p.textContent=ele.title;
        div.append(image,p);

        div.addEventListener("click",function(){
            getdata(ele);
        })

        main.append(div);

       
        
    });

}

function getdata(ele){
    let arr=[];
    arr.push(ele);
    console.log(arr);
    localStorage.setItem("article",JSON.stringify(arr));
    window.location.href="news.html"

}

export { apiCall, appendArticles }

/*
author: null
​​
content: "Life Insurance Corporation of India's initial public offering (IPO) is expected to file its Draft Red Herring Prospectus (DRHP) on February 11, sources told CNBC-TV18.\r\nIt has learned that the Insura… [+914 chars]"
​​
description: "LIC IPO: The quantum of divestment and EV numbers will be mentioned in the DRHP."
​​
publishedAt: "2022-02-11T01:27:00Z"
​​
source: Object { id: null, name: "Moneycontrol" }
​​
title: "LIC Public Issue | Filing with SEBI likely today, IRDAI clears draft papers - Moneycontrol.com"
​​
url: "https://www.moneycontrol.com/news/business/ipo/lic-ipo-filin…likely-on-february-11-irdai-clears-draft-papers-8070891.html"
​​
urlToImage: "https://images.moneycontrol.com/static-mcnews/2022/02/LIC-BUilding-770x433.jpg"




*/