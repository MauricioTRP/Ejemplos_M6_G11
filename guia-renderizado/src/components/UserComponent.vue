<script>
import UserCard from './UserCard.vue'
import UserForm from './UserForm.vue'
import UserDetails from './UserDetails.vue'

export default {
  name: 'UserComponent',
  data() {
    return {
      users: [],
      selectedUser: null
    }
  },
  components: { UserCard, UserForm, UserDetails },
  methods: {
    newUser(user) {
      this.users.push(user)
    },
    deleteUser(idx) {
      this.users.splice(idx, 1)
    },
    changeSelected(idx) {
      this.selectedUser = this.users[idx]
    }
  }
}
</script>
<template>
  <div>
    <UserForm @new-user="newUser" />
    <UserCard
      v-for="(user, idx) in users"
      :key="idx"
      :name="user.name"
      :picture="user.picture"
      :email="user.email"
      :idx="idx"
      @delete-user="deleteUser"
      @change-selected="changeSelected"
    />

    <UserDetails
      v-if="selectedUser"
      :name="selectedUser.name"
      :picture="selectedUser.picture"
      :email="selectedUser.email"
      :idx="idx"
    />
  </div>
</template>
