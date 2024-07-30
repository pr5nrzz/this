var workshop = {
    enrolledStudents: [],
    currentEnrollment: [],
    insertEnrolledStudent({ Id, Name, Paid }) {
        this.enrolledStudents.push({ Id, Name, Paid });
    },
    insertCurrentEnrollment(id) {
        this.currentEnrollment.push(id);
    },
    printRecords() {
        var currentEnrolledStudents = this.currentEnrollment.map(this.getEnrolledStudentRecord.bind(this));

        var sortedStudentRecords = this.ascSortByName(currentEnrolledStudents);

        for (var studentRecord of sortedStudentRecords) {
            this.printRecord(studentRecord);
        }
    },
    getEnrolledStudentRecord(enrolledStudentId) {
        return this.enrolledStudents.find(function findStudentById(studentRecord) {
            return studentRecord.Id == enrolledStudentId;
        });
    },
    paidStudentsYetToEnroll() {
        var studentRecords = this.enrolledStudents.filter(this.paidStudentRecords.bind(this));

        var sortedStudentRecords = this.ascSortByName(studentRecords);

        for (var studentRecord of sortedStudentRecords) {
            this.printRecord(studentRecord);
        }
    },
    paidStudentRecords(enrolledStudent) {
        if (!this.currentEnrollment.includes(enrolledStudent.Id) && enrolledStudent.Paid) {
            return enrolledStudent;
        }
    },
    remindUnPaidStudents() {
        var unPaidStudentsRecords = this.enrolledStudents.filter(this.unPaidStudentRecord);

        var sortedunPaidStudentsRecords = this.ascSortByName(unPaidStudentsRecords);

        for (var studentRecord of sortedunPaidStudentsRecords) {
            this.printRecord(studentRecord);
        }
    },
    unPaidStudentRecord(enrolledStudent) {
        if (!enrolledStudent.Paid) {
            return enrolledStudent;
        }
    },
    printRecord(studentRecord) {
        console.log(`${studentRecord.Name} (${studentRecord.Id}) ${studentRecord.Paid ? 'Paid' : 'Not Paid'}`);
    },
    ascSortByName(studentRecords) {
        return studentRecords.sort(this.sortByName);
    },
    sortByName(student1, student2) {
        var student1Name = student1.Name.toUpperCase();
        var student2Name = student2.Name.toUpperCase();

        if (student1Name < student2Name) {
            return -1;
        }

        if (student1Name > student2Name) {
            return 1;
        }

        return 0;
    }
};

/* ========================= */

workshop.insertEnrolledStudent({ Id: 1, Name: "Edward", Paid: true });
workshop.insertEnrolledStudent({ Id: 2, Name: "Sharpe", Paid: false });
workshop.insertEnrolledStudent({ Id: 3, Name: "Dave", Paid: true });
workshop.insertEnrolledStudent({ Id: 4, Name: "Bob", Paid: true });
workshop.insertEnrolledStudent({ Id: 5, Name: "Tim", Paid: false });
workshop.insertEnrolledStudent({ Id: 6, Name: "Kim", Paid: true });
workshop.insertEnrolledStudent({ Id: 7, Name: "George", Paid: true });
workshop.insertEnrolledStudent({ Id: 8, Name: "CT", Paid: false });
workshop.insertEnrolledStudent({ Id: 9, Name: "Liam", Paid: true });
workshop.insertEnrolledStudent({ Id: 10, Name: "Suzy", Paid: false });

workshop.insertCurrentEnrollment(3);
workshop.insertCurrentEnrollment(7);
workshop.insertCurrentEnrollment(10);
workshop.insertCurrentEnrollment(6);
workshop.insertCurrentEnrollment(2);

workshop.printRecords();
console.log("========");
workshop.paidStudentsYetToEnroll();
console.log("========");
workshop.remindUnPaidStudents();
