<template>

    <QuillEditor theme="snow" />
</template>
<script>
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css'
export default {
    name: "FormStepps",
    components: {
        QuillEditor
    }
}
</script>