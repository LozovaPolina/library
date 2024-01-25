import $ from './lib/lib';

$('button').on('click', function () {
    $('div').eq(2).toggleClass('active')
});

// console.log($('button').html('hello'));
// $('div').click(function () {
//     console.log($(this).index());

// });
// console.log($('.active').find('.more'));
// console.log($('.some').closest('.findme'));
// console.log($('.more').eq(0).siblings());

// $('button').on('click', function () {
//     $('.findme').fadeOut(1800)
// });
$('button').on('click', function () {
    $('.findme').fadeIn(1800,'block')
});
