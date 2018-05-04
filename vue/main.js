var vm = new Vue({
    el: '#tasks-index',
    data: {
        tasks:[
            {id: 1, name: 'Studying JavaScript', isDeleted: false},
            {id: 2, name: 'Studying PHP', isDeleted: false},
            {id: 3, name: 'Studying Ruby', isDeleted: false}
        ],
        newTask: '',
    },
    methods: {
        createTask: function(){
            var new_id = this.tasks[this.tasks.length - 1].id + 1;
            this.tasks.push({id: new_id, name: this.newTask, isDeleted: false});
            this.newTask = '';
        },
        doneTask: function(task_id){
            this.tasks.forEach(function(task){
                if (task.id === task_id){
                    return task.isDeleted = true;
                }
            })
        }
    }
})

window.vm = vm;