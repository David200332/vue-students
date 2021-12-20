<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Age</th>
          <th class="text-left">GPA</th>
          <th class="text-left"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in students" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.gpa }}</td>
          <td class="buttons">
            <v-btn
              class="buttonLeft"
              color="black"
              depressed
              @click="remove(item)"
              >Delete</v-btn
            >
            <v-btn
              class="buttonRight"
              color="black"
              depressed
              @click="openModal(item)"
              >Edit</v-btn
            >
          </td>
        </tr>
      </tbody>
      <my-modal :visible="visible" @closeModal="closeModal">
        <edit-form :student="activeStudent" @modalSubmit="editStudent" />
      </my-modal>
    </template>
  </v-simple-table>
</template>

<script lang="ts">
import Vue from "vue";
import IStudents from "../interfaces/IStudents";
import MyModal from "../components/UI/MyModal.vue";
import EditForm from "../components/EditForm.vue";

interface IData {
  visible: boolean;
  activeStudent: IStudents;
}

export default Vue.extend({
  name: "student-list",
  props: {
    students: {
      type: [],
      required: true,
    },
  },
  components: {
    MyModal,
    EditForm,
  },
  data(): IData {
    return {
      visible: false,
      activeStudent: {},
    };
  },
  methods: {
    remove(item: IStudents): void {
      this.$store.commit("removePost", item);
    },
    closeModal(): void {
      this.visible = false;
    },
    openModal(item: IStudents): void {
      this.visible = true;
      this.activeStudent = item;
    },
    editStudent(modifyStudent: IStudents): void {
      this.visible = false;
      this.$store.commit("editPost", modifyStudent);
    },
  },
});
</script>

<style>
.text-left {
  text-align: left;
  align-items: left;
}
.buttonLeft,
.buttonRight {
  margin: 0 30px;
}
.buttons {
  width: 400px;
}
</style>
