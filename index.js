const btn = document.getElementById('btn');
const search = document.getElementById('search')
const ulItem = document.getElementById('ul-item');


btn.addEventListener('click', () => {
    if (search.value == "") {
        alert("You must be enter text")
    } else {
        // console.log(search.value);
        const li = document.createElement('li');
        li.innerHTML = search.value;
        ulItem.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7'
        li.appendChild(span)
        setData()
    }
    search.value = "";
});

ulItem.addEventListener('click', (e) => {

    if (e.target.tagName == 'LI') {
        e.target.classList.toggle('checked');
        setData()
    } else if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
        setData()
    }
})


function setData() {
    localStorage.setItem("data", ulItem.innerHTML);
}
function getData() {
    ulItem.innerHTML = localStorage.getItem("data");
}

getData();


