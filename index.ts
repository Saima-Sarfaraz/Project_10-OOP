import inquirer from "inquirer";


class Student {
    name: string;
    constructor(n: string) {
        this.name = n;
    }
}



class Person {
    students: Student[] = [];

    addStudent(obj: Student) {
        this.students.push(obj);
    }
}

const persons = new Person();

const programmStart = async (persons: Person) => {
    do {
        console.log("Welcome Guest");

        const ans = await inquirer.prompt({
            type: "list",
            message: "Ap kis se bat karna pasnad karen gye...",
            name: "select",
            choices: ["khud se:Self", "student"],
        });

        if (ans.select == "khud se:Self") {
            console.log("hello me khudse baat kar raha hon");
            console.log("meri tabyt achi hai...");
        }
        if (ans.select == "student") {
            const ans = await inquirer.prompt({
                type: "input",
                message: "Ap ko kis student se baat karni hai ...",
                name: "student",
            });


            const student = persons.students.find((val) => val.name == ans.student);

            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);

                console.log(`Hello i am ${name.name}, or me thek hon`);
                console.log(persons.students);
            }

            if (student) {
                console.log(`Hello i am ${student.name}, or me thek hon......!!!`);
                console.log(persons.students);
            }

        }
    } while (true);

};
programmStart(persons);