(function() {
    $('div.button-grid div').on('click', function() {
        var atag = $(this).find('a')[0];
        sendGaEvent(atag.getAttribute('data-cat'), atag.getAttribute('data-act'), atag.getAttribute('data-label'));
        window.open(atag.getAttribute('href'), '_blank');
    });

    $('div.button-grid div a, .card-component .card-component-padded a').on('click', function(event) {
        event.preventDefault();
    });

    $('.card-component').on('click', function() {
        var atag = $(this).find('a')[0];
        sendGaEvent(atag.getAttribute('data-cat'), atag.getAttribute('data-act'), atag.getAttribute('data-label'));
    });

    $('.slide-overlay-image').on('click', function() {
        var atag = $(this).find('p.slide-point')[0];
        sendGaEvent(atag.getAttribute('data-cat'), atag.getAttribute('data-act'), atag.getAttribute('data-label'));
        window.open(atag.getAttribute('data-href'), '_blank');
    });

}).call(this);

function sendGaEvent(cat, act, label)
{
    ga('send', {
        hitType: "event",
        eventCategory: cat,
        eventAction: act,
        eventLabel: label
    });
}