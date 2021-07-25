$(document).ready(function () {
    getAllUsers();
});

function getAllUsers(){
    fetch("/rest/users").then(function(response) {
        response.json().then(function(data) {
            let tableBody = $('#fillTableAllUsers tbody');
            tableBody.empty();
            $(data).each(function (i, user) {
                let stringRoles = "";
                $(user.roles).each(function (i, role) {
                    stringRoles += role.role + " ";
                });
                tableBody.append(`<tr> 
                    <td class="font-weight-normal">${user.id}</td> 
                    <td class="font-weight-normal">${stringRoles}</td> 
                    <td class="font-weight-normal">${user.login}</td> 
<!--                    <td class="font-weight-normal">${user.password}</td> -->
                    <td class="font-weight-normal">${user.email}</td> 
                    <td><button id="updateButton" class="btn btn-info" role="button" data-toggle="modal" 
                    data-target="#exampleModal" onclick = 'fillModalForm(${user.id})'>Edit</button></td> 
                    <td><button id="deleteUser" class="btn btn-danger" role="button" data-toggle="modal" 
                    data-target="#deleteModal" onclick = 'fillDelForm(${user.id})'>Delete</button></td> 
                    </tr>`);
            })
        });
    });
}
