import { subscribeToHellfireClub } from './firebase/hellfire-club.js';

const nameInput = document.getElementById('txtName');
const emailInput = document.getElementById('txtEmail');
const levelInput = document.getElementById('txtLevel');
const characterInput = document.getElementById('txtCharacter');

const subscribeInput = document.getElementById('btnSubscribe');


subscribeInput.addEventListener('click', async () => {
    const subscription = {
        name: nameInput.value,
        email: emailInput.value,
        level: levelInput.value,
        character: characterInput.value
    }
    const subscriptionId = await subscribeToHellfireClub(subscription);
    console.log(`Inscrito com sucesso: ${subscriptionId}`);

    nameInput.value = "";
    emailInput.value = "";
    levelInput.value = "";
    characterInput.value = "";
})

//validação de formulário
//Feedback de inscrição
//erro na inscrição