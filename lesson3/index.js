const countries = [
    {
        id: '1',
        country: 'Georgia'
    },

    {
        id: '2',
        country: 'USA'
    }
];

const ul = document.getElementById('countries');
const btn = document.getElementById('btn');
const inpt = document.getElementById('inpt');
var id = countries.length + 1;


btn.addEventListener('click',()=>{
    let inptStr = inpt.value;

    if(isValid(inptStr)){
        countries.push({
            id: id,
            country:inpt.value
        });
        id++;
        renderCountries();
    }
    inpt.value = '';
})

function addCountry(obj){
    let li = document.createElement('li');
    li.innerHTML = obj.country +' <b> ID: <b/>' + obj.id;
    ul.appendChild(li);

    let but = document.createElement('button');
    but.addEventListener('click',()=>{

        let index = countries.indexOf(obj)
        countries.splice(index,1)        
        renderCountries();

    })
    but.innerHTML = 'delete';
    li.appendChild(but);

}

function removeAllCountries(){
    while (ul.lastElementChild) {
        ul.removeChild(ul.lastElementChild);
    }
}

function renderCountries(){
    removeAllCountries();
    countries.forEach(c => addCountry(c));
}

function isValid(str){
    if(str.length < 1){
        alert('Input field must not be blank!');
        return false;
    }
    else if(countries.some(c => c.country === str)){
        alert("Country "+str+" already exists!");
        return false;
    }
    return true;
}

renderCountries();


