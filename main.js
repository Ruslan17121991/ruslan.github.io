Vue.use(window.vuelidate.default)
const { required, minLength, maxLength, alpha, numeric, alphaNum } = window.validators

new Vue({
  el: "#app",
  data: {
    surename: '',
    name: '',
    data: '',
    tel: '',
    city: '',
    name_doctor: '',
    options: ['VIP', 'Проблемные', 'ОМС'],
    options2: ['Иванов', 'Захаров', 'Чернышева'],
    options3: ['Паспорт', 'Свидетельство о рождении', 'Вод. удостоверение'],
    dataPassport: '',
    passportNum: '',
    checked: true,
    select: [],
    selected: [],
    submitStatus: null
  },

  validations: {
    surename: {
      required,
      maxLength: maxLength(10),
      alpha: val => /^[a-zA-Zа-яёА-ЯЁ]*$/i.test(val),
    },
    name: {
      required,
      maxLength: maxLength(10),
      alpha: val => /^[a-zA-Zа-яёА-ЯЁ]*$/i.test(val),
    },
    data: {
      required
    },
    tel: {
      required,
      minLength: minLength(11),
      maxLength: maxLength(11),
      numeric,
      num: val => /^[7]+[0-9]*$/i.test(val),
    },
    city: {
      required,
      cityNum: val => /^[a-zA-Zа-яёА-ЯЁ.-]+(?:[\s-][\/a-zA-Zа-яёА-ЯЁ.]+)*$/i.test(val),
    },
    dataPassport: {
      required,
    },
    passportNum: {
      numeric
    },
    select: {
      required
    },
    selected: {
      required
    }



  },
  methods: {
    status(validation) {
      return {
        error: validation.$error,
        dirty: validation.$dirty
      }
    },
    onSubmit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        // this.submitStatus = 'ERROR'
        console.log('Заполниете все обязательные поля!')

      } else {
        // do your submit logic here
        window.location.href="./new client/client.html"
      }
    }

  }
})