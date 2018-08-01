import api from '../api/mockCourseApi';
import todoActions from './todoActionType';
const { SAVE, GETONE, EDIT, DELETE, INITIALIZE } = todoActions;

export function createTodo(todo) {
    return {
        type: SAVE,
        payload: api.saveCourse(todo)
            .then(api.getAllCourses)
    }
}

export function goforeditTodo(todo) {
    return {
        type: GETONE,
        item: todo
    }
}
export function editTodo(todo) {
    return {
        type: EDIT,
        payload: api.saveCourse(todo)
            .then(api.getAllCourses)
    }
}

export function deleteTodo(todo) {
    return {
        type: DELETE,
        payload: api.deleteCourse(todo)
            .then(api.getAllCourses)
    }
}

export function loadTodos() {
    return {
        type: INITIALIZE,
        payload: api.getAllCourses()
    }
}
