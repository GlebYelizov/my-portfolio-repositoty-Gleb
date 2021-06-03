//-----------------------function to filter Works shown--------------------

export function filterWorks(attribute) {
    let worksList = document.querySelectorAll('[data-cat]');
    for (let work of worksList) {
        work.classList.remove('hide');
        if (attribute !== 'all' && work.getAttribute('data-cat') !== attribute) {
            work.classList.add('hide');
        }
    }
}
