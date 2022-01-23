<template>
  <div>
    <h1>Hi, lets learn vue testing now!!</h1>
    <div>
      <div
        v-for="todo in todos"
        :key="todo.id"
        data-test="todo"
        :class="[todo.completed ? 'completed' : '']"
      >
        {{ todo.text }}
        <input
          type="checkbox"
          v-model="todo.completed"
          data-test="todo-checkbox"
        />
      </div>

      <form data-test="form" @submit.prevent="createTodo">
        <input data-test="new-todo" v-model="newTodo" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoApp",
  data() {
    return {
      newTodo: "",
      todos: [
        {
          id: 1,
          text: "Learn Vue Testing",
          completed: false,
        },
      ],
    };
  },
  methods: {
    createTodo() {
      this.todos.push({
        id: 2,
        text: this.newTodo,
        completed: false,
      });
    },
  },
};
</script>

<style scoped>
.completed {
  color: green;
}
</style>