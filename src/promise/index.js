const someThingsWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        }
        else {
            reject('Whooops!');
        }
    });
};

someThingsWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err))
    
const someThingsWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() => {
                resolve('True')
            }, 2000)
        }
        else {
            const error = new Error('Whooop!');
        }
    });
}

someThingsWillHappen2()
    .then(response => console.log(response))
    // .then(() => console.log('Hola'))
    .catch(err => console.error(err));

Promise.all([someThingsWillHappen(), someThingsWillHappen2()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch(err => {
        console.error(err)
    })