
import Student from '/both/collection'
export class StudentM {
    static findStudent() {
      return Student.find().fetch()
    }
    static insertStudent(doc) {
        return Student.insert(doc)
    }
    // findStudent() {
    // return Student.find().fetch()
    // }
  }