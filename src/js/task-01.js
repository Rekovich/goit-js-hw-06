const categories = document.querySelectorAll('.item');
const totalCategories = categories.length;

console.log(`Number of categories: ${totalCategories}`);



categories.forEach((element) => {
    const elementTitle = element.querySelector('h2').textContent;
    const elementLength = element.querySelectorAll('li').length;

    console.log(`Category: ${elementTitle}`);
    console.log(`Elements: ${elementLength}`);
});