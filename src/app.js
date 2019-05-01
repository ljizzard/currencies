import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      currencies: [],
      selectedCurrency: "",
      amount: ""
    },

    methods: {
      getCurrencies: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(res => res.json())
        .then((data) => {
        this.currencies = data.rates;
      });
    }
    },
    computed: {
      convertedFromEuro: function(){
        return (this.amount * this.selectedCurrency).toFixed(2);
      },
      convertedToEuro: function(){
        return (this.amount / this.selectedCurrency).toFixed(2);
      }
    },
    mounted(){
      this.getCurrencies()
    }
})
})
