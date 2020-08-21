$(document).ready(function () {

    $('.ActiveDelete').click(function () {

        var self = $(this);
        var id = self.attr('id');

        $.ajax({
            url: '/ToDoes/AJAXDelete',
            data: {
                id: id
            },
            type: 'DELETE',
            success: function (result) {
                $('#toDoTable').html(result);
            }
        });

    });
});