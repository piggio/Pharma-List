$(document).ready(function () {
    $('.btn').on('click', function () {
        $('html, body').animate({
            scrollTop: ($('#pos').offset().top)
        }, 2000);
        $("#pharma-list").fadeIn(4000);
        var data = {
            resource_id: 'e0497f9d-ddec-4983-b8d1-9701266d0631', // the resource id 
        };
        $.ajax({
            url: 'http://dati.lazio.it/catalog/api/action/datastore_search'
            , data: data
            , dataType: 'jsonp'
            , success: function (data) {
                console.log(data);
                var input = document.getElementById('myinput');
                var arr = data.result.records
                var container = document.getElementById('pharma-list')
                var result = false;
                container.innerHTML = "";
                arr.forEach(function (element) {
                    if (element.CAP == input.value) {
                        
                        result = true
                        container.innerHTML += '<li>' + element.INDIRIZZO + '</li>'
                    }
                    
                    
                    
                    
                    
                });
                
                if (!result) {
                    
                    
                    alert('non ci sono farmacie nella zona indicata');
                }
                
            }
        });
    });
});
