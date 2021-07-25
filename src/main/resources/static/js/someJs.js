$.ajax({
        url: 'http://localhost:8080/rest/getPrincipal',
        type: 'get',
        dataType: 'json',
        success: function (data) {
            console.log(JSON.stringify(data.id));
            // data.message.forEach(function(item) {
            //     // item - один элемент массива, можно его рендерить как-угодно, например:
            //     $('#somediv').append('<div>' + item.name + '</div>');
            // });
        }

    }
)