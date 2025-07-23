import {contactService} from "../services/contact.service";
import EditModal from "./EditModal.js";
import SearchModal from "./SearchModal.js";

class ContactList {
    constructor() {
        this.root = document.querySelector("#app");
        this.renderTemplate();
        this.initialElements();
        this.initContacts();
        this.renderList();
        this.bindEvents();
    }

    state = {
        contacts: [],
    };

    initialElements() {
        this.form = this.root.querySelector(".contacts__form");
        this.list = this.root.querySelector(".contacts__list");
        this.clearButton = this.root.querySelector("[data-js=clear-button]");
        this.searchButton = this.root.querySelector("[data-js=search-button]");
    }

    async initContacts() {
        this.state.contacts = await contactService.getContacts();
        this.renderList();
    }

    renderTemplate() {
        this.root.innerHTML += /*html*/ `
          <section class="section contacts">
            <div class="contacts__inner">
              <form id="addContact" class="contacts__form">
                <input id="name" name="name" title="Имя должно состоять только из букв" type="text" placeholder="Имя" pattern="^[A-Za-zА-Яа-яЁё]+$" required />
                <input id="role" name="role" title="Должнсть должна состоять только из букв" type="text" placeholder="Должность" pattern="^[A-Za-zА-Яа-яЁё]+$" required />
                <input 
                  id="phone" 
                  name="phone" 
                  type="tel" 
                  placeholder="Телефон" 
                  pattern="^(\+7|8)?\d{10}$" 
                  title="Введите корректный номер телефона (10 цифр, можно с +7 или 8)" 
                  required 
                />
                <button type="submit" data-js="submit-form">Добавить</button>
              </form>
              <div>
                <button type="button" data-js="clear-button">Очистить список</button>
                <button type="button" data-js="search-button">Поиск</button>
              </div>
            </div>
            <ul class="contacts__list"></ul>
          </section>
        `;
    }

    bindEvents() {
        this.form.addEventListener("submit", this.onSubmitForm.bind(this));
        this.list.addEventListener("click", this.onListClick.bind(this));
        this.clearButton.addEventListener("click", this.onClearList.bind(this));
        this.searchButton.addEventListener("click", this.onSearch.bind(this));
    }

    onListClick(event) {
        const removeBtn = event.target.closest(".contacts__list-item-remove");
        if (removeBtn) {
            this.onRemoveItem(event);
            return;
        }

        const editBtn = event.target.closest("[data-js=edit-button]");
        if (editBtn) {
            this.onEditContact(event);
        }
    }

    renderList() {
        this.list.innerHTML = "";


        for (let node in this.state.contacts) {
            const li = document.createElement("li");
            li.classList.add("contacts__list-item");

            const detailsElement = document.createElement("details");
            detailsElement.classList.add("contacts__accordion");

            const summaryElement = document.createElement("summary");
            summaryElement.classList.add("contacts__accordion-head");
            summaryElement.innerHTML = `<span>${node}</span> <span>Общее : ${this.state.contacts[node].length}</span> <button class="contacts__list-item-remove">Удалить</button>`;
            detailsElement.appendChild(summaryElement);

            const innerUl = document.createElement("ul");
            innerUl.classList.add("contacts__sublist");

            this.state.contacts[node].forEach(contact => {
                const contactLi = document.createElement("li");
                contactLi.classList.add("contacts__sublist-item");
                contactLi.innerHTML = `
                    <span><b>Имя:</b> ${contact.name}</span><br>
                    <span><b>Должность:</b> ${contact.role}</span><br>
                    <span><b>Телефон:</b> ${contact.phone}</span>
                    <button data-js="edit-button">Редактировать</button>
                `;
                contactLi.dataset.id = contact.id;
                innerUl.appendChild(contactLi);
            });

            detailsElement.appendChild(innerUl);
            li.appendChild(detailsElement);
            this.list.appendChild(li);
        }
        localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }

    onEditContact(event) {
        const contactLi = event.target.closest(".contacts__sublist-item");
        const contactId = contactLi.dataset.id;
        const modalRoot = document.getElementById("modal-root");

        let currentContact = null;
        let groupKey = null;
        for (let group in this.state.contacts) {
            currentContact = this.state.contacts[group].find(c => c.id == contactId);
            if (currentContact) {
                groupKey = group;
                break;
            }
        }


        const onUpdate = updatedContact => {

            const idx = this.state.contacts[groupKey].findIndex(
                c => c.id == contactId
            );
            if (idx !== -1) {
                this.state.contacts[groupKey][idx] = updatedContact;
                this.renderList();
            }
        };

        const editModal = new EditModal(
            modalRoot,
            "Редактировать",
            currentContact,
            onUpdate
        );
        editModal.onOpen();
    }

    onSubmitForm(event) {
        event.preventDefault();
        const formData = new FormData(this.form);
        const {name, role, phone} = Object.fromEntries(formData);
        this.state.contacts[name[0]] = [
            ...this.state.contacts[name[0]],
            {id: Date.now(), name, role, phone},
        ];

        this.renderList();
    }

    onClearList(event) {
        event.preventDefault();
        this.list.innerHTML = "";
    }

    onRemoveItem(event) {
        const removeBtn = event.target.closest(".contacts__list-item-remove");
        if (!removeBtn) return;

        const details = removeBtn.closest("details");
        if (!details) return;

        const summary = details.querySelector("summary");
        if (!summary) return;

        const match = summary.textContent.match(/^([^\s(]+)/);
        if (!match) return;

        const letter = match[1];
        delete this.state.contacts[letter];

        this.renderList();
    }

    onSearch() {
        const modalRoot = document.getElementById("modal-root");
        const modal = new SearchModal(
            modalRoot,
            "Поиск контактов",
            this.state.contacts
        );
        modal.onOpen();
    }
}

export default ContactList;
