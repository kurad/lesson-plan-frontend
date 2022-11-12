<template>
    <!-- Main content -->
    <div class="invoice p-3 mb-3">
        <!-- title row -->
        <div class="row">
            <div class="col-12">
                <h4>
                    Class: {{ classe.name}} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp;
                    &nbsp;
                    <small class="float-center"><b>Size: {{classe.size}}</b> </small>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <small class="float-center"> <b>SEN: {{classe.learner_with_SEN}}</b></small>
                </h4>
            </div>
            <!-- /.col -->
        </div>
        <!-- info row -->

    </div>
    <div class="invoice p-3 mb-3">
        <div class="row">
            <div class="col-12">
                <h5>Subjects for this class</h5>
                <hr />
            </div>

            <SubjectsList />
        </div>
    </div>

    <!-- <div class="invoice p-3 mb-3">
        <div class="row">
            <div class="col-12">
                <h5>List of Units</h5>
                <hr />
            </div>

            <UnitView />
        </div>
    </div> -->

</template>


<script>
import axios from 'axios'
import SubjectsList from '@/views/teacher/pages/subjects/SubjectsList.vue'
import UnitView from '@/views/teacher/pages/units/UnitView.vue';

export default {
    name: "classes",
    data() {
        return {
            classe: []
        };
    },
    beforeMount() {
        let url = `http://localhost:8000/api/v1/class-setup/${this.$route.params.id}`;
        axios.get(url).then(response => this.classe = response.data);
    },
    components: { SubjectsList, UnitView }
}
</script>