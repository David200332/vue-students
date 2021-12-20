<template>
  <div>
    <form>
      <div v-for="form in formData" :key="form.key">
        <p>{{ form.label }}</p>
        <v-text-field
          label="Enter"
          v-model="formState[form.name]"
        ></v-text-field>
      </div>
      <v-btn @click="addPost">Update student</v-btn>
    </form>
  </div>
</template>

<script lang="ts">
import { fromDataImport } from "../helpers/index";
import IStudents from "../interfaces/IStudents";
import IFromState from "../interfaces/IFromState";

interface IData {
  formData: IFromState[];
  formState: IStudents;
}

export default {
  props: {
    student: {
      type: Object,
      required: true,
    },
  },
  data(): IData {
    return {
      formData: fromDataImport,
      formState: this.student ? JSON.parse(JSON.stringify(this.student)) : {},
    };
  },
  methods: {
    addPost(): void {
      this.$emit("modalSubmit", this.formState);
    },
  },
};
</script>

<style></style>
