import { reactive } from "vue";

const form = reactive({
  instrument: "",
  genres: [],
  account: {
    email: "",
    receiveTips: false,
  },
});

export default function useState() {
  const updateField = (key, value) => {
    form[key] = value;
  };
  return {
    form,
    updateField,
  };
}
