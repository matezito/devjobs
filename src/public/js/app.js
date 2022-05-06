document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelector('.lista-conocimientos');

    if (typeof (skills) != 'undefined' && skills != null) {
        skills.addEventListener('click', agregarSkills);

        skillsSeleccionados();
    }
});

const skills = new Set();

const agregarSkills = (e) => {
    e.preventDefault();

    if (e.target.tagName == 'LI') {
        if (e.target.classList.contains('activo')) {
            skills.delete(e.target.textContent);
            e.target.classList.remove('activo');
        } else {
            skills.add(e.target.textContent);
            e.target.classList.add('activo');
        }
    }

    const skillArray = [...skills];
    document.querySelector('#skills').value = skillArray;
}

const skillsSeleccionados = () => {
    const seleccionadas = Array.from(document.querySelectorAll('.lista-conocimientos .activo'));

    seleccionadas.forEach(seleccionada => {
        skills.add(seleccionada.textContent);
    });

    const skillArray = [...skills];
    document.querySelector('#skills').value = skillArray;
}