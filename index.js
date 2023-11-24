const form = document.querySelector('form')
const timeBtn = document.querySelector('.selectButton')
const tariff = document.querySelectorAll('.tariffName')


form.addEventListener('submit', SubmitForm)
timeBtn.addEventListener("change", chengePrice)

const price = {
    base: [9.99, 100],
    vip: [19.99, 200],
    pro: [24.99, 250]
}


function SubmitForm(e) {
    const data = {}
    e.preventDefault()

    for (let i = 0; i <= 4; i += 1) {

        if (e.target[i].checked) {
            data[e.target[i].value] = true
        }
    }

    console.log(data)
}

function chengePrice(e) {
    const time = e.target.value

    tariff.forEach(element => {
        const value = element.children[1]
        const tariff = String(element.dataset.tariff)
        const total = time === "month" ? 0 : 1

        value.textContent = price[tariff][total]
    });
}