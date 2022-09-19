<script>
  import { mapState, mapWritableState } from 'pinia'
  import { useCounterStore } from '../stores/counter'
    export default {
      data: () => ({
        selected: 2,
        selectedEmails: [],
        selectAll: false
      }),
      watch: {
        selectAll (val) {
          if (val) {
            this.selectedEmails = this.archivedEmails;
          } else {
            this.selectedEmails = [];
          }
        }
      },
      computed: {
        ...mapState(useCounterStore, ['archivedEmails']),
        ...mapWritableState(useCounterStore, ['dialogOpen'])
      },
      methods: {
        openDialog (e) {
          if(!e.target.classList.contains('verify-click')) {
            this.dialogOpen = true
          }
        }
      }
    }
  </script>
  <template>
    <div class="inbox">
      <h2 class="inbox__header">Emails Selected {{ selectedEmails.length }}</h2>
      <div class="inbox__nav">
        <label class="check-parent" for="all">
          <input type="checkbox" id="all" v-model="selectAll">
          <span class="checkmark"></span>
        </label>
      </div>
      <div class="inbox__emails">
        <template v-for="(email, index) in archivedEmails" :key="index">
          <div class="inbox__email inbox__email--disabled" @click="openDialog">
            <label class="check-parent" :for="`first-${index}`">{{ email }}
              <input type="checkbox" checked="checked" :id="`first-${index}`" :value="email" v-model="selectedEmails">
              <span class="checkmark"></span>
            </label>
          </div>
        </template>
      </div>
    </div>
  </template>
  
  <style lang="scss" scoped>
  .inbox {
    &__header {
      font-size: 3.2rem;
      font-weight: 600;
    }
    &__nav {
      margin-bottom: 60px;
      display: flex;
      // justify-content: space-between;
      align-items: center;
    }
    &__button {
      color: black;
      background-color: #eee;
      padding: 12px 20px;
      margin: 5px 0;
      border-radius: 4px;
      font-weight: 500;
      border: none;
      text-align: left;
      margin-left: 30px;
      border: 1px solid #ddd
    }
    &__email {
      border: 1px solid #ddd;
      background-color: #eee;
      padding: 16px 15px 0;
      margin-bottom: 30px;
      &--disabled {
        opacity: 0.5;
      }
    }
  }
  .check-parent {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  /* Hide the browser's default checkbox */
  .check-parent input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  
  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #ddd;
    border-radius: 4px;
  }
  
  /* On mouse-over, add a grey background color */
  .check-parent:hover input ~ .checkmark {
    background-color: #ccc;
  }
  
  /* When the checkbox is checked, add a blue background */
  .check-parent input:checked ~ .checkmark {
    background-color: #2196F3;
  }
  
  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  
  /* Show the checkmark when checked */
  .check-parent input:checked ~ .checkmark:after {
    display: block;
  }
  
  /* Style the checkmark/indicator */
  .check-parent .checkmark:after {
    left: 9px;
    top: 5px;
    width: 7px;
    height: 13px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  </style>
  