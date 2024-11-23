let todoItems;

// fetchTodoItems() 함수가 todos라는 배열이 담긴 변수를 변환하고 있기 때문에 함수의 반환타입은 todos 변수의 데이터 타입이어야 함
function fetchTodoItems(): { id: number; title: string; done: boolean }[] {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// fetchTodos는 fetchTodoItems()함수의 반환값을 변수에 담아서 반환하므로 동일한 반환 타입을 가진다.
function fetchTodos(): { id: number; title: string; done: boolean }[] {
  const todos = fetchTodoItems();
  return todos;
}
//todo에는 현재 아무 값이나 올 수 있다.
//함수의 반환값 없으면 void
function addTodo(todo: any): void {
  todoItems.push(todo);
}

function deleteTodo(index: any): void {
  todoItems.splice(index, 1);
}

function completeTodo(index: any, todo: any): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

//첫 번째 할 일 출력
function logFirstTodo(): any {
  return todoItems[0];
}

// 완료된 할 일 목록 표시
function showCompleted(): any {
  return todoItems.filter(item => item.done);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems() {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
}

// NOTE: 유틸 함수
function log() {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
