class EditModal {
    constructor(root, title, contact, onUpdate) {
        this.root = root;
        this.title = title;
        this.contact = contact;
        this.onUpdate = onUpdate;
        this.renderTemplate();
        this.initialElement();
        this.bindEvents();
    }

    initialElement() {
        this.dialog = this.root.querySelector("dialog");
        this.form = this.root.querySelector(".form__edit");
        this.buttonClose = this.root.querySelector(".button-close");

        if (this.contact) {
            this.form.elements["name"].value = this.contact.name;
            this.form.elements["role"].value = this.contact.role;
        }
    }

    renderTemplate() {
        this.root.innerHTML += `
		<dialog>
			<button class="button-close">Close</button>
			${this.title}

            <form class="form__edit">
                <input id="name" name="name" title="Имя должно состоять только из букв" type="text" placeholder="Имя" pattern="^[A-Za-zА-Яа-яЁё]+$" required />
                <input id="role" name="role" title="Должнсть должна состоять только из букв" type="text" placeholder="Должность" pattern="^[A-Za-zА-Яа-яЁё]+$" required />
                <button>Редактировать</button>
            </form>
		</dialog>
	`;
    }

    onEditSubmit(event) {
        event.preventDefault();
        const formData = new FormData(this.form);
        const name = formData.get("name");
        const role = formData.get("role");
        const updatedContact = {
            ...this.contact,
            name,
            role,
        };

        this.onUpdate(updatedContact);

        this.onClose();
    }

    bindEvents() {
        this.buttonClose.addEventListener("click", this.onClose.bind(this));
        this.form.addEventListener("submit", this.onEditSubmit.bind(this));
    }

    onOpen() {
        this.dialog.showModal();
    }

    onClose() {
        this.dialog.close();
        this.dialog.remove();
    }
}

export default EditModal;
