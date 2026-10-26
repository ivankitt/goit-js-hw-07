  

const liItem = document.querySelectorAll('.item');

console.log(`Number of categories: ${liItem.length}`);

liItem.forEach((item) => {
    const nameCategory = item.querySelector('h2');
    const elInCategory = item.querySelectorAll('li');

    console.log(`Category: ${nameCategory.textContent}`);
    console.log(`Elements: ${elInCategory.length}`);
})

