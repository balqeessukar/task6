async function getData(){
    const response = await fetch("https://dummyjson.com/products");
    const posts = await response.json();
    const data = posts.products;

    const result = data.map( function(po){

        return `
           <h4>${po.title}</h4>
           <p>${po.price}</p>
           <p>${po.description}</p>
           <img src=${po.thumbnail} />
        `
    });
    document.querySelector(".data").innerHTML = result;
   
}

getData();