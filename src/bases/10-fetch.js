const peticion = fetch(`https://fakestoreapi.com/products`);
peticion.then(resp => resp.json()
.then(([data])=> {
    console.log(data.image);
})
).catch(console.warn);