const createHTML = (text) => {
    let template = document.createElement('template');
    template.innerHTML = text;
    return template.content;
}

const symbols = () => {
    fetch('https://api.exchangerate.host/symbols', {
        method: 'GET'
    })
        .then(res => res.json())
        .then(data => {
            let symbols1 = document.getElementById('symbols1');
            let symbols2 = document.getElementById('symbols2');
            Object.keys(data.symbols).forEach((symbol) => {
                symbols1.appendChild(createHTML(`<option value="${symbol}">${symbol}</option>`));
                symbols2.appendChild(createHTML(`<option value="${symbol}">${symbol}</option>`));
            })
        });
}

window.addEventListener('load', symbols);

symbols1.addEventListener('change', (event)=>{
    let selected= event.target.value;
    console.log(selected);
})