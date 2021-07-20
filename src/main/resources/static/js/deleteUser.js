$(document).ready(function () {
    $('#deleteUser').click(function () {
        fetchPostDeleteUser();
    });

    function fetchPostDeleteUser() {
        // let roleValue = "";
        // let role = document.getElementById("inputModalRole");
        // if (role[role.selectedIndex].value === 2) {
        //     roleValue = "ROLE_ADMIN";
        // } else {
        //     roleValue = "ROLE_USER";
        // }
        //
        // // Create JSON object
        // let addData = {
        //     email: $('#delModalEmail').val(),
        //     login: $('#delModalLogin').val(),
        //     password: $('#delModalPassword').val(),
        //     roles: [{
        //         id: role[role.selectedIndex].value,
        //         role: roleValue,
        //         authority: roleValue
        //     }]
        // };

        let url = "/rest/deleteUser/"+$('#delModalId').val();
        // DO DELETE
        fetch(url, {
            method: 'DELETE',

        }).then(function () {
            document.location.reload();
        })
    }
});