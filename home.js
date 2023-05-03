var listProducts = [
    {
    id: 'TM01',
    name: 'Being Alone Is Better',
    title: 'Portrait / Life',
    image: 'img/350d4ecf94ade25037dbc082e9fbe0d7-705x529.jpg',
    categoryId: 1,
    status: true
    },
    {
    id: 'TM02',
    name: 'Being Alone Is Better',
    title: 'Portrait',
    image: 'img/pexels-photo-1-705x529.jpeg',
    categoryId: 2,
    status: true
    }
];
 function loadProduct(){
    let items = '';
    for (let p of listProducts){
        items += `  
        <div class="item">
        <div class="col col-md-4">
            <div class="overlay-container">
                <a href=""><img src="${p.image}" alt=""></a>
                <div class="overlay-text">
                    <h4 class="overlay-text1">${p.name}</h4>
                    <div class="overlay-text2">${p.title}</div>
                </div>
            </div>
        </div>
    </div>
        `
    }
    console.log(items);
    $("#top-row").html(items);
 }
 loadProduct();