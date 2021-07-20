
function fillModalForm(id){
    let url = "/rest/updateUser/"+id;
    fetch(url).then(function(response) {
        response.json().then(function(data) {
            $('#inputModalId').val(data.id);
            $('#inputModalEmail').val(data.email);
            $('#inputModalLogin').val(data.login);
            $('#inputModalPassword').val(data.password);
        });
    });
}
function fillDelForm(id){
    let url = "/rest/user/"+id;
    fetch(url).then(function(response) {
        response.json().then(function(data) {
            $('#delModalId').val(data.id);
            $('#delModalEmail').val(data.email);
            $('#delModalLogin').val(data.login);
            $('#delModalPassword').val(data.password);
            $('#delModalRole').val('USER');
        });
    });
}