<template>
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Lesson Plan</h1>
                </div>

            </div>
        </div>
    </section>

    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="invoice p-3 mb-3">
                        <div class="row">
                            <div class="col-12">
                                <h4>
                                    Lesson Title: {{ lesson.title }}
                                    <small class="float-right">Date: {{ lesson.date }}</small>
                                </h4>
                                <hr />
                            </div>
                            <!-- /.col -->
                        </div>
                        <!-- info row -->
                        <div class="row invoice-info">
                            <div class="col-sm-4 invoice-col">
                                <address>
                                    Unit No: <strong>{{ lesson.unit_id }} </strong>
                                    <br>
                                    Topic Area: <strong>{{ lesson.topic_area }}</strong><br>
                                    Duration: <strong>{{ lesson.duration }}</strong><br>
                                    Class: <strong>{{ lesson.name }}</strong>
                                </address>
                            </div>
                            <!-- /.col -->
                            <div class="col-sm-6 invoice-col">
                                Learning Objectives:
                                <address>
                                    {{ lesson.objectives }}<br>

                                </address>
                            </div>

                        </div>


                    </div>
                    <!-- /.col -->
                </div>

            </div>

            <!-- ./row -->
            <div class="row mt-4">

                <div class="col-12 col-sm-12">
                    <div class="card card-primary card-tabs">
                        <div class="card-header p-0 pt-1">
                            <ul class="nav nav-tabs" id="custom-tabs-two-tab" role="tablist">
                                <li class="pt-2 px-3">
                                    <h3 class="card-title">Make your Plan</h3>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" id="custom-tabs-two-home-tab" data-toggle="pill"
                                        href="#custom-tabs-two-home" role="tab" aria-controls="custom-tabs-two-home"
                                        aria-selected="true">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="custom-tabs-two-profile-tab" data-toggle="pill"
                                        href="#custom-tabs-two-profile" role="tab"
                                        aria-controls="custom-tabs-two-profile"
                                        aria-selected="false">Introduction/Revision</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="custom-tabs-two-messages-tab" data-toggle="pill"
                                        href="#custom-tabs-two-messages" role="tab"
                                        aria-controls="custom-tabs-two-messages" aria-selected="false">Lesson Body</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="custom-tabs-two-settings-tab" data-toggle="pill"
                                        href="#custom-tabs-two-settings" role="tab"
                                        aria-controls="custom-tabs-two-settings" aria-selected="false">Conclusion</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="custom-tabs-two-settings-tab" data-toggle="pill"
                                        href="#custom-tabs-two-settings" role="tab"
                                        aria-controls="custom-tabs-two-settings" aria-selected="false">Evaluation</a>
                                </li>
                            </ul>
                        </div>
                        <div class="card-body">
                            <div class="tab-content" id="custom-tabs-two-tabContent">
                                <div class="tab-pane fade show active" id="custom-tabs-two-home" role="tabpanel"
                                    aria-labelledby="custom-tabs-two-home-tab">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada lacus
                                    ullamcorper dui molestie, sit amet congue quam finibus. Etiam ultricies nunc non
                                    magna feugiat commodo. Etiam odio magna, mollis auctor felis vitae, ullamcorper
                                    ornare ligula. Proin pellentesque tincidunt nisi, vitae ullamcorper felis aliquam
                                    id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                                    turpis egestas. Proin id orci eu lectus blandit suscipit. Phasellus porta, ante et
                                    varius ornare, sem enim sollicitudin eros, at commodo leo est vitae lacus. Etiam ut
                                    porta sem. Proin porttitor porta nisl, id tempor risus rhoncus quis. In in quam a
                                    nibh cursus pulvinar non consequat neque. Mauris lacus elit, condimentum ac
                                    condimentum at, semper vitae lectus. Cras lacinia erat eget sapien porta
                                    consectetur.
                                </div>
                                <div class="tab-pane fade" id="custom-tabs-two-profile" role="tabpanel"
                                    aria-labelledby="custom-tabs-two-profile-tab">
                                    <template>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Teachers activities</label>
                                                    <QuillEditor theme="snow" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Learners activities</label>
                                                    <QuillEditor theme="snow" />
                                                </div>
                                            </div>
                                        </div>
                                    </template>
                                </div>
                                <div class="tab-pane fade" id="custom-tabs-two-messages" role="tabpanel"
                                    aria-labelledby="custom-tabs-two-messages-tab">
                                    Morbi turpis dolor, vulputate vitae felis non, tincidunt congue mauris. Phasellus
                                    volutpat augue id mi placerat mollis. Vivamus faucibus eu massa eget condimentum.
                                    Fusce nec hendrerit sem, ac tristique nulla. Integer vestibulum orci odio. Cras nec
                                    augue ipsum. Suspendisse ut velit condimentum, mattis urna a, malesuada nunc.
                                    Curabitur eleifend facilisis velit finibus tristique. Nam vulputate, eros non luctus
                                    efficitur, ipsum odio volutpat massa, sit amet sollicitudin est libero sed ipsum.
                                    Nulla lacinia, ex vitae gravida fermentum, lectus ipsum gravida arcu, id fermentum
                                    metus arcu vel metus. Curabitur eget sem eu risus tincidunt eleifend ac ornare
                                    magna.
                                </div>
                                <div class="tab-pane fade" id="custom-tabs-two-settings" role="tabpanel"
                                    aria-labelledby="custom-tabs-two-settings-tab">
                                    Pellentesque vestibulum commodo nibh nec blandit. Maecenas neque magna, iaculis
                                    tempus turpis ac, ornare sodales tellus. Mauris eget blandit dolor. Quisque
                                    tincidunt venenatis vulputate. Morbi euismod molestie tristique. Vestibulum
                                    consectetur dolor a vestibulum pharetra. Donec interdum placerat urna nec pharetra.
                                    Etiam eget dapibus orci, eget aliquet urna. Nunc at consequat diam. Nunc et felis ut
                                    nisl commodo dignissim. In hac habitasse platea dictumst. Praesent imperdiet
                                    accumsan ex sit amet facilisis.
                                </div>
                                <div class="tab-pane fade" id="custom-tabs-two-settings" role="tabpanel"
                                    aria-labelledby="custom-tabs-two-settings-tab">
                                    Pellentesque vestibulum commodo nibh nec blandit. Maecenas neque magna, iaculis
                                    tempus turpis ac, ornare sodales tellus. Mauris eget blandit dolor. Quisque
                                    tincidunt venenatis vulputate. Morbi euismod molestie tristique. Vestibulum
                                    consectetur dolor a vestibulum pharetra. Donec interdum placerat urna nec pharetra.
                                    Etiam eget dapibus orci, eget aliquet urna. Nunc at consequat diam. Nunc et felis ut
                                    nisl commodo dignissim. In hac habitasse platea dictumst. Praesent imperdiet
                                    accumsan ex sit amet facilisis.
                                </div>
                            </div>
                        </div>
                        <!-- /.card -->
                    </div>
                </div>
            </div>

        </div><!-- /.col -->
    </section>
</template>
<script>
import axios from 'axios';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { FormWizard, TabContent } from 'vue-step-wizard'
import 'vue-step-wizard/dist/vue-step-wizard.css'
export default {
    name: "Lesson Plan ",
    components: {
        QuillEditor,
        FormWizard,
        TabContent
    },

    data() {
        return {
            lesson: []
        }
    },

    mounted() {
        this.getLesson()
    },
    methods: {
        async getLesson() {
            await axios.get('http://localhost:8000/api/v1/lesson-management/latest').then(response => {
                this.lesson = response.data
            }).catch(error => {
                console.log(error)
                this.lesson = []
            })
        }
    }
}
</script>

