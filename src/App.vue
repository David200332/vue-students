<template>
  <v-container>
    <div class="content">
      <v-btn @click="visible = true"> Add new </v-btn>
      <student-lits :students="students" v-if="students.length" />
      <p v-else>Список пуст</p>
      <my-modal :visible="visible" @closeModal="closeModal">
        <edit-form @modalSubmit="addStudent" />
      </my-modal>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import StudentLits from "./components/StudentsList.vue";
import MyModal from "./components/UI/MyModal.vue";
import EditForm from "./components/EditForm.vue";
import IStudents from "./interfaces/IStudents";

interface IData {
  visible: boolean;
}

export default Vue.extend({
  name: "App",
  components: {
    StudentLits,
    MyModal,
    EditForm,
  },
  data(): IData {
    return {
      visible: false,
    };
  },
  methods: {
    closeModal(): void {
      this.visible = false;
    },
    addStudent(newItem: IStudents): void {
      this.visible = false;
      newItem.id = Date.now();
      this.$store.commit("addPost", newItem);
    },
  },
  computed: {
    ...mapState({
      students: (state: any) => state.students.data,
    }),
  },
});
</script>

<style scoped>
.container {
  font-family: "Sintony", sans-serif;
}
</style>
