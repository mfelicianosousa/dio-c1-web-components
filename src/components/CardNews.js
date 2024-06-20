class CardNews extends HTMLElement {

    constructor(){
        super();
        const shadow = this.attachShadow({ mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement("div");
        // Card Parent (Pai) master (principal)
        componentRoot.setAttribute("class", "card");
        // CardLeft child 
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");


        const author = document.createElement("span");
        const linkTitle = document.createElement("a");
        const newsContent = document.createElement("p");
        // add element ("span", "a", "p")
        cardLeft.appendChild(author);
        // recebendo o attribute author do html
        author.textContent = "By " + (this.getAttribute("author") || "Anonymous");

        cardLeft.appendChild(linkTitle);
        // recebendo o attribute (a) do html
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url")|| "www.google.com";

        cardLeft.appendChild(newsContent);
        // recebendo o attribute content (p)
        newsContent.textContent = this.getAttribute("content");

        // card Right child
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");
        const newsImage = document.createElement("img");
        // add props image src
        newsImage.src = (this.getAttribute("photo") || "assets/default-photo.png");
        newsImage.alt = "foto da noticia";
        // add Element (image)  
        cardRight.appendChild(newsImage);


        // add master (principal)
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles(){

        const style = document.createElement('style');
        style.textContent = `
        .card {
            width: 80%;
            box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
            -webkit-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding-top: 10px;
            padding-left: 10px;
            padding-bottom: 5px;
        }

        .card__left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }

        .card__left > span {
            font-weight: 400;
        }


        .card__left > a {
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
        }

        .card__left > p {
            margin-top: 10px;
            color: rgb(70,70,70);

        }
        
        `;
        return style;
    }
    

}
customElements.define("card-news",CardNews);
