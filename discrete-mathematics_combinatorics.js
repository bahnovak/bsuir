const elements = ['aa' ,'b', 'cc', 'ddd'];

const factorial = (n) => {
    return (n != 1) ? n * factorial(n - 1) : 1;
}


const getCombinations = (lng = 2) => {
    if (lng <= 0 || !Number.isInteger(lng)) { // Проверка на корректность данных
        throw new Error('Incorrect data. Expected: 1,2,3...')
    }

    const countCombinatins = factorial(elements.length + lng - 1) / (factorial(lng) * factorial(elements.length - 1));

    const data = new Array(lng);             
    const results = [];

    function recurs(pos = 0, start = 0) {        
      if(pos === lng) {                
        results.push(data.slice());  
        return;
      }

      for(let i = start; i < elements.length; i += 1) {
        data[pos] = elements[i];         
        recurs(pos + 1, i);                 
      }
    };
    recurs();

    console.log(`Количество сочетаний: ${countCombinatins}`);
    console.log(results); 

    return results;  
}

getCombinations(4);