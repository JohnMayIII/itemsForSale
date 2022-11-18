//Make an inventory of items(15) for sale (can be anythings, ex: shoes, cars, clothes) Each item needs a name, price, and an image and should be dynamically loaded from js into the html. Use methods to create a featured section that filters through your inventory and creates a section base on the 5 items with the lowest price

const sub5 = document.getElementById('sub5')
const fiveTo10 = document.getElementById('fiveTo10')
const over10 = document.getElementById('over10')

let inv = [
    {item: 'Apple',
    price: 2,
    image: 'https://th.bing.com/th/id/OIP.GNj6C-u35jPO3F8GfdpwlQHaH0?pid=ImgDet&rs=1',
    },
    {item: 'Orange',
    price: 2,
    image: 'https://th.bing.com/th/id/OIP.s6QjeLMcWmQzyQXYo6vh3QHaG0?pid=ImgDet&rs=1',
    },
    {item: 'Peach',
    price: 2,
    image: 'https://images.heb.com/is/image/HEBGrocery/000320978',
    },
    {item: 'Blueberries',
    price: 3,
    image: 'https://www.naturalhealth365.com/wp-content/uploads/2016/04/blueberries.jpg',
    },
    {item: 'Dragon Fruit',
    price: 5,
    image: 'https://th.bing.com/th/id/R.f740081a1d583088fbf789d00ea50a9b?rik=RcTefVgeVqkBAg&riu=http%3a%2f%2fwww.asiaone.com%2fsites%2fdefault%2ffiles%2foriginal_images%2fFeb2016%2fDragonFruit.jpg&ehk=XNz93hkanMoX6U4HeVxRzCk1h2H115%2fW5V6ZIQSLZ3A%3d&risl=&pid=ImgRaw&r=0',
    },
    {item: 'Watermelon',
    price: 9,
    image: 'https://th.bing.com/th/id/OIP.oU8AIoRAZj9CeoL_qeaVcwHaFS?pid=ImgDet&rs=1',
    },
    {item: 'Cantaloupe',
    price: 4,
    image: 'https://antioxidant-fruits.com/wp-content/uploads/2015/05/Cantaloupe-Seeds-for-Planting-Home-Garden-100-Heirloom-Seeds-Hales-Best-Jumbo-Cantaloupe.jpg',
    },
    {item: 'Blackberries',
    price: 7,
    image: 'https://www.goodfreephotos.com/albums/food/bunch-of-blackberries.jpg',
    },
    {item: 'Lemon',
    price: 12,
    image: 'https://www.mashed.com/img/gallery/heres-what-happens-when-you-drink-lemon-water-every-day/intro-1595446074.jpg',
    },
    {item: 'Passion Fruit',
    price: 20,
    image: 'https://th.bing.com/th/id/OIP.o8TQKoiCALioHZbAZ9AayQHaKC?pid=ImgDet&rs=1',
    },
    {item: 'Grapes',
    price: 4,
    image: 'https://th.bing.com/th/id/R.4b52010a45b22ccdc43ec6425a6d217f?rik=jiRXobUqxEXGWw&riu=http%3a%2f%2fwww.nogarlicnoonions.com%2fimages%2fuploads%2fNEWS%2fgrapes+2.jpg&ehk=Dm5HKhrv687ULM9KUxPCx2hQeNUGVP3PPIQIx%2fm5cqA%3d&risl=&pid=ImgRaw&r=0',
    },
    {item: 'Banana',
    price: 3,
    image: 'https://www.daysoftheyear.com/wp-content/uploads/banana-day1-scaled.jpg',
    },
    {item: 'Apricot',
    price: 1,
    image: 'https://th.bing.com/th/id/OIP.Z10IOC_XZMpmXQcb7g0xngHaFa?pid=ImgDet&rs=1',
    },
    {item: 'Cherries',
    price: 1,
    image: 'https://i0.wp.com/1.bp.blogspot.com/-U5D6mzFgGFE/VW6PaATRn-I/AAAAAAAADn0/HvsAKqWGkhE/s1600/Juicy%2Bcherries%2Bat%2Bthe%2BCherry%2BShow%2BMarket%2Bin%2BMarostica%252C%2BVeneto%252C%2BItaly.jpg',
    },
    {item: 'Pomegranate',
    price: 50,
    image: 'https://d.newsweek.com/en/full/961075/6-6-pomegranate.jpg',
    }
]

const displayInv =()=>{
    inv.forEach(item => {
        if(item.price < 5){
            sub5.innerHTML += `
            <div class="col-md-4 fruit-col">
                    <div class="card h-100">
                        <div class="card-header text-center">
                            <h3 id="fruitName" class="text-dark">${item.item}</h3>
                        </div>
                        <img src="${item.image}"alt="${item.item}" class="img-fluid fruit-img" />
                        <div class="card-body">
                            <p class="card-text text-dark">Price: $<span id="price">${item.price}</span></p>
                        </div>
                    </div>
                </div>
            `
        } else if(item.price >= 5 && item.price <= 10){
            fiveTo10.innerHTML += `
            <div class="col-md-4 fruit-col">
                    <div class="card h-100">
                        <div class="card-header text-center">
                            <h3 id="fruitName" class="text-dark">${item.item}</h3>
                        </div>
                        <img src="${item.image}"alt="${item.item}" class="img-fluid fruit-img" />
                        <div class="card-body">
                            <p class="card-text text-dark">Price: $<span id="price">${item.price}</span></p>
                        </div>
                    </div>
                </div>
            `
        } else if(item.price > 10){
            over10.innerHTML += `
            <div class="col-md-4 fruit-col">
                    <div class="card h-100">
                        <div class="card-header text-center">
                            <h3 id="fruitName" class="text-dark">${item.item}</h3>
                        </div>
                        <img src="${item.image}"alt="${item.item}" class="img-fluid fruit-img" />
                        <div class="card-body">
                            <p class="card-text text-dark">Price: $<span id="price">${item.price}</span></p>
                        </div>
                    </div>
                </div>
            `
        } else{
            console.log('ERROR')
        }
    });

    
}

displayInv();