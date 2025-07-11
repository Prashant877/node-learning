//fetch the data from api below
//https://fakestoreapi.com/products

//the data is in json format

//write the data in a file called product.js
import { writeFile } from 'fs/promises';

async function fetchAndWriteData() {
  try {
    const data = await fetch('https://fakestoreapi.com/products');
    const parsedData = await data.json();

    const fileContent = `const products = ${JSON.stringify(parsedData, null, 2)};\n\nexport default products;`;

    await writeFile('product.js', fileContent);
    console.log('✅ Data written to product.js successfully!');
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

fetchAndWriteData();