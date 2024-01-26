import $ from './lib/lib';

$('#first').on('click', () => {
    $('.text').eq(0).fadeOut(800);
});
$('[data-count="second"]').on('click', () => {
    $('.text').eq(1).fadeOut(800);
});
$('.btn').eq(2).on('click', () => {
    $('.text').fadeOut(800);
});