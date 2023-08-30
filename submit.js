window.addEventListener('load', () => {


    const name = sessionStorage.getItem('NAME');
    const gender = sessionStorage.getItem('GENDER');
    const formclass = sessionStorage.getItem('FORMCLASS');
    const email = sessionStorage.getItem('EMAIL');
    const BandExperience = sessionStorage.getItem('BANDEXPERIENCE');
    const background = sessionStorage.getItem('BACKGROUND');
    const section = sessionStorage.getItem('SECTION');
    const reason = sessionStorage.getItem('REASON');

    document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-gender').innerHTML = gender;
    document.getElementById('result-formclass').innerHTML = formclass;
    document.getElementById('result-email').innerHTML = email;
    document.getElementById('result-bandexperience').innerHTML = BandExperience;
    document.getElementById('result-background').innerHTML = background;
    document.getElementById('result-section').innerHTML = section;
    document.getElementById('result-reason').innerHTML = reason;
})