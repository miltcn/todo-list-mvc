const Task = require('../models/Task');


module.exports = class TaskController {

  static async show(request, response) {
    const tasks = await Task.findAll({ raw: true })
    response.render('tasks/show', { tasks });
  }

  static viewCreate(request, response) {
    response.render('tasks/create');
  }

  static async save(request, response) {
    const task = {
      title: request.body.title,
      description: request.body.description,
      done: false
    }
    await Task.create(task);
    response.redirect('/tasks');
  }

  static async viewUpdate(request, response) {
    const id = request.params.id;
    const task = await Task.findOne({ where: { id: id }, raw: true });
    response.render('tasks/edit', { task });
  }

  static async update(request, response) {
    const id = request.body.id;
    const task = {
      title: request.body.title,
      description: request.body.description
    }
    await Task.update(task, { where: { id: id }});
    response.redirect('/tasks');
  }

  static async delete(request, response) {
    const id = request.body.id;
    await Task.destroy({ where: { id: id } });
    response.redirect('/tasks');
  }

  static async toggleStatus(request, response) {
    const id = request.body.id;

    const task = {
      done: request.body.done == '0' ? true : false,
    }
    await Task.update(task, { where: { id: id } });
    response.redirect('/tasks');
  }
}