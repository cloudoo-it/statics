function loadNavbar() {
    fetch("/navbar", {
        method: 'GET'
    }).then(function (response) {
        return response.text();
    }).then(function (data) {
        document.querySelector('#navbar').innerHTML = data;
    }).catch(function (err) {
        console.log('Errore: ', err);
    });
}

function loadMain(url) {
    fetch(url, {
        method: 'GET'
    }).then(function (response) {
        return response.text();
    }).then(function (data) {
        document.querySelector('#main').innerHTML = data;
        document.querySelector("#main").querySelectorAll('script').forEach(function (pageScript) {
            eval(pageScript.innerText);
        });
    }).catch(function (err) {
        console.log('Errore: ', err);
    });
}

//
//  AUTH
//
function loadAuth(url) {
    fetch(url, {
        method: 'GET'
    }).then(function (response) {
        return response.text();
    }).then(function (data) {
        document.querySelector('#auth').innerHTML = data;
        document.querySelector("#auth").querySelectorAll('script').forEach(function (pageScript) {
            eval(pageScript.innerText);
        });
    }).catch(function (err) {
        messagge = document.querySelector('#auth_err');
        messagge.innerHTML = err;
        messagge.classList.remove('d-none');
    });
}

function submitAuth(url) {
    fetch(url, {
        method: 'GET'
    }).then(function (response) {
        return response.text();
    }).then(function (data) {
        window.location.reload();
    }).catch(function (err) {
        messagge = document.querySelector('#auth_err');
        messagge.innerHTML = err;
        messagge.classList.remove('d-none');
    });
}

function submitAuthForm(e, form) {
    e.preventDefault();
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form)
    }).then(function (response) {
        return response.text();
    }).then(function (data) {
        loadNavbar();
        loadMain('dashboard');
    }).catch(function (err) {
        messagge = document.querySelector('#auth_err');
        messagge.innerHTML = err;
        messagge.classList.remove('d-none');
    });
}