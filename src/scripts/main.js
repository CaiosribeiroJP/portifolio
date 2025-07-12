import { courses } from "./courses.js";

export function main() {
$(document).ready(() => {
        $('#header-container').load('src/components/header.html');
        $('#presentation-container').load('src/components/presentation.html');
        $('#languages').load('src/components/divisionLanguage.html');
        $('#courses').load('src/components/courses.html' , () => {
            courses()
        });
        $('#projects').load('src/components/projects.html');
        $('#devices').load('src/components/divisionDevices.html');
        $('#meDesc').load('src/components/aboutMe.html');
        $('#contact').load('src/components/footer.html');   
    });
};
    