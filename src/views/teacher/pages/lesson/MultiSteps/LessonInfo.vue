<template>
    <h3>Lesson Information</h3>

    <section class="content">
        <div class="container-fluid">
            <div class="card card-default">
                <div class="card-body">
                    <form>
                        <div class="row">
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Select Subject</label>
                                    <select class="form-control select2">
                                        <option value="">-- Select Unit --</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Select Unit</label>
                                    <select class="form-control select2">
                                        <option value="">-- Select Unit --</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">

                                    <div class="form-group">
                                        <label>Lesson Title</label>
                                        <input type="text" class="form-control" placeholder="Lesson Title" />
                                    </div>
                                </div>

                            </div>
                            <!-- /.col -->
                        </div>
                        <!-- /.row -->
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Topic Area</label>
                                    <input type="text" class="form-control" />
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Duration</label>
                                    <input type="text" class="form-control" />
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Lesson Date</label>
                                    <input type="date" class="form-control" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label>Instructional Objectives</label>
                                    <textarea class="form-control" id="objectives"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Knowledge and Understanding</label>
                                    <textarea class="form-control" id="objectives"></textarea>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Skills</label>
                                    <textarea class="form-control" id="objectives"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Attitude & Value</label>
                                    <textarea class="form-control" id="objectives"></textarea>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Teaching Aids</label>
                                    <textarea class="form-control" id="objectives"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Learning Description</label>
                                    <textarea class="form-control" id="objectives"></textarea>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>References</label>
                                    <textarea class="form-control" id="objectives"></textarea>
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Save and Continue </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
</script>