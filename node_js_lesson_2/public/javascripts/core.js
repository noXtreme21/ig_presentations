window.addEventListener('load', function() {
    var tbody = document.getElementsByTagName('tbody')[0];
    socket.on('newTransaction', function(data) {
        var newElement = document.createElement('tr');
        newElement.innerHTML =
            '<td>' + data.id + '</td>' +
            '<td>' + data.amount + '</td>' +
            '<td>' + (data.price / 100).toFixed(2) + ' €</td>' +
            '<td>' + data.provider + '</td>'
        tbody.insertBefore(newElement, tbody.firstChild);
        addAmount(data.amount);
        addPrice(data.price / 100);
        
        var rows = tbody.childNodes.length;
        if (rows > 10) {
            tbody.removeChild(tbody.lastChild);
        }
    });

    var amount  = document.getElementById('amount');
    var amountCache = parseInt(amount.innerHTML);
    var price   = document.getElementById('price');
    var priceCache = parseFloat(price.innerHTML);
    
    function addAmount(value) {
        amountCache = parseInt(amountCache) + parseInt(value);
        if (/animate/.test(amount.className) === false) {
            amount.className += ' animate';
        }
    }
    
    function addPrice(value) {
        priceCache = (parseFloat(priceCache) + parseFloat(value)).toFixed(2);
        if (/animate/.test(price.className) === false) {
            price.className += ' animate';
        }
    }

    amount.addEventListener('webkitAnimationEnd', function() {
        amount.innerHTML = amountCache + ' Gold';
        amount.className = amount.className.replace(/( animate)/, '');
    });

    price.addEventListener('webkitAnimationEnd', function() {
        price.innerHTML = priceCache + ' €';
        price.className = price.className.replace(/( animate)/, '');
    });
});
