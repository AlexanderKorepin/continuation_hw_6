const url = './data.json';
async function getData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
}
document.addEventListener('DOMContentLoaded', async (e) => {
    const data = await getData(url);
    const list = document.querySelector('.product-box__content');
    data.forEach(element => {
        list.insertAdjacentHTML('beforeend', `
           <div class="product">
                    <div class="product__picturebox">
                        <div class="product__picturebox__itemHover">
                            <button class="product__picturebox__buy-button">
                                <img src="img/Vector.svg" alt="корзина"
                                    class="product__picturebox__buy-button-img">
                                Add to Cart
                            </button>
                        </div>
                        <img src="${element.img}" alt="photo 001" class="product__picturebox__img">
                    </div>
                    <div class="product__content">
                        <h5 class="product__content__heading">${element.title}</h5>
                        <p class="product__content__text">${element.paragraph}</p>
                        <p class="product__content__price">$${element.price}</p>
                    </div>
                </div>         
        `)

    });
    
});
