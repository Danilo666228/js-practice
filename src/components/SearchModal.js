class SearchModal {
    constructor(root, title, contacts = []) {
        this.root = root;
        this.title = title;
        this.contacts = contacts;
        this.renderTemplate();
        this.initialElement();
        this.renderListContacts();
        this.bindEvents();
    }

    initialElement() {
        this.dialog = this.root.querySelector("dialog");
        this.buttonClose = this.root.querySelector(".button-close");
        this.list = this.root.querySelector(".search__list");
        this.inputSearch = this.root.querySelector(".input-search");

    }

    renderTemplate() {
        this.root.innerHTML += /*html*/ `
		<dialog>
			<button class="button-close">Close</button>
			${this.title}
			<input type="search" class="input-search" />
			<ul class="search__list"></ul>
		</dialog>
	`;
    }

    onListClick(event) {

        const editButtonElement = this.root.querySelector('[data-js=search__list-item-edit]')
        if (event.target === editButtonElement) {
            this.onClose()
        }
    }

    onSearchChange() {
        if (!this.originalContacts) {
            this.originalContacts = JSON.parse(JSON.stringify(this.contacts));
        }
        const searchValue = this.inputSearch.value.trim().toLowerCase();

        const filteredContacts = {};

        for (let key in this.originalContacts) {
            const group = this.originalContacts[key].filter(({name}) =>
                name.toLowerCase().includes(searchValue)
            );
            if (group.length > 0) {
                filteredContacts[key] = group;
            }
        }

        this.contacts = filteredContacts;
        this.renderListContacts();
    }

    renderListContacts() {
        this.list.innerHTML = "";

        for (let node in this.contacts) {
            this.contacts[node].forEach(({id, name, role}) => {
                const li = document.createElement("li");
                li.classList.add("search__list-item");
                li.innerHTML = `<p>Имя: ${name}</p><p>Роль: ${role}</p> <button data-js="search__list-item-edit">Редактировать</button>`;
                this.list.append(li);
            });
        }
    }

    bindEvents() {
        this.buttonClose.addEventListener("click", this.onClose.bind(this));
        this.inputSearch.addEventListener("input", this.onSearchChange.bind(this));
        this.list.addEventListener('click', this.onListClick.bind(this))
    }


    onOpen() {
        this.dialog.showModal();
    }

    onClose() {
        this.dialog.close();
        this.dialog.remove();
    }
}

export default SearchModal;
