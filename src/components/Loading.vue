<template>
  <div class="wrapper">
    <svg
      version="1.1"
      id="loading"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 105 85"
      style="enable-background: new 0 0 105 85"
      xml:space="preserve"
      width="105"
      height="85"
    >
      <g>
        <path
          class="st0 svg-elem-1"
          d="M69.1,33.1C68.3,14.7,52.8,0.4,34.4,1.2S1.7,17.6,2.5,36C3.3,53.8,18,67.8,35.8,67.9V50.8
		c-9,0-16.3-7.3-16.3-16.3s7.3-16.3,16.3-16.3c8.4,0,15.5,6.4,16.2,14.9H35.8v17.4h33.3V33.1L69.1,33.1z"
        ></path>
        <path
          class="st0 svg-elem-2"
          d="M94,1.2L94,1.2c4.7,0,8.5,3.8,8.5,8.5V10c0,4.7-3.8,8.5-8.5,8.5l0,0c-4.7,0-8.5-3.8-8.5-8.5V9.7
		C85.4,5,89.3,1.2,94,1.2z"
        ></path>
        <path
          class="st0 svg-elem-3"
          d="M85.4,26.2v24.2c0,9-7.3,16.3-16.3,16.3v17.1c18.4,0,33.3-14.9,33.3-33.3V26.2H85.4z"
        ></path>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.st0 {
  fill-rule: evenodd;
  clip-rule: evenodd;
  fill: #231815;
  stroke: #231815;
  stroke-miterlimit: 10;
}

svg .svg-elem-1 {
  stroke-dashoffset: 334.476318359375px;
  stroke-dasharray: 334.476318359375px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715)
      0s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s;
}

svg.active .svg-elem-1 {
  stroke-dashoffset: 0;
  fill: rgb(35, 24, 21);
}

svg .svg-elem-2 {
  stroke-dashoffset: 56.05524826049805px;
  stroke-dasharray: 56.05524826049805px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715)
      0.12s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.12s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s;
}

svg.active .svg-elem-2 {
  stroke-dashoffset: 0;
  fill: rgb(35, 24, 21);
}

svg .svg-elem-3 {
  stroke-dashoffset: 162.52581787109375px;
  stroke-dasharray: 162.52581787109375px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715)
      0.24s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.24s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1s;
}

svg.active .svg-elem-3 {
  stroke-dashoffset: 0;
  fill: rgb(35, 24, 21);
}
</style>

<script>
export default {
  name: 'Loading',
  mounted() {
    setTimeout(() => {
      this.draw()
    }, 100)
  },
  methods: {
    draw() {
      var wrapper = document.querySelector('.wrapper svg')
      wrapper.classList.add('active')
    },
  },
}
</script>