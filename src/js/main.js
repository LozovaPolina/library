import $ from './lib/lib';

$('button').on('click', function () {
    $('div').eq(2).toggleClass('active')
});

// console.log($('button').html('hello'));
$('div').click(function () {
    console.log($(this).index());

});
// console.log($('.active').find('.more'));
// console.log($('.some').closest('.findme'));
console.log($('.more').eq(0).siblings());