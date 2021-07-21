$(document).ready(function () {
    $('#deleteUser').click(function () {
        fetchPostDeleteUser();
    });

    function fetchPostDeleteUser() {
        let url = "/rest/deleteUser/" + $('#delModalId').val();
        // DO DELETE
        fetch(url, {
            method: 'DELETE',

        }).then(function () {
            document.location.reload();
        })
    }
});