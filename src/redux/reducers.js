
const initState = {
    filters: {
        search: "",
        status: "All",
        priority: [],
    },
    todoList: [
        { id: 1, name: "Learn Yoga", completed: false, priority: "Medium" },
        { id: 2, name: "Learn Redux", completed: true, priority: "High" },
        { id: 3, name: "Learn Java", completed: false, priority: "Low" }
    ]
}
const rootReducers = (state = initState, action) => {
    switch (action.type) {
        case "todoList/addTodo":
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    { id: 3, name: "Learn Java", completed: false, priority: "Low" }
                ]
            };
        default: return state;
    }
}

export default rootReducers;