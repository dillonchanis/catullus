<template>
  <div class="container container--padding">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <div class="panel panel-default">
          <div class="panel-heading">Register</div>
          <div class="panel-body">
            <form class="form-horizontal" role="form" @submit.prevent="submit">
              <div class="form-group" :class="{ 'has-error': errors.name }">
                <label for="name" class="col-md-4 control-label">Name</label>

                <div class="col-md-6">
                  <input type="text" id="name" name="name" class="form-control" v-model="name">

                  <span class="help-block" v-if="errors.name">
                    {{ errors.name[0] }}
                  </span>
                </div>
              </div>

              <div class="form-group" :class="{ 'has-error': errors.email }">
                <label for="email" class="col-md-4 control-label">Email</label>

                <div class="col-md-6">
                  <input type="email" id="email" name="email" class="form-control" v-model="email">

                  <span class="help-block" v-if="errors.email">
                    {{ errors.email[0] }}
                  </span>
                </div>
              </div>

              <div class="form-group" :class="{ 'has-error': errors.password }">
                <label for="password" class="col-md-4 control-label">Password</label>

                <div class="col-md-6">
                  <input type="password" id="password" name="password" class="form-control" v-model="password">

                  <span class="help-block" v-if="errors.password">
                    {{ errors.password[0] }}
                  </span>
                </div>
              </div>

              <div class="form-group">
                <div class="col-md-6 col-md-offset-4">
                  <button type="submit" class="btn btn-primary">
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        name: null,
        email: null,
        password: null,
        errors: []
      }
    },
    methods: {
      ...mapActions({
        register: 'auth/register'
      }),
      submit() {
        this.register({
          payload: {
            name: this.name,
            email: this.email,
            password: this.password
          },
          context: this
        }).then( () => {
          this.$router.replace({ name: 'home '});
        });
      }
    }
  };
</script>