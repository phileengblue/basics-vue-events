const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  methods:{
    confirmInput() {
      this.confirmedName =  this.name
    },
    SubmitForm() {
      alert('Form submitted!');
    },
    setName(event, lastName) {
      this.name = event.target.value + '  ' + lastName;
    } ,
    add(number) {
      this.counter = this.counter + number;
    }, 
    reduce(number) {
      this.counter = this.counter - number;
    }, 
  }
});

app.mount('#events');
