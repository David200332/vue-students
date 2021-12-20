import IState from "../interfaces/IState";
import IStudents from "../interfaces/IStudents";

export const studentsList = {
  state: (): IState => ({
    data: [
      {
        id: 0,
        name: "Danil Ivanov",
        age: "19",
        gpa: "4",
      },
      {
        id: 1,
        name: "Vald Ponamorenko",
        age: "20",
        gpa: "4",
      },
      {
        id: 2,
        name: "Mia Lubova",
        age: "18",
        gpa: "4",
      },
      {
        id: 3,
        name: "Irina Shapoval",
        age: "17",
        gpa: "5",
      },
    ],
  }),
  mutations: {
    setData(state: IState, data: IStudents[]): void {
      state.data = data;
    },
    removePost(state: IState, student: IStudents): void {
      state.data = state.data.filter((el) => el.id !== student.id);
    },
    addPost(state: IState, student: IStudents): void {
      state.data.push(student);
    },
    editPost(state: IState, modifyStudent: IStudents): void {
      state.data = state.data.map((el) =>
        el.id === modifyStudent.id ? modifyStudent : el
      );
    },
  },
};
