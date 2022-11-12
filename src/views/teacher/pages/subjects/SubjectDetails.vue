<template>
    <!-- Main content -->
    <div class="invoice p-3 mb-3">
        <!-- title row -->
        <div class="row">
            <div class="col-12">
                <h4>
                    Subject Name: {{ subject.name}} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp;
                    &nbsp;
                    <small class="float-center"><b>Class: {{subject.class_id}}</b> </small>&nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

                </h4>
                <UnitView />
            </div>
            <!-- /.col -->
        </div>
        <!-- info row -->

    </div>
</template>

<script>
import axios from 'axios'
import UnitView from '../units/UnitView.vue';
export default {
    name: "Subject Details",
    data() {
        return {
            subject: []
        };
    },
    beforeMount() {
        let url = `http://localhost:8000/api/v1/subject-management/detail/${this.$route.params.id}`;
        axios.get(url).then(response => this.subject = response.data);
    },
    components: { UnitView }
}
</script>