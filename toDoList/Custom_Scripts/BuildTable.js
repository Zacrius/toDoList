$(document).ready(function () {
    $.ajax({
        url: '/ToDoes/BuildTable',
        success: function (result) {
            $('#toDoTable').html(result);
            $('.form-group').val('');
        }
    });
});