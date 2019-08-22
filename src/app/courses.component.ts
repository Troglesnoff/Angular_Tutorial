import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    templateUrl: './courses.component.html'
})
export class CoursesComponent{
    title = "List of courses";
    courses;
    imageUrl = "";
    colSpan = 2;
    isActive = true;
    email ="me@example.com";

    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }

    text = `jfhdjf asdfh ashf adfla lfkjasdh`;

    //Dependency injection
    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }

    onSave($event){
        $event.stopPropagation();
        console.log("Button was clicked", $event);
    }

    onDivClicked(){
        console.log("Div was clicked");
    }

    onKeyUp(){
        console.log(this.email);
    }

    

}