export function seleccionarSkills(seleccionadas = [], opciones: any): any {

    const skills: string[] = ['HTML5', 'CSS3', 'CSSGrid', 'Flexbox', 'JavaScript', 'jQuery', 'Node', 'Angular', 'VueJS', 'ReactJS', 'React Hooks', 'Redux', 'Apollo', 'GraphQL', 'TypeScript', 'PHP', 'Laravel', 'Symfony', 'Python', 'Django', 'ORM', 'Sequelize', 'Mongoose', 'SQL', 'MVC', 'SASS', 'WordPress'];

    let html: string = '';
    skills.forEach( (skill: any) => {
        html += `<li ${(seleccionadas as string[]).includes(skill) ? 'class="activo"':''}>${skill}</li>`;
    });

    return opciones.html = html;
}   

export function tipoContrato(this: any, seleccionado: string, opciones: any): any {
    return opciones.fn(this).replace(
        new RegExp(` value="${seleccionado}"`), '$& selected="selected"'
    );
}

export function isPage(this: any, current: String, url: String, options: any): any {
    if(current == url) {
        return options.fn(this);
    }
}