<template>
    <div name="select-address" >
        <div class="select-wraper ">
          <span class='left-font'>省份</span>
          <select v-model="province" @change="onchange">
              <option style='direction: ltr;' v-for="(item, index) in provinces" :key="index" :value="item">
                  <span>{{item}}</span>
              </option>
          </select>
        </div>
        <div class="select-wraper ">
          <span class='left-font'>城市</span>
          <select v-model="city" v-show="showCity" @change="onchange">
            <option v-for="(item, index) in citys" :key="index" :value="item">
                <span>{{item}}</span>
            </option>
          </select>
        </div>
        <div class="select-wraper ">
          <span class='left-font'>区县</span>
          <select v-model="detail" v-show="showDetail" @change="onchange">
              <option v-for="(item, index) in details" :key="index" :value="item">
                  <span>{{item}}</span>
              </option>
          </select>
        </div>
    </div>
</template>
<script>
// 修改自 https://github.com/Jogiter/vue-address 
import addressData from './address3.json'
const specAddress = ['台湾省', '香港特别行政区', '澳门特别行政区']

export default {
    name: 'lemon-address',
    watch: {
        province () {
            if (specAddress.indexOf(this.province) > -1) {
                this.showCity = false
                this.showDetail = false
            }
            this.city = this.citys ? this.citys[0] : null
            this.detail = this.details ? this.details[0] : null
        },
        city () {
            this.detail = this.details ? this.details[0] : null
        }
    },
    computed: {
        citys () {
            if (this.province) {
                let citys = Object.keys(addressData[this.province])
                if (!citys.length) {
                    this.showCity = false
                    this.city = null

                    this.showDetail = false
                    this.detail = null
                } else {
                    this.showCity = true
                    this.$nextTick(() => {
                        this.city = citys[0]
                    })
                }
                return citys
            }
        },
        details () {
            if (this.city) {
                let details = addressData[this.province][this.city]
                if (!details.length) {
                    this.showDetail = false
                    this.detail = null
                } else {
                    this.$nextTick(() => {
                        this.showDetail = true
                        this.detail = details[0]
                    })
                }
                return details
            }
        }
    },
    props: {
      provinceParent: {
        type: String
      },
      cityParent: {
        type: String
      },
      detailParent: {
        type: String
      }
    },
    data: () => {
        return {
          province: '',
          city: '',
          detail: '',
          showCity: true, // show select or not
          showDetail: true, // show select or not
          provinces: Object.keys(addressData)
        }
    },
    methods: {
        onchange (type) {
            this.$nextTick(() => {
                if (specAddress.indexOf(this.province) > -1) {
                    this.$emit('change', this.province)
                } else {
                    this.$emit('change', `${this.province}${this.city}${this.detail}`)
                }
                let option = {
                  province: this.province,
                  city: this.city,
                  detail: this.detail
                }
                this.$emit('update', option)
                console.log(this.province + this.city + this.detail);
            })

        }
    },
    created () {
      this.province = this.provinceParent;
      this.city = this.cityParent;
      this.detail = this.detailParent;
      console.log('---'+this.provinceParent)
    },
    mounted () {
        // this.province = '广东省'
        // this.city = '东莞市'
        // this.detail = '东城街道'
        this.$nextTick(() => {
            // this.city = ''
            // this.detail = ''
        })
    }
}
</script>

<style scoped>
[name="select-address"] {
  display: block;
}
.clearfix:after {
    content:".";
    display:block;
    height:0;
    visibility:hidden;
    clear:both;
}
.clearfix {
    *zoom:1;
}
.select-wraper{
  height: 80px;
  line-height: 80px;
  font-size: 28px;/*px*/
  text-align: left;
  overflow: hidden;
  display: flex;
  border-bottom: 2px solid #b5b5b6;/*px*/
  position: relative;
}
.select-wraper:after{
  content: '';
  display: inline-block;
  width: 20px;
  height: 20px;
  border-top: 1px solid #b5b5b6;
  border-right: 1px solid #b5b5b6;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translate(-50%, -50%) rotate(45deg);
}
.left-font{
  /* width: 100px; */
  padding: 0 10px;
}
select{
  flex: 1;
}
[name="select-address"] select {
  /* width: 100%; */
  /* display: inline-block; */
  background:none;
  appearance:none;
  -moz-appearance:none;
  -webkit-appearance:none;
  /* visibility: hidden; */
  text-align: right;
  /* padding-right: 60px; */
  text-indent: 30px;
  border: none;
  /* direction: rtl; */
  text-align: right;
  text-align-last: right;
  padding-right: 80px;
  background: none;
}

option{
  /* direction: ltr; */
}
/* [name="select-address"] select option {
    font-size: 32px;
}
[name="select-address"] select span{
    font-size: 32px;
} */
</style>
