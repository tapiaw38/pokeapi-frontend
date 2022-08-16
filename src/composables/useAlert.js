import { computed, ref } from "vue";

const useAlert = () => {
  let alertMessage = ref("");
  let isAlertOpen = ref(false);

  const closeAlert = () => {
    isAlertOpen.value = false;
  };

  const openAlert = (message = "") => {
    alertMessage.value = message;
    isAlertOpen.value = true;
  };

  return {
    alertMessage,
    isAlertOpen: computed({
      get: () => isAlertOpen.value,
      set: (value) => (isAlertOpen.value = value),
    }),
    closeAlert,
    openAlert,
  };
};

export default useAlert;
