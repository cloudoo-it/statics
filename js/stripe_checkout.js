var stripe;

fetch("/cliente/stripe/setup/", {
  method:'GET'
}).then(function (response) {
  return response.json();
}).then(function (data) {
  stripe = Stripe(data.stripe_pub_key);
}).catch(function (err) {
  console.log('Errore: ', err);
});

var handleFetchResult = function(result) {
  if (!result.ok) {
    return result.json().then(function(json) {
      if (json.error && json.error.message) {
        throw new Error(result.url + ' ' + result.status + ' ' + json.error.message);
      }
    }).catch(function(err) {
      showErrorMessage(err);
      throw err;
    });
  }
  return result.json();
};

var createCheckoutSession = function(sistema_variante) {
  return fetch("/cliente/stripe/checkout/" + sistema_variante, {
    method: "GET"
  }).then(handleFetchResult);
};

var handleResult = function(result) {
  if (result.error) {
    showErrorMessage(result.error.message);
  }
};

var showErrorMessage = function(message) {
  var errorEl = document.getElementById("error-message")
  errorEl.textContent = message;
  errorEl.style.display = "block";
};

document
  .getElementById("cloudoo-autonomo")
  .addEventListener("click", function(evt) {
    createCheckoutSession("cloudoo-autonomo").then(function(data) {
      stripe
        .redirectToCheckout({
          sessionId: data.sessionId
        })
        .then(handleResult);
    });
  });

document
  .getElementById("cloudoo-microimpresa")
  .addEventListener("click", function(evt) {
    createCheckoutSession("cloudoo-microimpresa").then(function(data) {
      stripe
        .redirectToCheckout({
          sessionId: data.sessionId
        })
        .then(handleResult);
    });
  });

document
  .getElementById("cloudoo-piccolaimpresa")
  .addEventListener("click", function(evt) {
    createCheckoutSession("cloudoo-piccolaimpresa").then(function(data) {
      stripe
        .redirectToCheckout({
          sessionId: data.sessionId
        })
        .then(handleResult);
    });
  });