<script lang="ts">
  let todos: { text: string; completed: boolean }[] = [];
  let newTodo = '';
  let searchTerm = '';
  let filteredTodos: { text: string; completed: boolean }[] = [];

  $: filteredTodos = todos;

  function addTodo() {
    if (newTodo.trim()) {
      todos = [...todos, { text: newTodo, completed: false }];
      newTodo = '';
    }
  }

  function toggleTodo(index: number) {
    todos[index].completed = !todos[index].completed;
    todos = todos;
  }

  function deleteTodo(index: number) {
    todos = todos.filter((_, i) => i !== index);
  }

  function handleSearch() {
    filteredTodos = todos.filter(todo => 
      todo.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (!e.isComposing && e.code === 'Enter') {
      addTodo();
    }
  }
</script>

<main>
  <h1>할 일 목록</h1>
  <div class="add-todo">
    <input 
      type="text"
      bind:value={newTodo}
      placeholder="새로운 할 일을 입력하세요"
      on:keydown={handleKeyDown}
    />
    <button on:click={addTodo}>추가</button>
  </div>
  <div class="search-box">
    <input 
      type="text"
      bind:value={searchTerm}
      placeholder="할 일 검색..."
    />
    <button on:click={handleSearch}>검색</button>
  </div>
  <ul>
    {#each filteredTodos as todo, index}
      <li class:completed={todo.completed}>
        <input 
          type="checkbox" 
          checked={todo.completed} 
          on:change={() => toggleTodo(index)}
        />
        <span>{todo.text}</span>
        <button on:click={() => deleteTodo(index)}>삭제</button>
      </li>
    {/each}
  </ul>
</main>

<style>
main {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}
.add-todo, .search-box {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
input[type="text"] {
  flex: 1;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
button {
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #45a049;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid #eee;
}
.completed span {
  text-decoration: line-through;
  color: #888;
}
</style> 