const ContactList = document.querySelector('#app').innerHTML += `
<section class="section contacts">
    <div class="contacts__inner">
        <input type="text" />
        <input type="text" />
        <input type="tel" placeholder="Введите номер телефона" />
        <button>Добавить</button>
        <button>Очистить список</button>
        <button>Поиск</button>
    </div>
    <ul class="contacts__list">
        
    </ul>
</section>
`

const renderList = () => {
    const contactList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const innerList = document.querySelector('.contacts__list')


    for (let node of contactList) {
        const listItemElement = document.createElement('li')
        listItemElement.classList.add('contacts__list-item')
        listItemElement.innerHTML = node

        innerList.append(listItemElement)
    }
}

renderList()
export default ContactList