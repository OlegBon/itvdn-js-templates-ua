// Element Access Pattern
const elements = {
  userForm: document.querySelector("#userForm"),
  editForm: document.querySelector("#editForm"),
  deleteForm: document.querySelector("#deleteForm"),
  tableBody: document.querySelector("#userTable tbody"),
  cancelDelete: document.querySelector("#cancelDelete"),
  inputs: {
    id: document.querySelector("#id"),
    name: document.querySelector("#name"),
    age: document.querySelector("#age"),
    email: document.querySelector("#email"),
  },
  editInputs: {
    id: document.querySelector("#editId"),
    name: document.querySelector("#editName"),
    age: document.querySelector("#editAge"),
    email: document.querySelector("#editEmail"),
  },
  deleteInput: document.querySelector("#deleteId"),
};

// UI Component Pattern
class UIComponent {
  constructor(element) {
    this.element = element;
  }
  show() {
    this.element.style.display = "block";
  }
  hide() {
    this.element.style.display = "none";
  }
}

const editUI = new UIComponent(elements.editForm);
const deleteUI = new UIComponent(elements.deleteForm);

// Менеджер користувачів
const userRegistry = new Map();

// Клас користувача
class User {
  constructor(id, name, age, email) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.email = email;
  }

  render() {
    const row = elements.tableBody.insertRow();
    row.dataset.id = this.id;

    row.innerHTML = `
      <td>${this.id}</td>
      <td>${this.name}</td>
      <td>${this.age}</td>
      <td>${this.email}</td>
      <td>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      </td>
    `;

    row.querySelector(".edit").addEventListener("click", () => {
      const current = userRegistry.get(this.id);
      elements.editInputs.id.value = current.id;
      elements.editInputs.name.value = current.name;
      elements.editInputs.age.value = current.age;
      elements.editInputs.email.value = current.email;
      editUI.show();
    });

    row.querySelector(".delete").addEventListener("click", () => {
      elements.deleteInput.value = this.id;
      deleteUI.show();
    });
  }
}

// Додавання користувача
elements.userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const { id, name, age, email } = elements.inputs;
  const user = new User(id.value, name.value, age.value, email.value);
  userRegistry.set(id.value, user);
  user.render();
  e.target.reset();
});

// Редагування
elements.editForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const { id, name, age, email } = elements.editInputs;
  const row = document.querySelector(`tr[data-id="${id.value}"]`);
  const currentUser = userRegistry.get(id.value);

  if (row && currentUser) {
    row.cells[1].textContent = name.value;
    row.cells[2].textContent = age.value;
    row.cells[3].textContent = email.value;

    currentUser.name = name.value;
    currentUser.age = age.value;
    currentUser.email = email.value;
  }

  editUI.hide();
});

// Видалення
elements.deleteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const id = elements.deleteInput.value;
  const row = document.querySelector(`tr[data-id="${id}"]`);
  if (row) row.remove();
  userRegistry.delete(id);
  deleteUI.hide();
});

elements.cancelDelete.addEventListener("click", () => {
  deleteUI.hide();
});
