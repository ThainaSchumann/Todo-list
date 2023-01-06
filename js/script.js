function addTask(){
    const newTask = $('.new-task').val()
    if (newTask === '') { return }
    const $ul = $('ul')
    const $li = $('<li>').appendTo($ul)
    const $div = $('<div>').addClass('checkbox').appendTo($li)
    const $label = $('<label>').appendTo($div)
    $('<input>')
       .attr('type', 'checkbox')
       .attr('name', 'task')
       .addClass('task-item')
       .click(toggleRemoved)
       .appendTo($label)
    $label.append(newTask)

    
    $('.new-task').val('')
}


function toggleRemoved(e) {
    const $li = $(e.currentTarget).closest('li')
    $li.toggleClass('removed')

}

function changeTitle(){
    const newTitle = $('.change-title').val()
    $('h2').text(newTitle)
}

$('.add-task').click(addTask)
$('.task-item').click(toggleRemoved) 
$('.change-title').keyup(changeTitle) 
