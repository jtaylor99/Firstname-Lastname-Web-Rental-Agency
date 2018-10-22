const Page_Data = {
    movies: [
        {
            title: "Black Panther",
            image: "./images/black-panther.jpg",
            description:
                "After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place as king.",
            genre: "Genre: Action, Adventure, Science Fiction, Fantasy",
            price: 5.99
        },
        {
            title: "Avengers Infinity War",
            image: "./images/infinity-war.jpg",
            description:
                "The Avengers unite to battle their most powerful enemy yet Thanos. On a mission to collect all six Infinity Stones.",
            genre:
                "Genre: Action, Adventure, Superhero, Fantasy, Science Fiction",
            price: 4.99
        },
        {
            title: "Deadpool 2",
            image: "./images/deadpool2.jpg",
            description:
                "Deadpool meets Russell, an angry teenager who lives at an orphanage.Deadpool realizes that he has to save him.",
            genre:
                "Genre: Comedy, Action, Adventure, Fantasy, Science Fiction, Superhero",
            price: 4.99
        },
        {
            title: "Star Wars: The Empire strikes back",
            image: "./images/Star Wars Episode 5.jpg",
            description:
                " Luke Skywalker , Han Solo, Princess Leia and Chewbacca face attack by the Imperial forces on the ice planet Hoth.",
            genre:
                "Genre: Action, Science Fiction, Adventure, Space Opera, Family,Fantasy",
            price: 3.99
        },
        {
            title: "The Negotiator",
            image: "./images/The Negotiator.jpg",
            description:
                "Danny Roman is considered the best police hostage negotiator in Chicago. After a friend warns him thatsomeone is embezzling from a disability fund, the person is found dead.",
            genre: "Genre: Action, Crime, Drama, Mystery",
            price: 3.99
        },
        {
            title: "Goodfellas",
            image: "./images/goodfellas.jpg",
            description:
                "A young man grows up in the mob and works very hard to advance himself through the ranks. He enjoys his life of money and luxury, but is oblivious to the horror that he causes.",
            genre: "Genre: Thriller, Crime, Drama, Detective Fiction",
            price: 3.99
        }
    ]
};

function loadTemplate() {
    var source = document.getElementById("template").innerHTML;
    var template = Handlebars.compile(source);
    var newInformation = "";
    for (index in Page_Data.movies) {
        newInformation += template({
            index: index,
            title: Page_Data.movies[index].title,
            imageURL: Page_Data.movies[index].image,
            description: Page_Data.movies[index].description,
            price: Page_Data.movies[index].price,
            genre: Page_Data.movies[index].genre
        });
    }
    document
        .getElementById("item")
        .insertAdjacentHTML("beforeend", newInformation);
}
loadTemplate();
function showingThePrice() {
    var x = document.getElementById("orderButton");
    var z = document.getElementById("mod");
    var y = document.getElementById("mod2");

    x.addEventListener("click", function(event) {
        z.style.display = "none";
        y.style.display = "display";
    });
}

showingThePrice();
function price(index) {
    var x = Page_Data.movies[index];
    var price = x.price;
    var y = document.getElementById("info-goes-here");
    y.innerHTML = price;
}
price(index);
function goodBye() {
    var x = document.getElementById("mod2");
    var y = document.getElementById("mod3");
    x.addEventListener("click", function(event) {
        x.style.display = "none";
        y.style.display = "display";
    });
}
goodBye();
