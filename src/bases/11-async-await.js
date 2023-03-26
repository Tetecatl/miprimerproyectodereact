const getImage =async()=>{
    try{
        const resp = await fetch(`https://fakestoreapi.com/products`);
        const [data] = await resp.json();
        const url = data.image;
        const img = document.createElement('img');
        img.src=url;  
    }catch(err){
        console.error(err);
    }

    
}

getImage();