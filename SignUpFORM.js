function handleSubmit () {
    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const formclass = document.getElementById('formclass').value;
    const email = document.getElementById('email').value;
    const experience = document.getElementById('BandExperience').value;
    const background = document.getElementById('background').value;
    const section = document.getElementById('section').value;
    const reason = document.getElementById('reason').value;


    sessionStorage.setItem("NAME", name);
    sessionStorage.setItem("GENDER", gender);
    sessionStorage.setItem("FORMCLASS", formclass);
    sessionStorage.setItem("EMAIL", email);
    sessionStorage.setItem("BANDEXPERIENCE", experience);
    sessionStorage.setItem("BACKGROUND", background);
    sessionStorage.setItem("SECTION", section);
    sessionStorage.setItem("REASON", reason);
    return;
}