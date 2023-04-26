var addclass = 'sidebarmenuitemactive';
var $cols = $('.sidebarmenuitem').click(function(e) {
    $cols.removeClass(addclass);
    $(this).addClass(addclass);
});


$(document).on('click', 'div div', function(){
    $(this).addClass('sidebarmenuitemactive').siblings.removeClass('sidebarmenuitemactive');
})


$(document).on('click', 'div div', function(){
    $(this).addClass('sidebarmenuitemactive').siblings.removeClass('sidebarmenuitemactive');
})