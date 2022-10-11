const Task = require('../models/itemsModel');

exports.getMainPage = (req, res)=> {
    Task.fetchTasks(tasks=>{
         let today = {
        date: date.getDate(),
        weekday:  date.getWeekDay()
    };

    console.log(tasks);
    res.render('index.ejs', {date: today, toDoItems : tasks}); 

    });
};


exports.postnewItem= (req, res) => {
    let item = new Task(req.body.newTask);
    item.saveTask();
    res.redirect('/');
}

exports.deleteItem = (req,res)=>{
    console.log('Call from delete', req.body.checkbox);
    Task.deleteTask(req.body.checkbox)
    res.redirect('/');

} 