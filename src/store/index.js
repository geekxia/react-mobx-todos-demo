import {
    observable,
    action,
    computed
} from 'mobx'
import moment from 'moment'


class AppStore {
    @observable time = '2019'
    @observable todos = []
    @computed get desc() {
        return `${this.time} 还有 ${this.todos.length} 条任务待完成`
    }
    @action addTodo(todo) {
        this.todos.push(todo)
    }
    @action deleteTodo() {
        this.todos.pop()
    }
    @action resetTodo() {
        this.todos = []
    }
    @action getNow() {
        this.time = moment().format('YYYY-MM-DD HH:mm:ss')
    }
}


const store = new AppStore()

setInterval(()=>{
    store.getNow()
}, 1000)

export default store
