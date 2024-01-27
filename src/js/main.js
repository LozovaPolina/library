import $ from './lib/lib';

// $('#first').on('click', () => {
//     $('.text').eq(0).fadeOut(800);
// });
// $('[data-count="second"]').on('click', () => {
//     $('.text').eq(1).fadeOut(800);
// });
// $('.btn').eq(2).on('click', () => {
//     $('.text').fadeToggle(800);
// });

// $('.wrap').html(
//     `
//     <div class="dropdown">
//         <button class="btn btn-dark dropdown-toggle" id="dropdownMenuBtn">Dropdown button</button>
//         <div class="dropdown-menu" data-toggle-id="dropdownMenuBtn">
//             <a href="#" class="dropdown-item">Action</a>
//             <a href="#" class="dropdown-item">Action #2</a>
//             <a href="#" class="dropdown-item">Action #3</a>
//         </div>
//     </div>`
// );
// $('.dropdown-toggle').dropdown();

$('#trigger').click(() => $('#trigger').createModal({
    text: {
        title: 'Modal titile',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Modi tenetur quis incidunt',
    },
    btns: {
        count: 3,
        settings: [
            [
                'Close',
                ['btn-danger', 'mr-10'],
                true
            ],
            [
                'Save changes',
                ['btn-success'],
                false,
                () => {
                    alert('Data saved')
                }
            ],
            [
                'another btn',
                ['btn-dark','ml-10'],
                false,
                () => {
                    alert('another btn')
                }
            ]
        ]
    }
}));
