$(document).on('submit', 'form', function (e) {
    $(e.currentTarget).find('[type="submit"]').prop("disabled", true);
    $(e.currentTarget).find('[type="submit"]').addClass("is-loading");
})

$('.modal-background').click(function () {
    document.getElementsByClassName('modal is-active')[0].classList.remove("is-active");
});

$('.closeModal').click(function () {
    document.getElementsByClassName('modal is-active')[0].classList.remove("is-active");
});

function getLastUrlSegment()
{
    var urlArray = window.location.href.split('/');
    return urlArray.pop() || urlArray.pop();
}

function adjustNewsletterHeight() {
    if ($('.push')[0] !== undefined) {
        $('.push').height(window.innerHeight - $('#resultAlert').height() - $('.push').offset().top - $('#newsletter').height() + 32);        
    }
    
    $(window).resize(function () {
        if ($('.push')[0] !== undefined) {
            $('.push').height(window.innerHeight - $('#resultAlert').height() - $('.push').offset().top - $('#newsletter').height() + 32);        
        }
    })
}

function getMetricIdFromURI()
{
    var array = window.location.pathname.split("/");
    return array.pop() || array.pop();
}


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}