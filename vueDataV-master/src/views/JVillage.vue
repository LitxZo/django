<template>
  <div class="brand-container">
    <div class="wrap">
      <header>
        <div class="weather">
          <img :src="imgSrc">
          <span class="tem">{{ weatcherData.tem }}°C</span>
          <span class="wea">{{ weatcherData.wea }}</span>
        </div>
        <h2>蒋庄村智慧平台系统</h2>
        <div class="showTime">
          <span class="time">{{ nowTime }}</span>
          <span class="date">
            <span>{{ week }}</span>
            <span>{{ date }}</span>
          </span>

          <el-tooltip class="item" effect="dark" content="更多功能" placement="top">
            <div @click="dialogTableVisible = true" type="primary" style="margin-left: 16px; cursor:pointer;">
              <svg t="1681888859373" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="2613" width="32" height="32">
                <path
                  d="M267.388928 514.13504c0 58.960896-47.794176 106.753024-106.754048 106.753024S53.880832 573.095936 53.880832 514.13504s47.793152-106.761216 106.753024-106.761216S267.388928 455.175168 267.388928 514.13504z"
                  fill="#3eabc6" p-id="2614"></path>
                <path
                  d="M619.495424 514.13504c0 58.960896-47.794176 106.753024-106.754048 106.753024s-106.753024-47.793152-106.753024-106.753024 47.793152-106.761216 106.753024-106.761216S619.495424 455.175168 619.495424 514.13504z"
                  fill="#3eabc6" p-id="2615"></path>
                <path
                  d="M971.602944 514.13504c0 58.960896-47.794176 106.753024-106.754048 106.753024s-106.753024-47.793152-106.753024-106.753024S805.888 407.374848 864.848896 407.374848 971.602944 455.175168 971.602944 514.13504z"
                  fill="#3eabc6" p-id="2616"></path>
              </svg>
            </div>
          </el-tooltip>
          <el-dialog width="60%" title="更多功能" :visible.sync="dialogTableVisible" close-on-click-modal="false">
            <!--            <el-tabs v-model="activeName" @tab-click="handleClick">-->
            <el-tabs v-model="activeName">
              <el-tab-pane label="功能1" name="first">
                <div
                  style="display: grid; grid-template-columns:repeat(3,33%);grid-template-rows:repeat(2,50%);grid-gap:5px; width: 100%; height: 400px;">
                  <div
                    style="background-color: #42b983; display: flex; flex-direction: column; gap: 20px; justify-content: center; align-items: center;color: aliceblue;">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="32px" height="32px"
                      viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
                      <g opacity="0.3">
                        <line fill="none" stroke="#B35047" x1="48" y1="0" x2="48" y2="512" />
                        <line fill="none" stroke="#B35047" x1="80" y1="0" x2="80" y2="512" />
                        <line fill="none" stroke="#B35047" x1="112" y1="0" x2="112" y2="512" />
                        <line fill="none" stroke="#B35047" x1="144" y1="0" x2="144" y2="512" />
                        <line fill="none" stroke="#B35047" x1="176" y1="0" x2="176" y2="512" />
                        <line fill="none" stroke="#B35047" x1="208" y1="0" x2="208" y2="512" />
                        <line fill="none" stroke="#B35047" x1="240" y1="0" x2="240" y2="512" />
                        <line fill="none" stroke="#B35047" x1="272" y1="0" x2="272" y2="512" />
                        <line fill="none" stroke="#B35047" x1="304" y1="0" x2="304" y2="512" />
                        <line fill="none" stroke="#B35047" x1="336" y1="0" x2="336" y2="512" />
                        <line fill="none" stroke="#B35047" x1="368" y1="0" x2="368" y2="512" />
                        <line fill="none" stroke="#B35047" x1="400" y1="0" x2="400" y2="512" />
                        <line fill="none" stroke="#B35047" x1="432" y1="0" x2="432" y2="512" />
                        <line fill="none" stroke="#B35047" x1="464" y1="0" x2="464" y2="512" />
                        <line fill="none" stroke="#B35047" x1="496" y1="0" x2="496" y2="512" />
                        <line fill="none" stroke="#B35047" x1="0" y1="48" x2="512" y2="48" />
                        <line fill="none" stroke="#B35047" x1="0" y1="80" x2="512" y2="80" />
                        <line fill="none" stroke="#B35047" x1="0" y1="112" x2="512" y2="112" />
                        <line fill="none" stroke="#B35047" x1="0" y1="144" x2="512" y2="144" />
                        <line fill="none" stroke="#B35047" x1="0" y1="176" x2="512" y2="176" />
                        <line fill="none" stroke="#B35047" x1="0" y1="208" x2="512" y2="208" />
                        <line fill="none" stroke="#B35047" x1="0" y1="240" x2="512" y2="240" />
                        <line fill="none" stroke="#B35047" x1="0" y1="272" x2="512" y2="272" />
                        <line fill="none" stroke="#B35047" x1="0" y1="304" x2="512" y2="304" />
                        <line fill="none" stroke="#B35047" x1="0" y1="336" x2="512" y2="336" />
                        <line fill="none" stroke="#B35047" x1="0" y1="368" x2="512" y2="368" />
                        <line fill="none" stroke="#B35047" x1="0" y1="400" x2="512" y2="400" />
                        <line fill="none" stroke="#B35047" x1="0" y1="432" x2="512" y2="432" />
                        <line fill="none" stroke="#B35047" x1="0" y1="464" x2="512" y2="464" />
                        <line fill="none" stroke="#B35047" x1="0" y1="496" x2="512" y2="496" />
                        <line fill="none" stroke="#B35047" x1="0" y1="16" x2="512" y2="16" />
                        <line fill="none" stroke="#B35047" x1="16" y1="0" x2="16" y2="512" />
                      </g>
                      <g>
                        <line fill="none" stroke="#B35047" x1="32" y1="0" x2="32" y2="512" />
                        <line fill="none" stroke="#B35047" x1="64" y1="0" x2="64" y2="512" />
                        <line fill="none" stroke="#B35047" x1="96" y1="0" x2="96" y2="512" />
                        <line fill="none" stroke="#B35047" x1="128" y1="0" x2="128" y2="512" />
                        <line fill="none" stroke="#B35047" x1="160" y1="0" x2="160" y2="512" />
                        <line fill="none" stroke="#B35047" x1="192" y1="0" x2="192" y2="512" />
                        <line fill="none" stroke="#B35047" x1="224" y1="0" x2="224" y2="512" />
                        <line fill="none" stroke="#B35047" x1="256" y1="0" x2="256" y2="512" />
                        <line fill="none" stroke="#B35047" x1="288" y1="0" x2="288" y2="512" />
                        <line fill="none" stroke="#B35047" x1="320" y1="0" x2="320" y2="512" />
                        <line fill="none" stroke="#B35047" x1="352" y1="0" x2="352" y2="512" />
                        <line fill="none" stroke="#B35047" x1="384" y1="0" x2="384" y2="512" />
                        <line fill="none" stroke="#B35047" x1="416" y1="0" x2="416" y2="512" />
                        <line fill="none" stroke="#B35047" x1="448" y1="0" x2="448" y2="512" />
                        <line fill="none" stroke="#B35047" x1="480" y1="0" x2="480" y2="512" />
                        <line fill="none" stroke="#B35047" x1="0" y1="32" x2="512" y2="32" />
                        <line fill="none" stroke="#B35047" x1="0" y1="64" x2="512" y2="64" />
                        <line fill="none" stroke="#B35047" x1="0" y1="96" x2="512" y2="96" />
                        <line fill="none" stroke="#B35047" x1="0" y1="128" x2="512" y2="128" />
                        <line fill="none" stroke="#B35047" x1="0" y1="160" x2="512" y2="160" />
                        <line fill="none" stroke="#B35047" x1="0" y1="192" x2="512" y2="192" />
                        <line fill="none" stroke="#B35047" x1="0" y1="224" x2="512" y2="224" />
                        <line fill="none" stroke="#B35047" x1="0" y1="256" x2="512" y2="256" />
                        <line fill="none" stroke="#B35047" x1="0" y1="288" x2="512" y2="288" />
                        <line fill="none" stroke="#B35047" x1="0" y1="320" x2="512" y2="320" />
                        <line fill="none" stroke="#B35047" x1="0" y1="352" x2="512" y2="352" />
                        <line fill="none" stroke="#B35047" x1="0" y1="384" x2="512" y2="384" />
                        <line fill="none" stroke="#B35047" x1="0" y1="416" x2="512" y2="416" />
                        <line fill="none" stroke="#B35047" x1="0" y1="448" x2="512" y2="448" />
                        <line fill="none" stroke="#B35047" x1="0" y1="480" x2="512" y2="480" />
                        <rect fill="none" stroke="#B35047" width="512" height="512" />
                      </g>
                      <g>
                        <g>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M480,448h-32v-64c0-17.672-14.312-32-32-32s-32,14.328-32,32v64H128v-64
			c0-17.672-14.312-32-32-32s-32,14.328-32,32v64H32c-17.688,0-32,14.328-32,32s14.312,32,32,32h448c17.688,0,32-14.328,32-32
			S497.688,448,480,448z M480,0H32C14.312,0,0,14.328,0,32v192c0,35.344,28.656,64,64,64s64-28.656,64-64c0,35.344,28.656,64,64,64
			s64-28.656,64-64c0,35.344,28.656,64,64,64s64-28.656,64-64c0,35.344,28.656,64,64,64s64-28.656,64-64V32
			C512,14.328,497.688,0,480,0z" />
                        </g>
                      </g>
                    </svg>
                    功能1
                  </div>
                  <div
                    style="background-color: #0d5aa7; display: flex; gap: 20px;flex-direction: column; justify-content: center; align-items: center;color: aliceblue;">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="32px" height="32px"
                      viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
                      <g opacity="0.3">
                        <line fill="none" stroke="#B35047" x1="48" y1="0" x2="48" y2="512" />
                        <line fill="none" stroke="#B35047" x1="80" y1="0" x2="80" y2="512" />
                        <line fill="none" stroke="#B35047" x1="112" y1="0" x2="112" y2="512" />
                        <line fill="none" stroke="#B35047" x1="144" y1="0" x2="144" y2="512" />
                        <line fill="none" stroke="#B35047" x1="176" y1="0" x2="176" y2="512" />
                        <line fill="none" stroke="#B35047" x1="208" y1="0" x2="208" y2="512" />
                        <line fill="none" stroke="#B35047" x1="240" y1="0" x2="240" y2="512" />
                        <line fill="none" stroke="#B35047" x1="272" y1="0" x2="272" y2="512" />
                        <line fill="none" stroke="#B35047" x1="304" y1="0" x2="304" y2="512" />
                        <line fill="none" stroke="#B35047" x1="336" y1="0" x2="336" y2="512" />
                        <line fill="none" stroke="#B35047" x1="368" y1="0" x2="368" y2="512" />
                        <line fill="none" stroke="#B35047" x1="400" y1="0" x2="400" y2="512" />
                        <line fill="none" stroke="#B35047" x1="432" y1="0" x2="432" y2="512" />
                        <line fill="none" stroke="#B35047" x1="464" y1="0" x2="464" y2="512" />
                        <line fill="none" stroke="#B35047" x1="496" y1="0" x2="496" y2="512" />
                        <line fill="none" stroke="#B35047" x1="0" y1="48" x2="512" y2="48" />
                        <line fill="none" stroke="#B35047" x1="0" y1="80" x2="512" y2="80" />
                        <line fill="none" stroke="#B35047" x1="0" y1="112" x2="512" y2="112" />
                        <line fill="none" stroke="#B35047" x1="0" y1="144" x2="512" y2="144" />
                        <line fill="none" stroke="#B35047" x1="0" y1="176" x2="512" y2="176" />
                        <line fill="none" stroke="#B35047" x1="0" y1="208" x2="512" y2="208" />
                        <line fill="none" stroke="#B35047" x1="0" y1="240" x2="512" y2="240" />
                        <line fill="none" stroke="#B35047" x1="0" y1="272" x2="512" y2="272" />
                        <line fill="none" stroke="#B35047" x1="0" y1="304" x2="512" y2="304" />
                        <line fill="none" stroke="#B35047" x1="0" y1="336" x2="512" y2="336" />
                        <line fill="none" stroke="#B35047" x1="0" y1="368" x2="512" y2="368" />
                        <line fill="none" stroke="#B35047" x1="0" y1="400" x2="512" y2="400" />
                        <line fill="none" stroke="#B35047" x1="0" y1="432" x2="512" y2="432" />
                        <line fill="none" stroke="#B35047" x1="0" y1="464" x2="512" y2="464" />
                        <line fill="none" stroke="#B35047" x1="0" y1="496" x2="512" y2="496" />
                        <line fill="none" stroke="#B35047" x1="0" y1="16" x2="512" y2="16" />
                        <line fill="none" stroke="#B35047" x1="16" y1="0" x2="16" y2="512" />
                      </g>
                      <g>
                        <line fill="none" stroke="#B35047" x1="32" y1="0" x2="32" y2="512" />
                        <line fill="none" stroke="#B35047" x1="64" y1="0" x2="64" y2="512" />
                        <line fill="none" stroke="#B35047" x1="96" y1="0" x2="96" y2="512" />
                        <line fill="none" stroke="#B35047" x1="128" y1="0" x2="128" y2="512" />
                        <line fill="none" stroke="#B35047" x1="160" y1="0" x2="160" y2="512" />
                        <line fill="none" stroke="#B35047" x1="192" y1="0" x2="192" y2="512" />
                        <line fill="none" stroke="#B35047" x1="224" y1="0" x2="224" y2="512" />
                        <line fill="none" stroke="#B35047" x1="256" y1="0" x2="256" y2="512" />
                        <line fill="none" stroke="#B35047" x1="288" y1="0" x2="288" y2="512" />
                        <line fill="none" stroke="#B35047" x1="320" y1="0" x2="320" y2="512" />
                        <line fill="none" stroke="#B35047" x1="352" y1="0" x2="352" y2="512" />
                        <line fill="none" stroke="#B35047" x1="384" y1="0" x2="384" y2="512" />
                        <line fill="none" stroke="#B35047" x1="416" y1="0" x2="416" y2="512" />
                        <line fill="none" stroke="#B35047" x1="448" y1="0" x2="448" y2="512" />
                        <line fill="none" stroke="#B35047" x1="480" y1="0" x2="480" y2="512" />
                        <line fill="none" stroke="#B35047" x1="0" y1="32" x2="512" y2="32" />
                        <line fill="none" stroke="#B35047" x1="0" y1="64" x2="512" y2="64" />
                        <line fill="none" stroke="#B35047" x1="0" y1="96" x2="512" y2="96" />
                        <line fill="none" stroke="#B35047" x1="0" y1="128" x2="512" y2="128" />
                        <line fill="none" stroke="#B35047" x1="0" y1="160" x2="512" y2="160" />
                        <line fill="none" stroke="#B35047" x1="0" y1="192" x2="512" y2="192" />
                        <line fill="none" stroke="#B35047" x1="0" y1="224" x2="512" y2="224" />
                        <line fill="none" stroke="#B35047" x1="0" y1="256" x2="512" y2="256" />
                        <line fill="none" stroke="#B35047" x1="0" y1="288" x2="512" y2="288" />
                        <line fill="none" stroke="#B35047" x1="0" y1="320" x2="512" y2="320" />
                        <line fill="none" stroke="#B35047" x1="0" y1="352" x2="512" y2="352" />
                        <line fill="none" stroke="#B35047" x1="0" y1="384" x2="512" y2="384" />
                        <line fill="none" stroke="#B35047" x1="0" y1="416" x2="512" y2="416" />
                        <line fill="none" stroke="#B35047" x1="0" y1="448" x2="512" y2="448" />
                        <line fill="none" stroke="#B35047" x1="0" y1="480" x2="512" y2="480" />
                        <rect fill="none" stroke="#B35047" width="512" height="512" />
                      </g>
                      <g>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M480,224c-17.688,0-32,14.328-32,32v192H64V256c0-17.672-14.312-32-32-32
		S0,238.328,0,256v224c0,17.672,14.312,32,32,32h448c17.688,0,32-14.328,32-32V256C512,238.328,497.688,224,480,224z" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M224,320c0,17.672,14.312,32,32,32s32-14.328,32-32V128h96L256,0L128,128h96V320z
		" />
                      </g>
                    </svg>
                    功能2
                  </div>
                  <div
                    style="background-color: #FFB951; display: flex; gap: 20px;flex-direction: column;justify-content: center; align-items: center;color: aliceblue;">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="32px" height="32px"
                      viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
                      <g opacity="0.3">
                        <line fill="none" stroke="#B35047" x1="48" y1="0" x2="48" y2="512" />
                        <line fill="none" stroke="#B35047" x1="80" y1="0" x2="80" y2="512" />
                        <line fill="none" stroke="#B35047" x1="112" y1="0" x2="112" y2="512" />
                        <line fill="none" stroke="#B35047" x1="144" y1="0" x2="144" y2="512" />
                        <line fill="none" stroke="#B35047" x1="176" y1="0" x2="176" y2="512" />
                        <line fill="none" stroke="#B35047" x1="208" y1="0" x2="208" y2="512" />
                        <line fill="none" stroke="#B35047" x1="240" y1="0" x2="240" y2="512" />
                        <line fill="none" stroke="#B35047" x1="272" y1="0" x2="272" y2="512" />
                        <line fill="none" stroke="#B35047" x1="304" y1="0" x2="304" y2="512" />
                        <line fill="none" stroke="#B35047" x1="336" y1="0" x2="336" y2="512" />
                        <line fill="none" stroke="#B35047" x1="368" y1="0" x2="368" y2="512" />
                        <line fill="none" stroke="#B35047" x1="400" y1="0" x2="400" y2="512" />
                        <line fill="none" stroke="#B35047" x1="432" y1="0" x2="432" y2="512" />
                        <line fill="none" stroke="#B35047" x1="464" y1="0" x2="464" y2="512" />
                        <line fill="none" stroke="#B35047" x1="496" y1="0" x2="496" y2="512" />
                        <line fill="none" stroke="#B35047" x1="0" y1="48" x2="512" y2="48" />
                        <line fill="none" stroke="#B35047" x1="0" y1="80" x2="512" y2="80" />
                        <line fill="none" stroke="#B35047" x1="0" y1="112" x2="512" y2="112" />
                        <line fill="none" stroke="#B35047" x1="0" y1="144" x2="512" y2="144" />
                        <line fill="none" stroke="#B35047" x1="0" y1="176" x2="512" y2="176" />
                        <line fill="none" stroke="#B35047" x1="0" y1="208" x2="512" y2="208" />
                        <line fill="none" stroke="#B35047" x1="0" y1="240" x2="512" y2="240" />
                        <line fill="none" stroke="#B35047" x1="0" y1="272" x2="512" y2="272" />
                        <line fill="none" stroke="#B35047" x1="0" y1="304" x2="512" y2="304" />
                        <line fill="none" stroke="#B35047" x1="0" y1="336" x2="512" y2="336" />
                        <line fill="none" stroke="#B35047" x1="0" y1="368" x2="512" y2="368" />
                        <line fill="none" stroke="#B35047" x1="0" y1="400" x2="512" y2="400" />
                        <line fill="none" stroke="#B35047" x1="0" y1="432" x2="512" y2="432" />
                        <line fill="none" stroke="#B35047" x1="0" y1="464" x2="512" y2="464" />
                        <line fill="none" stroke="#B35047" x1="0" y1="496" x2="512" y2="496" />
                        <line fill="none" stroke="#B35047" x1="0" y1="16" x2="512" y2="16" />
                        <line fill="none" stroke="#B35047" x1="16" y1="0" x2="16" y2="512" />
                      </g>
                      <g>
                        <line fill="none" stroke="#B35047" x1="32" y1="0" x2="32" y2="512" />
                        <line fill="none" stroke="#B35047" x1="64" y1="0" x2="64" y2="512" />
                        <line fill="none" stroke="#B35047" x1="96" y1="0" x2="96" y2="512" />
                        <line fill="none" stroke="#B35047" x1="128" y1="0" x2="128" y2="512" />
                        <line fill="none" stroke="#B35047" x1="160" y1="0" x2="160" y2="512" />
                        <line fill="none" stroke="#B35047" x1="192" y1="0" x2="192" y2="512" />
                        <line fill="none" stroke="#B35047" x1="224" y1="0" x2="224" y2="512" />
                        <line fill="none" stroke="#B35047" x1="256" y1="0" x2="256" y2="512" />
                        <line fill="none" stroke="#B35047" x1="288" y1="0" x2="288" y2="512" />
                        <line fill="none" stroke="#B35047" x1="320" y1="0" x2="320" y2="512" />
                        <line fill="none" stroke="#B35047" x1="352" y1="0" x2="352" y2="512" />
                        <line fill="none" stroke="#B35047" x1="384" y1="0" x2="384" y2="512" />
                        <line fill="none" stroke="#B35047" x1="416" y1="0" x2="416" y2="512" />
                        <line fill="none" stroke="#B35047" x1="448" y1="0" x2="448" y2="512" />
                        <line fill="none" stroke="#B35047" x1="480" y1="0" x2="480" y2="512" />
                        <line fill="none" stroke="#B35047" x1="0" y1="32" x2="512" y2="32" />
                        <line fill="none" stroke="#B35047" x1="0" y1="64" x2="512" y2="64" />
                        <line fill="none" stroke="#B35047" x1="0" y1="96" x2="512" y2="96" />
                        <line fill="none" stroke="#B35047" x1="0" y1="128" x2="512" y2="128" />
                        <line fill="none" stroke="#B35047" x1="0" y1="160" x2="512" y2="160" />
                        <line fill="none" stroke="#B35047" x1="0" y1="192" x2="512" y2="192" />
                        <line fill="none" stroke="#B35047" x1="0" y1="224" x2="512" y2="224" />
                        <line fill="none" stroke="#B35047" x1="0" y1="256" x2="512" y2="256" />
                        <line fill="none" stroke="#B35047" x1="0" y1="288" x2="512" y2="288" />
                        <line fill="none" stroke="#B35047" x1="0" y1="320" x2="512" y2="320" />
                        <line fill="none" stroke="#B35047" x1="0" y1="352" x2="512" y2="352" />
                        <line fill="none" stroke="#B35047" x1="0" y1="384" x2="512" y2="384" />
                        <line fill="none" stroke="#B35047" x1="0" y1="416" x2="512" y2="416" />
                        <line fill="none" stroke="#B35047" x1="0" y1="448" x2="512" y2="448" />
                        <line fill="none" stroke="#B35047" x1="0" y1="480" x2="512" y2="480" />
                        <rect fill="none" stroke="#B35047" width="512" height="512" />
                      </g>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M480,224c-17.688,0-32,14.328-32,32v192H64V256c0-17.672-14.312-32-32-32
	S0,238.328,0,256v224c0,17.672,14.312,32,32,32h448c17.688,0,32-14.328,32-32V256C512,238.328,497.688,224,480,224z" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M288,224V28.091C288,12.578,273.688,0,256,0s-32,12.578-32,28.091V224h-96l128,128
	l128-128H288z" />
                    </svg>
                    功能3
                  </div>
                  <div
                    style="background-color: #a463f2; display: flex; gap: 20px;flex-direction: column;justify-content: center; align-items: center;color: aliceblue;">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="32px" height="32px"
                      viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
                      <g opacity="0.3">
                        <line fill="none" stroke="#B35047" x1="48" y1="0" x2="48" y2="512" />
                        <line fill="none" stroke="#B35047" x1="80" y1="0" x2="80" y2="512" />
                        <line fill="none" stroke="#B35047" x1="112" y1="0" x2="112" y2="512" />
                        <line fill="none" stroke="#B35047" x1="144" y1="0" x2="144" y2="512" />
                        <line fill="none" stroke="#B35047" x1="176" y1="0" x2="176" y2="512" />
                        <line fill="none" stroke="#B35047" x1="208" y1="0" x2="208" y2="512" />
                        <line fill="none" stroke="#B35047" x1="240" y1="0" x2="240" y2="512" />
                        <line fill="none" stroke="#B35047" x1="272" y1="0" x2="272" y2="512" />
                        <line fill="none" stroke="#B35047" x1="304" y1="0" x2="304" y2="512" />
                        <line fill="none" stroke="#B35047" x1="336" y1="0" x2="336" y2="512" />
                        <line fill="none" stroke="#B35047" x1="368" y1="0" x2="368" y2="512" />
                        <line fill="none" stroke="#B35047" x1="400" y1="0" x2="400" y2="512" />
                        <line fill="none" stroke="#B35047" x1="432" y1="0" x2="432" y2="512" />
                        <line fill="none" stroke="#B35047" x1="464" y1="0" x2="464" y2="512" />
                        <line fill="none" stroke="#B35047" x1="496" y1="0" x2="496" y2="512" />
                        <line fill="none" stroke="#B35047" x1="0" y1="48" x2="512" y2="48" />
                        <line fill="none" stroke="#B35047" x1="0" y1="80" x2="512" y2="80" />
                        <line fill="none" stroke="#B35047" x1="0" y1="112" x2="512" y2="112" />
                        <line fill="none" stroke="#B35047" x1="0" y1="144" x2="512" y2="144" />
                        <line fill="none" stroke="#B35047" x1="0" y1="176" x2="512" y2="176" />
                        <line fill="none" stroke="#B35047" x1="0" y1="208" x2="512" y2="208" />
                        <line fill="none" stroke="#B35047" x1="0" y1="240" x2="512" y2="240" />
                        <line fill="none" stroke="#B35047" x1="0" y1="272" x2="512" y2="272" />
                        <line fill="none" stroke="#B35047" x1="0" y1="304" x2="512" y2="304" />
                        <line fill="none" stroke="#B35047" x1="0" y1="336" x2="512" y2="336" />
                        <line fill="none" stroke="#B35047" x1="0" y1="368" x2="512" y2="368" />
                        <line fill="none" stroke="#B35047" x1="0" y1="400" x2="512" y2="400" />
                        <line fill="none" stroke="#B35047" x1="0" y1="432" x2="512" y2="432" />
                        <line fill="none" stroke="#B35047" x1="0" y1="464" x2="512" y2="464" />
                        <line fill="none" stroke="#B35047" x1="0" y1="496" x2="512" y2="496" />
                        <line fill="none" stroke="#B35047" x1="0" y1="16" x2="512" y2="16" />
                        <line fill="none" stroke="#B35047" x1="16" y1="0" x2="16" y2="512" />
                      </g>
                      <g>
                        <line fill="none" stroke="#B35047" x1="32" y1="0" x2="32" y2="512" />
                        <line fill="none" stroke="#B35047" x1="64" y1="0" x2="64" y2="512" />
                        <line fill="none" stroke="#B35047" x1="96" y1="0" x2="96" y2="512" />
                        <line fill="none" stroke="#B35047" x1="128" y1="0" x2="128" y2="512" />
                        <line fill="none" stroke="#B35047" x1="160" y1="0" x2="160" y2="512" />
                        <line fill="none" stroke="#B35047" x1="192" y1="0" x2="192" y2="512" />
                        <line fill="none" stroke="#B35047" x1="224" y1="0" x2="224" y2="512" />
                        <line fill="none" stroke="#B35047" x1="256" y1="0" x2="256" y2="512" />
                        <line fill="none" stroke="#B35047" x1="288" y1="0" x2="288" y2="512" />
                        <line fill="none" stroke="#B35047" x1="320" y1="0" x2="320" y2="512" />
                        <line fill="none" stroke="#B35047" x1="352" y1="0" x2="352" y2="512" />
                        <line fill="none" stroke="#B35047" x1="384" y1="0" x2="384" y2="512" />
                        <line fill="none" stroke="#B35047" x1="416" y1="0" x2="416" y2="512" />
                        <line fill="none" stroke="#B35047" x1="448" y1="0" x2="448" y2="512" />
                        <line fill="none" stroke="#B35047" x1="480" y1="0" x2="480" y2="512" />
                        <line fill="none" stroke="#B35047" x1="0" y1="32" x2="512" y2="32" />
                        <line fill="none" stroke="#B35047" x1="0" y1="64" x2="512" y2="64" />
                        <line fill="none" stroke="#B35047" x1="0" y1="96" x2="512" y2="96" />
                        <line fill="none" stroke="#B35047" x1="0" y1="128" x2="512" y2="128" />
                        <line fill="none" stroke="#B35047" x1="0" y1="160" x2="512" y2="160" />
                        <line fill="none" stroke="#B35047" x1="0" y1="192" x2="512" y2="192" />
                        <line fill="none" stroke="#B35047" x1="0" y1="224" x2="512" y2="224" />
                        <line fill="none" stroke="#B35047" x1="0" y1="256" x2="512" y2="256" />
                        <line fill="none" stroke="#B35047" x1="0" y1="288" x2="512" y2="288" />
                        <line fill="none" stroke="#B35047" x1="0" y1="320" x2="512" y2="320" />
                        <line fill="none" stroke="#B35047" x1="0" y1="352" x2="512" y2="352" />
                        <line fill="none" stroke="#B35047" x1="0" y1="384" x2="512" y2="384" />
                        <line fill="none" stroke="#B35047" x1="0" y1="416" x2="512" y2="416" />
                        <line fill="none" stroke="#B35047" x1="0" y1="448" x2="512" y2="448" />
                        <line fill="none" stroke="#B35047" x1="0" y1="480" x2="512" y2="480" />
                        <rect fill="none" stroke="#B35047" width="512" height="512" />
                      </g>
                      <g>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M480,0H256c-17.688,0-32,14.328-32,32s14.312,32,32,32h192v384H256
		c-17.688,0-32,14.328-32,32s14.312,32,32,32h224c17.688,0,32-14.328,32-32V32C512,14.328,497.688,0,480,0z" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M224,384l128-128L224,128v96H28.591C12.788,224,0,238.328,0,256
		s12.788,32,28.591,32H224V384z" />
                      </g>
                    </svg>
                    功能4
                  </div>
                  <div
                    style="background-color: #A60000; display: flex; gap: 20px;flex-direction: column;justify-content: center; align-items: center;color: aliceblue;" @click="goHoutai">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="32px" height="32px"
                      viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
                      <g opacity="0.3">
                        <line fill="none" stroke="#B35047" x1="48" y1="0" x2="48" y2="512" />
                        <line fill="none" stroke="#B35047" x1="80" y1="0" x2="80" y2="512" />
                        <line fill="none" stroke="#B35047" x1="112" y1="0" x2="112" y2="512" />
                        <line fill="none" stroke="#B35047" x1="144" y1="0" x2="144" y2="512" />
                        <line fill="none" stroke="#B35047" x1="176" y1="0" x2="176" y2="512" />
                        <line fill="none" stroke="#B35047" x1="208" y1="0" x2="208" y2="512" />
                        <line fill="none" stroke="#B35047" x1="240" y1="0" x2="240" y2="512" />
                        <line fill="none" stroke="#B35047" x1="272" y1="0" x2="272" y2="512" />
                        <line fill="none" stroke="#B35047" x1="304" y1="0" x2="304" y2="512" />
                        <line fill="none" stroke="#B35047" x1="336" y1="0" x2="336" y2="512" />
                        <line fill="none" stroke="#B35047" x1="368" y1="0" x2="368" y2="512" />
                        <line fill="none" stroke="#B35047" x1="400" y1="0" x2="400" y2="512" />
                        <line fill="none" stroke="#B35047" x1="432" y1="0" x2="432" y2="512" />
                        <line fill="none" stroke="#B35047" x1="464" y1="0" x2="464" y2="512" />
                        <line fill="none" stroke="#B35047" x1="496" y1="0" x2="496" y2="512" />
                        <line fill="none" stroke="#B35047" x1="0" y1="48" x2="512" y2="48" />
                        <line fill="none" stroke="#B35047" x1="0" y1="80" x2="512" y2="80" />
                        <line fill="none" stroke="#B35047" x1="0" y1="112" x2="512" y2="112" />
                        <line fill="none" stroke="#B35047" x1="0" y1="144" x2="512" y2="144" />
                        <line fill="none" stroke="#B35047" x1="0" y1="176" x2="512" y2="176" />
                        <line fill="none" stroke="#B35047" x1="0" y1="208" x2="512" y2="208" />
                        <line fill="none" stroke="#B35047" x1="0" y1="240" x2="512" y2="240" />
                        <line fill="none" stroke="#B35047" x1="0" y1="272" x2="512" y2="272" />
                        <line fill="none" stroke="#B35047" x1="0" y1="304" x2="512" y2="304" />
                        <line fill="none" stroke="#B35047" x1="0" y1="336" x2="512" y2="336" />
                        <line fill="none" stroke="#B35047" x1="0" y1="368" x2="512" y2="368" />
                        <line fill="none" stroke="#B35047" x1="0" y1="400" x2="512" y2="400" />
                        <line fill="none" stroke="#B35047" x1="0" y1="432" x2="512" y2="432" />
                        <line fill="none" stroke="#B35047" x1="0" y1="464" x2="512" y2="464" />
                        <line fill="none" stroke="#B35047" x1="0" y1="496" x2="512" y2="496" />
                        <line fill="none" stroke="#B35047" x1="0" y1="16" x2="512" y2="16" />
                        <line fill="none" stroke="#B35047" x1="16" y1="0" x2="16" y2="512" />
                      </g>
                      <g>
                        <line fill="none" stroke="#B35047" x1="32" y1="0" x2="32" y2="512" />
                        <line fill="none" stroke="#B35047" x1="64" y1="0" x2="64" y2="512" />
                        <line fill="none" stroke="#B35047" x1="96" y1="0" x2="96" y2="512" />
                        <line fill="none" stroke="#B35047" x1="128" y1="0" x2="128" y2="512" />
                        <line fill="none" stroke="#B35047" x1="160" y1="0" x2="160" y2="512" />
                        <line fill="none" stroke="#B35047" x1="192" y1="0" x2="192" y2="512" />
                        <line fill="none" stroke="#B35047" x1="224" y1="0" x2="224" y2="512" />
                        <line fill="none" stroke="#B35047" x1="256" y1="0" x2="256" y2="512" />
                        <line fill="none" stroke="#B35047" x1="288" y1="0" x2="288" y2="512" />
                        <line fill="none" stroke="#B35047" x1="320" y1="0" x2="320" y2="512" />
                        <line fill="none" stroke="#B35047" x1="352" y1="0" x2="352" y2="512" />
                        <line fill="none" stroke="#B35047" x1="384" y1="0" x2="384" y2="512" />
                        <line fill="none" stroke="#B35047" x1="416" y1="0" x2="416" y2="512" />
                        <line fill="none" stroke="#B35047" x1="448" y1="0" x2="448" y2="512" />
                        <line fill="none" stroke="#B35047" x1="480" y1="0" x2="480" y2="512" />
                        <line fill="none" stroke="#B35047" x1="0" y1="32" x2="512" y2="32" />
                        <line fill="none" stroke="#B35047" x1="0" y1="64" x2="512" y2="64" />
                        <line fill="none" stroke="#B35047" x1="0" y1="96" x2="512" y2="96" />
                        <line fill="none" stroke="#B35047" x1="0" y1="128" x2="512" y2="128" />
                        <line fill="none" stroke="#B35047" x1="0" y1="160" x2="512" y2="160" />
                        <line fill="none" stroke="#B35047" x1="0" y1="192" x2="512" y2="192" />
                        <line fill="none" stroke="#B35047" x1="0" y1="224" x2="512" y2="224" />
                        <line fill="none" stroke="#B35047" x1="0" y1="256" x2="512" y2="256" />
                        <line fill="none" stroke="#B35047" x1="0" y1="288" x2="512" y2="288" />
                        <line fill="none" stroke="#B35047" x1="0" y1="320" x2="512" y2="320" />
                        <line fill="none" stroke="#B35047" x1="0" y1="352" x2="512" y2="352" />
                        <line fill="none" stroke="#B35047" x1="0" y1="384" x2="512" y2="384" />
                        <line fill="none" stroke="#B35047" x1="0" y1="416" x2="512" y2="416" />
                        <line fill="none" stroke="#B35047" x1="0" y1="448" x2="512" y2="448" />
                        <line fill="none" stroke="#B35047" x1="0" y1="480" x2="512" y2="480" />
                        <rect fill="none" stroke="#B35047" width="512" height="512" />
                      </g>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M502.688,198.484L313.579,9.391c-7.217-7.248-16.901-10.044-26.368-9.263h-62.422
	c-9.466-0.781-19.151,2.015-26.368,9.263l-38.396,38.397V0.128H64.049v143.636L9.312,198.484
	c-7.248,7.248-10.028,16.917-9.247,26.368v63.202c0,17.668,14.309,31.993,31.991,31.993h31.992v159.959
	c0,17.668,14.309,31.992,31.992,31.992H415.96c17.683,0,31.992-14.324,31.992-31.992V320.048h31.991
	c17.684,0,31.992-14.325,31.992-31.993v-63.202C512.717,215.401,509.937,205.732,502.688,198.484z M447.952,256.063h-63.984v191.951
	h-63.983V320.048H192.017v127.967h-63.984V256.063H64.049v-17.746L238.255,64.111h35.491l174.206,174.206V256.063z" />
                    </svg>
                    功能5
                  </div>
                  <div
                    style="background-color: #81b10c; display: flex; gap: 20px;flex-direction: column;justify-content: center; align-items: center;color: aliceblue;">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="32px" height="32px"
                      viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
                      <g opacity="0.3">
                        <line fill="none" stroke="#B35047" x1="48" y1="0" x2="48" y2="512" />
                        <line fill="none" stroke="#B35047" x1="80" y1="0" x2="80" y2="512" />
                        <line fill="none" stroke="#B35047" x1="112" y1="0" x2="112" y2="512" />
                        <line fill="none" stroke="#B35047" x1="144" y1="0" x2="144" y2="512" />
                        <line fill="none" stroke="#B35047" x1="176" y1="0" x2="176" y2="512" />
                        <line fill="none" stroke="#B35047" x1="208" y1="0" x2="208" y2="512" />
                        <line fill="none" stroke="#B35047" x1="240" y1="0" x2="240" y2="512" />
                        <line fill="none" stroke="#B35047" x1="272" y1="0" x2="272" y2="512" />
                        <line fill="none" stroke="#B35047" x1="304" y1="0" x2="304" y2="512" />
                        <line fill="none" stroke="#B35047" x1="336" y1="0" x2="336" y2="512" />
                        <line fill="none" stroke="#B35047" x1="368" y1="0" x2="368" y2="512" />
                        <line fill="none" stroke="#B35047" x1="400" y1="0" x2="400" y2="512" />
                        <line fill="none" stroke="#B35047" x1="432" y1="0" x2="432" y2="512" />
                        <line fill="none" stroke="#B35047" x1="464" y1="0" x2="464" y2="512" />
                        <line fill="none" stroke="#B35047" x1="496" y1="0" x2="496" y2="512" />
                        <line fill="none" stroke="#B35047" x1="0" y1="48" x2="512" y2="48" />
                        <line fill="none" stroke="#B35047" x1="0" y1="80" x2="512" y2="80" />
                        <line fill="none" stroke="#B35047" x1="0" y1="112" x2="512" y2="112" />
                        <line fill="none" stroke="#B35047" x1="0" y1="144" x2="512" y2="144" />
                        <line fill="none" stroke="#B35047" x1="0" y1="176" x2="512" y2="176" />
                        <line fill="none" stroke="#B35047" x1="0" y1="208" x2="512" y2="208" />
                        <line fill="none" stroke="#B35047" x1="0" y1="240" x2="512" y2="240" />
                        <line fill="none" stroke="#B35047" x1="0" y1="272" x2="512" y2="272" />
                        <line fill="none" stroke="#B35047" x1="0" y1="304" x2="512" y2="304" />
                        <line fill="none" stroke="#B35047" x1="0" y1="336" x2="512" y2="336" />
                        <line fill="none" stroke="#B35047" x1="0" y1="368" x2="512" y2="368" />
                        <line fill="none" stroke="#B35047" x1="0" y1="400" x2="512" y2="400" />
                        <line fill="none" stroke="#B35047" x1="0" y1="432" x2="512" y2="432" />
                        <line fill="none" stroke="#B35047" x1="0" y1="464" x2="512" y2="464" />
                        <line fill="none" stroke="#B35047" x1="0" y1="496" x2="512" y2="496" />
                        <line fill="none" stroke="#B35047" x1="0" y1="16" x2="512" y2="16" />
                        <line fill="none" stroke="#B35047" x1="16" y1="0" x2="16" y2="512" />
                      </g>
                      <g>
                        <line fill="none" stroke="#B35047" x1="32" y1="0" x2="32" y2="512" />
                        <line fill="none" stroke="#B35047" x1="64" y1="0" x2="64" y2="512" />
                        <line fill="none" stroke="#B35047" x1="96" y1="0" x2="96" y2="512" />
                        <line fill="none" stroke="#B35047" x1="128" y1="0" x2="128" y2="512" />
                        <line fill="none" stroke="#B35047" x1="160" y1="0" x2="160" y2="512" />
                        <line fill="none" stroke="#B35047" x1="192" y1="0" x2="192" y2="512" />
                        <line fill="none" stroke="#B35047" x1="224" y1="0" x2="224" y2="512" />
                        <line fill="none" stroke="#B35047" x1="256" y1="0" x2="256" y2="512" />
                        <line fill="none" stroke="#B35047" x1="288" y1="0" x2="288" y2="512" />
                        <line fill="none" stroke="#B35047" x1="320" y1="0" x2="320" y2="512" />
                        <line fill="none" stroke="#B35047" x1="352" y1="0" x2="352" y2="512" />
                        <line fill="none" stroke="#B35047" x1="384" y1="0" x2="384" y2="512" />
                        <line fill="none" stroke="#B35047" x1="416" y1="0" x2="416" y2="512" />
                        <line fill="none" stroke="#B35047" x1="448" y1="0" x2="448" y2="512" />
                        <line fill="none" stroke="#B35047" x1="480" y1="0" x2="480" y2="512" />
                        <line fill="none" stroke="#B35047" x1="0" y1="32" x2="512" y2="32" />
                        <line fill="none" stroke="#B35047" x1="0" y1="64" x2="512" y2="64" />
                        <line fill="none" stroke="#B35047" x1="0" y1="96" x2="512" y2="96" />
                        <line fill="none" stroke="#B35047" x1="0" y1="128" x2="512" y2="128" />
                        <line fill="none" stroke="#B35047" x1="0" y1="160" x2="512" y2="160" />
                        <line fill="none" stroke="#B35047" x1="0" y1="192" x2="512" y2="192" />
                        <line fill="none" stroke="#B35047" x1="0" y1="224" x2="512" y2="224" />
                        <line fill="none" stroke="#B35047" x1="0" y1="256" x2="512" y2="256" />
                        <line fill="none" stroke="#B35047" x1="0" y1="288" x2="512" y2="288" />
                        <line fill="none" stroke="#B35047" x1="0" y1="320" x2="512" y2="320" />
                        <line fill="none" stroke="#B35047" x1="0" y1="352" x2="512" y2="352" />
                        <line fill="none" stroke="#B35047" x1="0" y1="384" x2="512" y2="384" />
                        <line fill="none" stroke="#B35047" x1="0" y1="416" x2="512" y2="416" />
                        <line fill="none" stroke="#B35047" x1="0" y1="448" x2="512" y2="448" />
                        <line fill="none" stroke="#B35047" x1="0" y1="480" x2="512" y2="480" />
                        <rect fill="none" stroke="#B35047" width="512" height="512" />
                      </g>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M272,0h-32C142.781,0,64,78.797,64,176c0,68.398,39.009,127.682,96,156.812V352
	c0,17.672,14.312,32,32,32h128c17.688,0,32-14.328,32-32v-19.195c56.982-29.133,96-88.412,96-156.805C448,78.797,369.188,0,272,0z
	 M288,286.857V320h-64v-33.143c-54.267-7.766-96-54.433-96-110.857c0-61.859,50.156-112,112-112h32c61.844,0,112,50.141,112,112
	C384,232.425,342.267,279.092,288,286.857z" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M208,416h96c8.844,0,16,7.172,16,16s-7.156,16-16,16h-96c-8.844,0-16-7.172-16-16
	S199.156,416,208,416z" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M240,480h32c8.844,0,16,7.172,16,16s-7.156,16-16,16h-32c-8.844,0-16-7.172-16-16
	S231.156,480,240,480z" />
                    </svg>
                    功能6
                  </div>
                  <!-- <div style="background-color: #f0e0ff; display: flex; justify-content: center; align-items: center;">7
                  </div>
                  <div style="background-color: #7095d5; display: flex; justify-content: center; align-items: center;">8
                  </div>
                  <div style="background-color: #94B3E4; display: flex; justify-content: center; align-items: center;">9
                  </div> -->
                </div>
              </el-tab-pane>
              <el-tab-pane label="功能2" name="second">
                <div
                  style="display: grid; grid-template-columns:repeat(3,33%);grid-template-rows:repeat(2,50%);grid-gap:5px; width: 100%; height: 400px;">
                  <div
                    style="background-color: #42b983; display: flex; gap: 20px;flex-direction: column;justify-content: center; align-items: center;color: aliceblue;">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="32px" height="32px"
                      viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
                      <g opacity="0.3">
                        <line fill="none" stroke="#B35047" x1="48" y1="0" x2="48" y2="512" />
                        <line fill="none" stroke="#B35047" x1="80" y1="0" x2="80" y2="512" />
                        <line fill="none" stroke="#B35047" x1="112" y1="0" x2="112" y2="512" />
                        <line fill="none" stroke="#B35047" x1="144" y1="0" x2="144" y2="512" />
                        <line fill="none" stroke="#B35047" x1="176" y1="0" x2="176" y2="512" />
                        <line fill="none" stroke="#B35047" x1="208" y1="0" x2="208" y2="512" />
                        <line fill="none" stroke="#B35047" x1="240" y1="0" x2="240" y2="512" />
                        <line fill="none" stroke="#B35047" x1="272" y1="0" x2="272" y2="512" />
                        <line fill="none" stroke="#B35047" x1="304" y1="0" x2="304" y2="512" />
                        <line fill="none" stroke="#B35047" x1="336" y1="0" x2="336" y2="512" />
                        <line fill="none" stroke="#B35047" x1="368" y1="0" x2="368" y2="512" />
                        <line fill="none" stroke="#B35047" x1="400" y1="0" x2="400" y2="512" />
                        <line fill="none" stroke="#B35047" x1="432" y1="0" x2="432" y2="512" />
                        <line fill="none" stroke="#B35047" x1="464" y1="0" x2="464" y2="512" />
                        <line fill="none" stroke="#B35047" x1="496" y1="0" x2="496" y2="512" />
                        <line fill="none" stroke="#B35047" x1="0" y1="48" x2="512" y2="48" />
                        <line fill="none" stroke="#B35047" x1="0" y1="80" x2="512" y2="80" />
                        <line fill="none" stroke="#B35047" x1="0" y1="112" x2="512" y2="112" />
                        <line fill="none" stroke="#B35047" x1="0" y1="144" x2="512" y2="144" />
                        <line fill="none" stroke="#B35047" x1="0" y1="176" x2="512" y2="176" />
                        <line fill="none" stroke="#B35047" x1="0" y1="208" x2="512" y2="208" />
                        <line fill="none" stroke="#B35047" x1="0" y1="240" x2="512" y2="240" />
                        <line fill="none" stroke="#B35047" x1="0" y1="272" x2="512" y2="272" />
                        <line fill="none" stroke="#B35047" x1="0" y1="304" x2="512" y2="304" />
                        <line fill="none" stroke="#B35047" x1="0" y1="336" x2="512" y2="336" />
                        <line fill="none" stroke="#B35047" x1="0" y1="368" x2="512" y2="368" />
                        <line fill="none" stroke="#B35047" x1="0" y1="400" x2="512" y2="400" />
                        <line fill="none" stroke="#B35047" x1="0" y1="432" x2="512" y2="432" />
                        <line fill="none" stroke="#B35047" x1="0" y1="464" x2="512" y2="464" />
                        <line fill="none" stroke="#B35047" x1="0" y1="496" x2="512" y2="496" />
                        <line fill="none" stroke="#B35047" x1="0" y1="16" x2="512" y2="16" />
                        <line fill="none" stroke="#B35047" x1="16" y1="0" x2="16" y2="512" />
                      </g>
                      <g>
                        <line fill="none" stroke="#B35047" x1="32" y1="0" x2="32" y2="512" />
                        <line fill="none" stroke="#B35047" x1="64" y1="0" x2="64" y2="512" />
                        <line fill="none" stroke="#B35047" x1="96" y1="0" x2="96" y2="512" />
                        <line fill="none" stroke="#B35047" x1="128" y1="0" x2="128" y2="512" />
                        <line fill="none" stroke="#B35047" x1="160" y1="0" x2="160" y2="512" />
                        <line fill="none" stroke="#B35047" x1="192" y1="0" x2="192" y2="512" />
                        <line fill="none" stroke="#B35047" x1="224" y1="0" x2="224" y2="512" />
                        <line fill="none" stroke="#B35047" x1="256" y1="0" x2="256" y2="512" />
                        <line fill="none" stroke="#B35047" x1="288" y1="0" x2="288" y2="512" />
                        <line fill="none" stroke="#B35047" x1="320" y1="0" x2="320" y2="512" />
                        <line fill="none" stroke="#B35047" x1="352" y1="0" x2="352" y2="512" />
                        <line fill="none" stroke="#B35047" x1="384" y1="0" x2="384" y2="512" />
                        <line fill="none" stroke="#B35047" x1="416" y1="0" x2="416" y2="512" />
                        <line fill="none" stroke="#B35047" x1="448" y1="0" x2="448" y2="512" />
                        <line fill="none" stroke="#B35047" x1="480" y1="0" x2="480" y2="512" />
                        <line fill="none" stroke="#B35047" x1="0" y1="32" x2="512" y2="32" />
                        <line fill="none" stroke="#B35047" x1="0" y1="64" x2="512" y2="64" />
                        <line fill="none" stroke="#B35047" x1="0" y1="96" x2="512" y2="96" />
                        <line fill="none" stroke="#B35047" x1="0" y1="128" x2="512" y2="128" />
                        <line fill="none" stroke="#B35047" x1="0" y1="160" x2="512" y2="160" />
                        <line fill="none" stroke="#B35047" x1="0" y1="192" x2="512" y2="192" />
                        <line fill="none" stroke="#B35047" x1="0" y1="224" x2="512" y2="224" />
                        <line fill="none" stroke="#B35047" x1="0" y1="256" x2="512" y2="256" />
                        <line fill="none" stroke="#B35047" x1="0" y1="288" x2="512" y2="288" />
                        <line fill="none" stroke="#B35047" x1="0" y1="320" x2="512" y2="320" />
                        <line fill="none" stroke="#B35047" x1="0" y1="352" x2="512" y2="352" />
                        <line fill="none" stroke="#B35047" x1="0" y1="384" x2="512" y2="384" />
                        <line fill="none" stroke="#B35047" x1="0" y1="416" x2="512" y2="416" />
                        <line fill="none" stroke="#B35047" x1="0" y1="448" x2="512" y2="448" />
                        <line fill="none" stroke="#B35047" x1="0" y1="480" x2="512" y2="480" />
                        <rect fill="none" stroke="#B35047" width="512" height="512" />
                      </g>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M472.934,408.914C425.871,472.678,343.936,512.739,256,511.989
	c-87.936,0.75-169.872-39.312-216.934-103.075L0.005,447.991V319.994h127.997l-35.187,35.17
	c28.219,46.719,75.437,80.296,131.185,89.812V251.463c-55.123-14.265-95.998-63.889-95.998-123.466C128.002,57.312,185.314,0,256,0
	c70.685,0,127.998,57.312,127.998,127.998c0,59.577-40.875,109.201-95.998,123.466v193.512
	c55.748-9.516,102.967-43.093,131.184-89.812l-35.186-35.17h127.996v127.997L472.934,408.914z M319.998,127.998
	c0-35.343-28.654-63.999-63.998-63.999c-35.344,0-63.999,28.656-63.999,63.999c0,35.343,28.655,63.999,63.999,63.999
	C291.344,191.996,319.998,163.34,319.998,127.998z" />
                    </svg>
                    功能1
                  </div>
                  <div
                    style="background-color: #0d5aa7; display: flex; gap: 20px;flex-direction: column;justify-content: center; align-items: center;color: aliceblue;">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="32px" height="32px"
                      viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
                      <g opacity="0.3">
                        <line fill="none" stroke="#B35047" x1="48" y1="0" x2="48" y2="512" />
                        <line fill="none" stroke="#B35047" x1="80" y1="0" x2="80" y2="512" />
                        <line fill="none" stroke="#B35047" x1="112" y1="0" x2="112" y2="512" />
                        <line fill="none" stroke="#B35047" x1="144" y1="0" x2="144" y2="512" />
                        <line fill="none" stroke="#B35047" x1="176" y1="0" x2="176" y2="512" />
                        <line fill="none" stroke="#B35047" x1="208" y1="0" x2="208" y2="512" />
                        <line fill="none" stroke="#B35047" x1="240" y1="0" x2="240" y2="512" />
                        <line fill="none" stroke="#B35047" x1="272" y1="0" x2="272" y2="512" />
                        <line fill="none" stroke="#B35047" x1="304" y1="0" x2="304" y2="512" />
                        <line fill="none" stroke="#B35047" x1="336" y1="0" x2="336" y2="512" />
                        <line fill="none" stroke="#B35047" x1="368" y1="0" x2="368" y2="512" />
                        <line fill="none" stroke="#B35047" x1="400" y1="0" x2="400" y2="512" />
                        <line fill="none" stroke="#B35047" x1="432" y1="0" x2="432" y2="512" />
                        <line fill="none" stroke="#B35047" x1="464" y1="0" x2="464" y2="512" />
                        <line fill="none" stroke="#B35047" x1="496" y1="0" x2="496" y2="512" />
                        <line fill="none" stroke="#B35047" x1="0" y1="48" x2="512" y2="48" />
                        <line fill="none" stroke="#B35047" x1="0" y1="80" x2="512" y2="80" />
                        <line fill="none" stroke="#B35047" x1="0" y1="112" x2="512" y2="112" />
                        <line fill="none" stroke="#B35047" x1="0" y1="144" x2="512" y2="144" />
                        <line fill="none" stroke="#B35047" x1="0" y1="176" x2="512" y2="176" />
                        <line fill="none" stroke="#B35047" x1="0" y1="208" x2="512" y2="208" />
                        <line fill="none" stroke="#B35047" x1="0" y1="240" x2="512" y2="240" />
                        <line fill="none" stroke="#B35047" x1="0" y1="272" x2="512" y2="272" />
                        <line fill="none" stroke="#B35047" x1="0" y1="304" x2="512" y2="304" />
                        <line fill="none" stroke="#B35047" x1="0" y1="336" x2="512" y2="336" />
                        <line fill="none" stroke="#B35047" x1="0" y1="368" x2="512" y2="368" />
                        <line fill="none" stroke="#B35047" x1="0" y1="400" x2="512" y2="400" />
                        <line fill="none" stroke="#B35047" x1="0" y1="432" x2="512" y2="432" />
                        <line fill="none" stroke="#B35047" x1="0" y1="464" x2="512" y2="464" />
                        <line fill="none" stroke="#B35047" x1="0" y1="496" x2="512" y2="496" />
                        <line fill="none" stroke="#B35047" x1="0" y1="16" x2="512" y2="16" />
                        <line fill="none" stroke="#B35047" x1="16" y1="0" x2="16" y2="512" />
                      </g>
                      <g>
                        <line fill="none" stroke="#B35047" x1="32" y1="0" x2="32" y2="512" />
                        <line fill="none" stroke="#B35047" x1="64" y1="0" x2="64" y2="512" />
                        <line fill="none" stroke="#B35047" x1="96" y1="0" x2="96" y2="512" />
                        <line fill="none" stroke="#B35047" x1="128" y1="0" x2="128" y2="512" />
                        <line fill="none" stroke="#B35047" x1="160" y1="0" x2="160" y2="512" />
                        <line fill="none" stroke="#B35047" x1="192" y1="0" x2="192" y2="512" />
                        <line fill="none" stroke="#B35047" x1="224" y1="0" x2="224" y2="512" />
                        <line fill="none" stroke="#B35047" x1="256" y1="0" x2="256" y2="512" />
                        <line fill="none" stroke="#B35047" x1="288" y1="0" x2="288" y2="512" />
                        <line fill="none" stroke="#B35047" x1="320" y1="0" x2="320" y2="512" />
                        <line fill="none" stroke="#B35047" x1="352" y1="0" x2="352" y2="512" />
                        <line fill="none" stroke="#B35047" x1="384" y1="0" x2="384" y2="512" />
                        <line fill="none" stroke="#B35047" x1="416" y1="0" x2="416" y2="512" />
                        <line fill="none" stroke="#B35047" x1="448" y1="0" x2="448" y2="512" />
                        <line fill="none" stroke="#B35047" x1="480" y1="0" x2="480" y2="512" />
                        <line fill="none" stroke="#B35047" x1="0" y1="32" x2="512" y2="32" />
                        <line fill="none" stroke="#B35047" x1="0" y1="64" x2="512" y2="64" />
                        <line fill="none" stroke="#B35047" x1="0" y1="96" x2="512" y2="96" />
                        <line fill="none" stroke="#B35047" x1="0" y1="128" x2="512" y2="128" />
                        <line fill="none" stroke="#B35047" x1="0" y1="160" x2="512" y2="160" />
                        <line fill="none" stroke="#B35047" x1="0" y1="192" x2="512" y2="192" />
                        <line fill="none" stroke="#B35047" x1="0" y1="224" x2="512" y2="224" />
                        <line fill="none" stroke="#B35047" x1="0" y1="256" x2="512" y2="256" />
                        <line fill="none" stroke="#B35047" x1="0" y1="288" x2="512" y2="288" />
                        <line fill="none" stroke="#B35047" x1="0" y1="320" x2="512" y2="320" />
                        <line fill="none" stroke="#B35047" x1="0" y1="352" x2="512" y2="352" />
                        <line fill="none" stroke="#B35047" x1="0" y1="384" x2="512" y2="384" />
                        <line fill="none" stroke="#B35047" x1="0" y1="416" x2="512" y2="416" />
                        <line fill="none" stroke="#B35047" x1="0" y1="448" x2="512" y2="448" />
                        <line fill="none" stroke="#B35047" x1="0" y1="480" x2="512" y2="480" />
                        <rect fill="none" stroke="#B35047" width="512" height="512" />
                      </g>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M433.206,42.622c-17.889-9.862-67.2-34.145-99.369-40.817
	c-33.414-6.938-83.13,123.527-98.935,124.103C209.267,126.825,231.791,36.836,256.151,0c-38.019,25.387-105.561,59.47-121.365,98.67
	c-30.552,75.756,56.622,212.086,10.111,219.926c-14.498,2.442-54.663-94.019-65.085-123.449
	c-29.463,56.312-7.28,109.029,17.08,174.893v4.09c-0.934,3.562-1.742,6.97-2.583,10.438h2.583v95.574
	c0,17.609,14.249,31.858,31.857,31.858c17.609,0,31.858-14.249,31.858-31.858v-95.574v-1.011
	c59.454-6.689,87.423,12.802,128.147-64.416c-24.857,10.281-74.48-21.047-64.183-35.841c20.689-29.773,105.281,1.681,159.197-89.834
	c-85.339,22.742-95.419-9.862-96.228-21.747c-1.711-24.608,85.308-11.573,124.975-45.78
	C435.509,106.105,463.073,59.111,433.206,42.622z" />
                    </svg>
                    功能2
                  </div>
                  <div
                    style="background-color: #FFB951; display: flex; gap: 20px;flex-direction: column;justify-content: center; align-items: center;color: aliceblue;">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="32px" height="32px"
                      viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
                      <g opacity="0.3">
                        <line fill="none" stroke="#B35047" x1="48" y1="0" x2="48" y2="512" />
                        <line fill="none" stroke="#B35047" x1="80" y1="0" x2="80" y2="512" />
                        <line fill="none" stroke="#B35047" x1="112" y1="0" x2="112" y2="512" />
                        <line fill="none" stroke="#B35047" x1="144" y1="0" x2="144" y2="512" />
                        <line fill="none" stroke="#B35047" x1="176" y1="0" x2="176" y2="512" />
                        <line fill="none" stroke="#B35047" x1="208" y1="0" x2="208" y2="512" />
                        <line fill="none" stroke="#B35047" x1="240" y1="0" x2="240" y2="512" />
                        <line fill="none" stroke="#B35047" x1="272" y1="0" x2="272" y2="512" />
                        <line fill="none" stroke="#B35047" x1="304" y1="0" x2="304" y2="512" />
                        <line fill="none" stroke="#B35047" x1="336" y1="0" x2="336" y2="512" />
                        <line fill="none" stroke="#B35047" x1="368" y1="0" x2="368" y2="512" />
                        <line fill="none" stroke="#B35047" x1="400" y1="0" x2="400" y2="512" />
                        <line fill="none" stroke="#B35047" x1="432" y1="0" x2="432" y2="512" />
                        <line fill="none" stroke="#B35047" x1="464" y1="0" x2="464" y2="512" />
                        <line fill="none" stroke="#B35047" x1="496" y1="0" x2="496" y2="512" />
                        <line fill="none" stroke="#B35047" x1="0" y1="48" x2="512" y2="48" />
                        <line fill="none" stroke="#B35047" x1="0" y1="80" x2="512" y2="80" />
                        <line fill="none" stroke="#B35047" x1="0" y1="112" x2="512" y2="112" />
                        <line fill="none" stroke="#B35047" x1="0" y1="144" x2="512" y2="144" />
                        <line fill="none" stroke="#B35047" x1="0" y1="176" x2="512" y2="176" />
                        <line fill="none" stroke="#B35047" x1="0" y1="208" x2="512" y2="208" />
                        <line fill="none" stroke="#B35047" x1="0" y1="240" x2="512" y2="240" />
                        <line fill="none" stroke="#B35047" x1="0" y1="272" x2="512" y2="272" />
                        <line fill="none" stroke="#B35047" x1="0" y1="304" x2="512" y2="304" />
                        <line fill="none" stroke="#B35047" x1="0" y1="336" x2="512" y2="336" />
                        <line fill="none" stroke="#B35047" x1="0" y1="368" x2="512" y2="368" />
                        <line fill="none" stroke="#B35047" x1="0" y1="400" x2="512" y2="400" />
                        <line fill="none" stroke="#B35047" x1="0" y1="432" x2="512" y2="432" />
                        <line fill="none" stroke="#B35047" x1="0" y1="464" x2="512" y2="464" />
                        <line fill="none" stroke="#B35047" x1="0" y1="496" x2="512" y2="496" />
                        <line fill="none" stroke="#B35047" x1="0" y1="16" x2="512" y2="16" />
                        <line fill="none" stroke="#B35047" x1="16" y1="0" x2="16" y2="512" />
                      </g>
                      <g>
                        <line fill="none" stroke="#B35047" x1="32" y1="0" x2="32" y2="512" />
                        <line fill="none" stroke="#B35047" x1="64" y1="0" x2="64" y2="512" />
                        <line fill="none" stroke="#B35047" x1="96" y1="0" x2="96" y2="512" />
                        <line fill="none" stroke="#B35047" x1="128" y1="0" x2="128" y2="512" />
                        <line fill="none" stroke="#B35047" x1="160" y1="0" x2="160" y2="512" />
                        <line fill="none" stroke="#B35047" x1="192" y1="0" x2="192" y2="512" />
                        <line fill="none" stroke="#B35047" x1="224" y1="0" x2="224" y2="512" />
                        <line fill="none" stroke="#B35047" x1="256" y1="0" x2="256" y2="512" />
                        <line fill="none" stroke="#B35047" x1="288" y1="0" x2="288" y2="512" />
                        <line fill="none" stroke="#B35047" x1="320" y1="0" x2="320" y2="512" />
                        <line fill="none" stroke="#B35047" x1="352" y1="0" x2="352" y2="512" />
                        <line fill="none" stroke="#B35047" x1="384" y1="0" x2="384" y2="512" />
                        <line fill="none" stroke="#B35047" x1="416" y1="0" x2="416" y2="512" />
                        <line fill="none" stroke="#B35047" x1="448" y1="0" x2="448" y2="512" />
                        <line fill="none" stroke="#B35047" x1="480" y1="0" x2="480" y2="512" />
                        <line fill="none" stroke="#B35047" x1="0" y1="32" x2="512" y2="32" />
                        <line fill="none" stroke="#B35047" x1="0" y1="64" x2="512" y2="64" />
                        <line fill="none" stroke="#B35047" x1="0" y1="96" x2="512" y2="96" />
                        <line fill="none" stroke="#B35047" x1="0" y1="128" x2="512" y2="128" />
                        <line fill="none" stroke="#B35047" x1="0" y1="160" x2="512" y2="160" />
                        <line fill="none" stroke="#B35047" x1="0" y1="192" x2="512" y2="192" />
                        <line fill="none" stroke="#B35047" x1="0" y1="224" x2="512" y2="224" />
                        <line fill="none" stroke="#B35047" x1="0" y1="256" x2="512" y2="256" />
                        <line fill="none" stroke="#B35047" x1="0" y1="288" x2="512" y2="288" />
                        <line fill="none" stroke="#B35047" x1="0" y1="320" x2="512" y2="320" />
                        <line fill="none" stroke="#B35047" x1="0" y1="352" x2="512" y2="352" />
                        <line fill="none" stroke="#B35047" x1="0" y1="384" x2="512" y2="384" />
                        <line fill="none" stroke="#B35047" x1="0" y1="416" x2="512" y2="416" />
                        <line fill="none" stroke="#B35047" x1="0" y1="448" x2="512" y2="448" />
                        <line fill="none" stroke="#B35047" x1="0" y1="480" x2="512" y2="480" />
                        <rect fill="none" stroke="#B35047" width="512" height="512" />
                      </g>
                      <g>
                        <g>
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M178.375,287.812L73.094,393.094L32,352c-17.688,0-32,14.312-32,32v96
			c0,17.688,14.312,32,32,32h96c17.688,0,32-14.312,32-32l-41.094-41.062l105.281-105.312L178.375,287.812z M480,0h-96
			c-17.688,0-32,14.328-32,32l41.094,41.094L287.812,178.375l45.812,45.812l105.281-105.266L480,160c17.688,0,32-14.312,32-32V32
			C512,14.328,497.688,0,480,0z M480,352l-41.094,41.094L333.625,287.812l-45.812,45.812l105.281,105.312L352,480
			c0,17.688,14.312,32,32,32h96c17.688,0,32-14.312,32-32v-96C512,366.312,497.688,352,480,352z M160,32c0-17.672-14.312-32-32-32
			H32C14.312,0,0,14.328,0,32v96c0,17.688,14.312,32,32,32l41.094-41.078l105.281,105.266l45.812-45.812L118.906,73.094L160,32z" />
                        </g>
                      </g>
                    </svg>
                    功能3
                  </div>
                  <div
                    style="background-color: #a463f2; display: flex; gap: 20px;flex-direction: column;justify-content: center; align-items: center;color: aliceblue;">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="32px" height="32px"
                      viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
                      <g opacity="0.3">
                        <line fill="none" stroke="#B35047" x1="48" y1="0" x2="48" y2="512" />
                        <line fill="none" stroke="#B35047" x1="80" y1="0" x2="80" y2="512" />
                        <line fill="none" stroke="#B35047" x1="112" y1="0" x2="112" y2="512" />
                        <line fill="none" stroke="#B35047" x1="144" y1="0" x2="144" y2="512" />
                        <line fill="none" stroke="#B35047" x1="176" y1="0" x2="176" y2="512" />
                        <line fill="none" stroke="#B35047" x1="208" y1="0" x2="208" y2="512" />
                        <line fill="none" stroke="#B35047" x1="240" y1="0" x2="240" y2="512" />
                        <line fill="none" stroke="#B35047" x1="272" y1="0" x2="272" y2="512" />
                        <line fill="none" stroke="#B35047" x1="304" y1="0" x2="304" y2="512" />
                        <line fill="none" stroke="#B35047" x1="336" y1="0" x2="336" y2="512" />
                        <line fill="none" stroke="#B35047" x1="368" y1="0" x2="368" y2="512" />
                        <line fill="none" stroke="#B35047" x1="400" y1="0" x2="400" y2="512" />
                        <line fill="none" stroke="#B35047" x1="432" y1="0" x2="432" y2="512" />
                        <line fill="none" stroke="#B35047" x1="464" y1="0" x2="464" y2="512" />
                        <line fill="none" stroke="#B35047" x1="496" y1="0" x2="496" y2="512" />
                        <line fill="none" stroke="#B35047" x1="0" y1="48" x2="512" y2="48" />
                        <line fill="none" stroke="#B35047" x1="0" y1="80" x2="512" y2="80" />
                        <line fill="none" stroke="#B35047" x1="0" y1="112" x2="512" y2="112" />
                        <line fill="none" stroke="#B35047" x1="0" y1="144" x2="512" y2="144" />
                        <line fill="none" stroke="#B35047" x1="0" y1="176" x2="512" y2="176" />
                        <line fill="none" stroke="#B35047" x1="0" y1="208" x2="512" y2="208" />
                        <line fill="none" stroke="#B35047" x1="0" y1="240" x2="512" y2="240" />
                        <line fill="none" stroke="#B35047" x1="0" y1="272" x2="512" y2="272" />
                        <line fill="none" stroke="#B35047" x1="0" y1="304" x2="512" y2="304" />
                        <line fill="none" stroke="#B35047" x1="0" y1="336" x2="512" y2="336" />
                        <line fill="none" stroke="#B35047" x1="0" y1="368" x2="512" y2="368" />
                        <line fill="none" stroke="#B35047" x1="0" y1="400" x2="512" y2="400" />
                        <line fill="none" stroke="#B35047" x1="0" y1="432" x2="512" y2="432" />
                        <line fill="none" stroke="#B35047" x1="0" y1="464" x2="512" y2="464" />
                        <line fill="none" stroke="#B35047" x1="0" y1="496" x2="512" y2="496" />
                        <line fill="none" stroke="#B35047" x1="0" y1="16" x2="512" y2="16" />
                        <line fill="none" stroke="#B35047" x1="16" y1="0" x2="16" y2="512" />
                      </g>
                      <g>
                        <line fill="none" stroke="#B35047" x1="32" y1="0" x2="32" y2="512" />
                        <line fill="none" stroke="#B35047" x1="64" y1="0" x2="64" y2="512" />
                        <line fill="none" stroke="#B35047" x1="96" y1="0" x2="96" y2="512" />
                        <line fill="none" stroke="#B35047" x1="128" y1="0" x2="128" y2="512" />
                        <line fill="none" stroke="#B35047" x1="160" y1="0" x2="160" y2="512" />
                        <line fill="none" stroke="#B35047" x1="192" y1="0" x2="192" y2="512" />
                        <line fill="none" stroke="#B35047" x1="224" y1="0" x2="224" y2="512" />
                        <line fill="none" stroke="#B35047" x1="256" y1="0" x2="256" y2="512" />
                        <line fill="none" stroke="#B35047" x1="288" y1="0" x2="288" y2="512" />
                        <line fill="none" stroke="#B35047" x1="320" y1="0" x2="320" y2="512" />
                        <line fill="none" stroke="#B35047" x1="352" y1="0" x2="352" y2="512" />
                        <line fill="none" stroke="#B35047" x1="384" y1="0" x2="384" y2="512" />
                        <line fill="none" stroke="#B35047" x1="416" y1="0" x2="416" y2="512" />
                        <line fill="none" stroke="#B35047" x1="448" y1="0" x2="448" y2="512" />
                        <line fill="none" stroke="#B35047" x1="480" y1="0" x2="480" y2="512" />
                        <line fill="none" stroke="#B35047" x1="0" y1="32" x2="512" y2="32" />
                        <line fill="none" stroke="#B35047" x1="0" y1="64" x2="512" y2="64" />
                        <line fill="none" stroke="#B35047" x1="0" y1="96" x2="512" y2="96" />
                        <line fill="none" stroke="#B35047" x1="0" y1="128" x2="512" y2="128" />
                        <line fill="none" stroke="#B35047" x1="0" y1="160" x2="512" y2="160" />
                        <line fill="none" stroke="#B35047" x1="0" y1="192" x2="512" y2="192" />
                        <line fill="none" stroke="#B35047" x1="0" y1="224" x2="512" y2="224" />
                        <line fill="none" stroke="#B35047" x1="0" y1="256" x2="512" y2="256" />
                        <line fill="none" stroke="#B35047" x1="0" y1="288" x2="512" y2="288" />
                        <line fill="none" stroke="#B35047" x1="0" y1="320" x2="512" y2="320" />
                        <line fill="none" stroke="#B35047" x1="0" y1="352" x2="512" y2="352" />
                        <line fill="none" stroke="#B35047" x1="0" y1="384" x2="512" y2="384" />
                        <line fill="none" stroke="#B35047" x1="0" y1="416" x2="512" y2="416" />
                        <line fill="none" stroke="#B35047" x1="0" y1="448" x2="512" y2="448" />
                        <line fill="none" stroke="#B35047" x1="0" y1="480" x2="512" y2="480" />
                        <rect fill="none" stroke="#B35047" width="512" height="512" />
                      </g>
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M480,160l-41.094-41.078L333.625,224.188l-45.812-45.812L393.094,73.094L352,32
	c0-17.672,14.312-32,32-32h96c17.688,0,32,14.328,32,32v96C512,145.688,497.688,160,480,160z M160,480c0,17.688-14.312,32-32,32H32
	c-17.688,0-32-14.312-32-32v-96c0-17.688,14.312-32,32-32l41.094,41.094l105.281-105.281l45.812,45.812L118.906,438.938L160,480z" />
                    </svg>
                    功能4
                  </div>
                  <div
                    style="background-color: #A60000; display: flex; gap: 20px;flex-direction: column;justify-content: center; align-items: center; color: aliceblue;">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="32px" height="32px"
                      viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
                      <g opacity="0.3">
                        <line fill="none" stroke="#B35047" x1="48" y1="0" x2="48" y2="512" />
                        <line fill="none" stroke="#B35047" x1="80" y1="0" x2="80" y2="512" />
                        <line fill="none" stroke="#B35047" x1="112" y1="0" x2="112" y2="512" />
                        <line fill="none" stroke="#B35047" x1="144" y1="0" x2="144" y2="512" />
                        <line fill="none" stroke="#B35047" x1="176" y1="0" x2="176" y2="512" />
                        <line fill="none" stroke="#B35047" x1="208" y1="0" x2="208" y2="512" />
                        <line fill="none" stroke="#B35047" x1="240" y1="0" x2="240" y2="512" />
                        <line fill="none" stroke="#B35047" x1="272" y1="0" x2="272" y2="512" />
                        <line fill="none" stroke="#B35047" x1="304" y1="0" x2="304" y2="512" />
                        <line fill="none" stroke="#B35047" x1="336" y1="0" x2="336" y2="512" />
                        <line fill="none" stroke="#B35047" x1="368" y1="0" x2="368" y2="512" />
                        <line fill="none" stroke="#B35047" x1="400" y1="0" x2="400" y2="512" />
                        <line fill="none" stroke="#B35047" x1="432" y1="0" x2="432" y2="512" />
                        <line fill="none" stroke="#B35047" x1="464" y1="0" x2="464" y2="512" />
                        <line fill="none" stroke="#B35047" x1="496" y1="0" x2="496" y2="512" />
                        <line fill="none" stroke="#B35047" x1="0" y1="48" x2="512" y2="48" />
                        <line fill="none" stroke="#B35047" x1="0" y1="80" x2="512" y2="80" />
                        <line fill="none" stroke="#B35047" x1="0" y1="112" x2="512" y2="112" />
                        <line fill="none" stroke="#B35047" x1="0" y1="144" x2="512" y2="144" />
                        <line fill="none" stroke="#B35047" x1="0" y1="176" x2="512" y2="176" />
                        <line fill="none" stroke="#B35047" x1="0" y1="208" x2="512" y2="208" />
                        <line fill="none" stroke="#B35047" x1="0" y1="240" x2="512" y2="240" />
                        <line fill="none" stroke="#B35047" x1="0" y1="272" x2="512" y2="272" />
                        <line fill="none" stroke="#B35047" x1="0" y1="304" x2="512" y2="304" />
                        <line fill="none" stroke="#B35047" x1="0" y1="336" x2="512" y2="336" />
                        <line fill="none" stroke="#B35047" x1="0" y1="368" x2="512" y2="368" />
                        <line fill="none" stroke="#B35047" x1="0" y1="400" x2="512" y2="400" />
                        <line fill="none" stroke="#B35047" x1="0" y1="432" x2="512" y2="432" />
                        <line fill="none" stroke="#B35047" x1="0" y1="464" x2="512" y2="464" />
                        <line fill="none" stroke="#B35047" x1="0" y1="496" x2="512" y2="496" />
                        <line fill="none" stroke="#B35047" x1="0" y1="16" x2="512" y2="16" />
                        <line fill="none" stroke="#B35047" x1="16" y1="0" x2="16" y2="512" />
                      </g>
                      <g>
                        <line fill="none" stroke="#B35047" x1="32" y1="0" x2="32" y2="512" />
                        <line fill="none" stroke="#B35047" x1="64" y1="0" x2="64" y2="512" />
                        <line fill="none" stroke="#B35047" x1="96" y1="0" x2="96" y2="512" />
                        <line fill="none" stroke="#B35047" x1="128" y1="0" x2="128" y2="512" />
                        <line fill="none" stroke="#B35047" x1="160" y1="0" x2="160" y2="512" />
                        <line fill="none" stroke="#B35047" x1="192" y1="0" x2="192" y2="512" />
                        <line fill="none" stroke="#B35047" x1="224" y1="0" x2="224" y2="512" />
                        <line fill="none" stroke="#B35047" x1="256" y1="0" x2="256" y2="512" />
                        <line fill="none" stroke="#B35047" x1="288" y1="0" x2="288" y2="512" />
                        <line fill="none" stroke="#B35047" x1="320" y1="0" x2="320" y2="512" />
                        <line fill="none" stroke="#B35047" x1="352" y1="0" x2="352" y2="512" />
                        <line fill="none" stroke="#B35047" x1="384" y1="0" x2="384" y2="512" />
                        <line fill="none" stroke="#B35047" x1="416" y1="0" x2="416" y2="512" />
                        <line fill="none" stroke="#B35047" x1="448" y1="0" x2="448" y2="512" />
                        <line fill="none" stroke="#B35047" x1="480" y1="0" x2="480" y2="512" />
                        <line fill="none" stroke="#B35047" x1="0" y1="32" x2="512" y2="32" />
                        <line fill="none" stroke="#B35047" x1="0" y1="64" x2="512" y2="64" />
                        <line fill="none" stroke="#B35047" x1="0" y1="96" x2="512" y2="96" />
                        <line fill="none" stroke="#B35047" x1="0" y1="128" x2="512" y2="128" />
                        <line fill="none" stroke="#B35047" x1="0" y1="160" x2="512" y2="160" />
                        <line fill="none" stroke="#B35047" x1="0" y1="192" x2="512" y2="192" />
                        <line fill="none" stroke="#B35047" x1="0" y1="224" x2="512" y2="224" />
                        <line fill="none" stroke="#B35047" x1="0" y1="256" x2="512" y2="256" />
                        <line fill="none" stroke="#B35047" x1="0" y1="288" x2="512" y2="288" />
                        <line fill="none" stroke="#B35047" x1="0" y1="320" x2="512" y2="320" />
                        <line fill="none" stroke="#B35047" x1="0" y1="352" x2="512" y2="352" />
                        <line fill="none" stroke="#B35047" x1="0" y1="384" x2="512" y2="384" />
                        <line fill="none" stroke="#B35047" x1="0" y1="416" x2="512" y2="416" />
                        <line fill="none" stroke="#B35047" x1="0" y1="448" x2="512" y2="448" />
                        <line fill="none" stroke="#B35047" x1="0" y1="480" x2="512" y2="480" />
                        <rect fill="none" stroke="#B35047" width="512" height="512" />
                      </g>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M497.914,497.913c-18.783,18.782-49.225,18.782-68.008,0l-84.863-84.863
	c-34.888,22.382-76.13,35.717-120.659,35.717C100.469,448.767,0,348.313,0,224.383S100.469,0,224.384,0
	c123.931,0,224.384,100.452,224.384,224.383c0,44.514-13.352,85.771-35.718,120.676l84.864,84.863
	C516.695,448.704,516.695,479.131,497.914,497.913z M224.384,64.109c-88.511,0-160.274,71.747-160.274,160.273
	s71.763,160.274,160.274,160.274c88.526,0,160.274-71.748,160.274-160.274S312.91,64.109,224.384,64.109z" />
                    </svg>
                    功能5
                  </div>
                  <div
                    style="background-color: #81b10c; display: flex; gap: 20px;flex-direction: column;justify-content: center; align-items: center;color: aliceblue;">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="32px" height="32px"
                      viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
                      <g opacity="0.3">
                        <line fill="none" stroke="#B35047" x1="48" y1="0" x2="48" y2="512" />
                        <line fill="none" stroke="#B35047" x1="80" y1="0" x2="80" y2="512" />
                        <line fill="none" stroke="#B35047" x1="112" y1="0" x2="112" y2="512" />
                        <line fill="none" stroke="#B35047" x1="144" y1="0" x2="144" y2="512" />
                        <line fill="none" stroke="#B35047" x1="176" y1="0" x2="176" y2="512" />
                        <line fill="none" stroke="#B35047" x1="208" y1="0" x2="208" y2="512" />
                        <line fill="none" stroke="#B35047" x1="240" y1="0" x2="240" y2="512" />
                        <line fill="none" stroke="#B35047" x1="272" y1="0" x2="272" y2="512" />
                        <line fill="none" stroke="#B35047" x1="304" y1="0" x2="304" y2="512" />
                        <line fill="none" stroke="#B35047" x1="336" y1="0" x2="336" y2="512" />
                        <line fill="none" stroke="#B35047" x1="368" y1="0" x2="368" y2="512" />
                        <line fill="none" stroke="#B35047" x1="400" y1="0" x2="400" y2="512" />
                        <line fill="none" stroke="#B35047" x1="432" y1="0" x2="432" y2="512" />
                        <line fill="none" stroke="#B35047" x1="464" y1="0" x2="464" y2="512" />
                        <line fill="none" stroke="#B35047" x1="496" y1="0" x2="496" y2="512" />
                        <line fill="none" stroke="#B35047" x1="0" y1="48" x2="512" y2="48" />
                        <line fill="none" stroke="#B35047" x1="0" y1="80" x2="512" y2="80" />
                        <line fill="none" stroke="#B35047" x1="0" y1="112" x2="512" y2="112" />
                        <line fill="none" stroke="#B35047" x1="0" y1="144" x2="512" y2="144" />
                        <line fill="none" stroke="#B35047" x1="0" y1="176" x2="512" y2="176" />
                        <line fill="none" stroke="#B35047" x1="0" y1="208" x2="512" y2="208" />
                        <line fill="none" stroke="#B35047" x1="0" y1="240" x2="512" y2="240" />
                        <line fill="none" stroke="#B35047" x1="0" y1="272" x2="512" y2="272" />
                        <line fill="none" stroke="#B35047" x1="0" y1="304" x2="512" y2="304" />
                        <line fill="none" stroke="#B35047" x1="0" y1="336" x2="512" y2="336" />
                        <line fill="none" stroke="#B35047" x1="0" y1="368" x2="512" y2="368" />
                        <line fill="none" stroke="#B35047" x1="0" y1="400" x2="512" y2="400" />
                        <line fill="none" stroke="#B35047" x1="0" y1="432" x2="512" y2="432" />
                        <line fill="none" stroke="#B35047" x1="0" y1="464" x2="512" y2="464" />
                        <line fill="none" stroke="#B35047" x1="0" y1="496" x2="512" y2="496" />
                        <line fill="none" stroke="#B35047" x1="0" y1="16" x2="512" y2="16" />
                        <line fill="none" stroke="#B35047" x1="16" y1="0" x2="16" y2="512" />
                      </g>
                      <g>
                        <line fill="none" stroke="#B35047" x1="32" y1="0" x2="32" y2="512" />
                        <line fill="none" stroke="#B35047" x1="64" y1="0" x2="64" y2="512" />
                        <line fill="none" stroke="#B35047" x1="96" y1="0" x2="96" y2="512" />
                        <line fill="none" stroke="#B35047" x1="128" y1="0" x2="128" y2="512" />
                        <line fill="none" stroke="#B35047" x1="160" y1="0" x2="160" y2="512" />
                        <line fill="none" stroke="#B35047" x1="192" y1="0" x2="192" y2="512" />
                        <line fill="none" stroke="#B35047" x1="224" y1="0" x2="224" y2="512" />
                        <line fill="none" stroke="#B35047" x1="256" y1="0" x2="256" y2="512" />
                        <line fill="none" stroke="#B35047" x1="288" y1="0" x2="288" y2="512" />
                        <line fill="none" stroke="#B35047" x1="320" y1="0" x2="320" y2="512" />
                        <line fill="none" stroke="#B35047" x1="352" y1="0" x2="352" y2="512" />
                        <line fill="none" stroke="#B35047" x1="384" y1="0" x2="384" y2="512" />
                        <line fill="none" stroke="#B35047" x1="416" y1="0" x2="416" y2="512" />
                        <line fill="none" stroke="#B35047" x1="448" y1="0" x2="448" y2="512" />
                        <line fill="none" stroke="#B35047" x1="480" y1="0" x2="480" y2="512" />
                        <line fill="none" stroke="#B35047" x1="0" y1="32" x2="512" y2="32" />
                        <line fill="none" stroke="#B35047" x1="0" y1="64" x2="512" y2="64" />
                        <line fill="none" stroke="#B35047" x1="0" y1="96" x2="512" y2="96" />
                        <line fill="none" stroke="#B35047" x1="0" y1="128" x2="512" y2="128" />
                        <line fill="none" stroke="#B35047" x1="0" y1="160" x2="512" y2="160" />
                        <line fill="none" stroke="#B35047" x1="0" y1="192" x2="512" y2="192" />
                        <line fill="none" stroke="#B35047" x1="0" y1="224" x2="512" y2="224" />
                        <line fill="none" stroke="#B35047" x1="0" y1="256" x2="512" y2="256" />
                        <line fill="none" stroke="#B35047" x1="0" y1="288" x2="512" y2="288" />
                        <line fill="none" stroke="#B35047" x1="0" y1="320" x2="512" y2="320" />
                        <line fill="none" stroke="#B35047" x1="0" y1="352" x2="512" y2="352" />
                        <line fill="none" stroke="#B35047" x1="0" y1="384" x2="512" y2="384" />
                        <line fill="none" stroke="#B35047" x1="0" y1="416" x2="512" y2="416" />
                        <line fill="none" stroke="#B35047" x1="0" y1="448" x2="512" y2="448" />
                        <line fill="none" stroke="#B35047" x1="0" y1="480" x2="512" y2="480" />
                        <rect fill="none" stroke="#B35047" width="512" height="512" />
                      </g>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M497.914,497.914c-18.783,18.781-49.226,18.781-68.008,0l-84.863-84.864
	c-34.889,22.366-76.131,35.718-120.66,35.718C100.468,448.768,0,348.314,0,224.384S100.468,0,224.383,0
	c123.931,0,224.384,100.453,224.384,224.384c0,44.529-13.352,85.771-35.718,120.675l84.864,84.848
	C516.695,448.689,516.695,479.131,497.914,497.914z M224.383,64.11c-88.511,0-160.274,71.763-160.274,160.274
	c0,88.526,71.763,160.274,160.274,160.274c88.527,0,160.274-71.748,160.274-160.274C384.657,135.873,312.91,64.11,224.383,64.11z
	 M256.438,320.548h-64.109v-64.109h-64.109v-64.109h64.109v-64.11h64.109v64.11h64.11v64.109h-64.11V320.548z" />
                    </svg>
                    功能6
                  </div>
                  <!-- <div style="background-color: #f0e0ff; display: flex; justify-content: center; align-items: center;">7
                  </div>
                  <div style="background-color: #7095d5; display: flex; justify-content: center; align-items: center;">8
                  </div>
                  <div style="background-color: #94B3E4; display: flex; justify-content: center; align-items: center;">9
                  </div> -->
                </div>
              </el-tab-pane>
            </el-tabs>

          </el-dialog>

          <el-tooltip class="item" effect="dark" content="管理系统导航栏" placement="top">
            <div @click="drawer = true" type="primary" style="margin-left: 16px; cursor:pointer;">
              <svg t="1672142918768" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="4020" width="32" height="32">
                <path
                  d="M416 554.666667c29.44 0 53.333333 23.893333 53.333333 53.333333V768c0 29.44-23.893333 53.333333-53.333333 53.333333H256c-29.44 0-53.333333-23.893333-53.333333-53.333333v-160c0-29.44 23.893333-53.333333 53.333333-53.333333zM768 554.666667c29.44 0 53.333333 23.893333 53.333333 53.333333V768c0 29.44-23.893333 53.333333-53.333333 53.333333h-160c-29.44 0-53.333333-23.893333-53.333333-53.333333v-160c0-29.44 23.893333-53.333333 53.333333-53.333333z m-352 42.666666H256a10.666667 10.666667 0 0 0-10.666667 10.666667V768c0 5.888 4.778667 10.666667 10.666667 10.666667h160A10.666667 10.666667 0 0 0 426.666667 768v-160a10.666667 10.666667 0 0 0-10.666667-10.666667zM768 597.333333h-160a10.666667 10.666667 0 0 0-10.666667 10.666667V768c0 5.888 4.778667 10.666667 10.666667 10.666667H768a10.666667 10.666667 0 0 0 10.666667-10.666667v-160A10.666667 10.666667 0 0 0 768 597.333333zM416 202.666667c29.44 0 53.333333 23.893333 53.333333 53.333333v160c0 29.44-23.893333 53.333333-53.333333 53.333333H256c-29.44 0-53.333333-23.893333-53.333333-53.333333V256c0-29.44 23.893333-53.333333 53.333333-53.333333z m272 0a133.333333 133.333333 0 1 1 0 266.666666 133.333333 133.333333 0 0 1 0-266.666666z m-272 42.666666H256a10.666667 10.666667 0 0 0-10.666667 10.666667v160c0 5.888 4.778667 10.666667 10.666667 10.666667h160a10.666667 10.666667 0 0 0 10.666667-10.666667V256a10.666667 10.666667 0 0 0-10.666667-10.666667z m272 0a90.666667 90.666667 0 1 0 0 181.333334 90.666667 90.666667 0 0 0 0-181.333334z"
                  fill="#3eabc6" p-id="4021"></path>
              </svg>
            </div>
          </el-tooltip>
          <div class="menu-form">
            <el-drawer title="管理系统导航栏" :visible.sync="drawer" :direction="direction" :before-close="handleClose">
              <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#0a1649" text-color="#7ef0ff">
                <el-menu-item index="1" @click="gohome">
                  <i class="el-icon-menu"></i>
                  <span slot="title">首页</span>
                </el-menu-item>
                <el-menu-item index="2" @click="goJvillage">
                  <i class="el-icon-menu"></i>
                  <span slot="title">蒋庄村</span>
                </el-menu-item>
                <el-menu-item index="3" @click="goBvillage">
                  <i class="el-icon-menu"></i>
                  <span slot="title">贲集村</span>
                </el-menu-item>

                <el-menu-item index="4" @click="goHoutai">
                  <i class="el-icon-menu"></i>
                  <span slot="title">后台管理系统</span>
                </el-menu-item>
              </el-menu>
            </el-drawer>
          </div>
        </div>
      </header>

      <section class="mainbox">
        <div class="item left">
          <div class="panel">
            <h2>群众问题反馈</h2>
            <business />
            <div class="panel-footer"></div>
          </div>
          <div class="panel">
            <h2>人口信息</h2>
            <talent />
            <div class="panel-footer"></div>
          </div>
          <div class="panel">
            <h2>人均收入</h2>
            <income />
            <div class="panel-footer"></div>
          </div>
        </div>

        <div class="item center">
          <div class="resume">
            <div class="resume-hd">
              <ul>
                <li>
                  <countTo :startVal='startVal' :endVal='490' :duration='6000' separator=""></countTo>
                </li>
                <li>
                  <countTo :startVal='startVal' :endVal='75' :duration='6000' separator=""></countTo>
                </li>
                <li>
                  <countTo :startVal='startVal' :endVal='3000' :duration='6000' separator=""></countTo>
                </li>
              </ul>
            </div>
            <div class="resume-bd">
              <ul>
                <li>村内人数（单位：人）</li>
                <li>网格员占比（单位：%）</li>
                <li>人均收入（单位：元）</li>
              </ul>
            </div>
          </div>
          <div class="map">
            <video muted autoplay="autoplay" loop="loop" height="400px" width="100%">
              <source src="../../src/assets/img/4.mp4" type="video/mp4" />
            </video>
            <div class="go">
              <video muted autoplay="autoplay" loop="loop" height="400px" width="100%">
                <source src="../../src/assets/img/5.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

        </div>

        <div class="item right">
          <div class="panel">
            <h2>乡村特色</h2>
            <img
              src="https://ts1.cn.mm.bing.net/th/id/R-C.688c8dc2e78e9946b78f046409a2e984?rik=oXi9zteleBvkpw&riu=http%3a%2f%2fpic.baike.soso.com%2fugc%2fbaikepic2%2f12233%2fori-20160808192818-969431015.jpg%2f300&ehk=AxEpY1oaqvmtp8N2%2fOhQgmcZcY28PUJLUBKiVLXDKW4%3d&risl=&pid=ImgRaw&r=0"
              height="80%" />
            <div class="panel-footer"></div>
          </div>
          <div class="panel">
            <h2>人口分布</h2>
            <distribution />
            <div class="panel-footer"></div>
          </div>
          <div class="panel">
            <h2>发展历程</h2>
            <history />
            <div class="panel-footer"></div>
          </div>
        </div>
      </section>

    </div>

  </div>
</template>

<script>
import '@/assets/js/flexible'
import '@/assets/js/china'
import countTo from 'vue-count-to'

export default {
  name: 'Brand',
  components: {
    countTo
  },
  data() {
    return {
      nowTime: '',
      week: '',
      date: '',
      timer: null,
      imgSrc: '',
      weatcherData: {},
      startVal: 0,
      geoCoordMap: {},
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      dialogTableVisible: false,
      activeName: 'second',
    }
  },
  computed: {},
  created() {
  },
  mounted() {
    this.getWeather();
    this.timer = setInterval(() => {
      this.getWeather();
    }, 1000 * 60 * 60)
    this.nowTimes();
    this.getEchart();
  },
  methods: {
    timeFormate(timeStamp) { //显示当前时间
      let newDate = new Date(timeStamp);
      let year = newDate.getFullYear();
      let month = newDate.getMonth() + 1 < 10 ? '0' + (newDate.getMonth() + 1) : newDate.getMonth() + 1;
      let date = newDate.getDate() < 10 ? '0' + newDate.getDate() : newDate.getDate();
      let hh = newDate.getHours() < 10 ? '0' + newDate.getHours() : newDate.getHours();
      let mm = newDate.getMinutes() < 10 ? '0' + newDate.getMinutes() : newDate.getMinutes();
      let ss = newDate.getSeconds() < 10 ? '0' + newDate.getSeconds() : newDate.getSeconds();
      let week = newDate.getDay();
      let weeks = ['日', '一', '二', '三', '四', '五', '六'];
      let getWeek = '星期' + weeks[week];
      this.week = getWeek;
      this.date = year + '.' + month + '.' + date;
      this.nowTime = hh + ':' + mm + ':' + ss;
    },
    nowTimes() {
      this.timeFormate(new Date());
      setInterval(this.nowTimes, 1000);
      this.clear();
    },
    clear() {
      clearInterval(this.nowTimes)
      this.nowTimes = null;
    },
    getWeather() { // 第三方天气api接口
      axios.get('https://www.tianqiapi.com/api/', {
        params: {
          appid: '26148275',
          appsecret: '2id6H48Y',
          version: 'v6'
        }
      }).then(res => {
        if (res.data) {
          if (res.data.wea_img == 'xue') {
            this.imgSrc = require('../assets/img/brand/xue.png');
          } else if (res.data.wea_img == 'yin') {
            this.imgSrc = require('../assets/img/brand/yin.png');
          } else if (res.data.wea_img == 'yu' || res.data.wea_img == 'bingbao') {
            this.imgSrc = require('../assets/img/brand/yu.png');
          } else if (res.data.wea_img == 'yun') {
            this.imgSrc = require('../assets/img/brand/yun.png');
          } else if (res.data.wea_img == 'wu') {
            this.imgSrc = require('../assets/img/brand/wu.png');
          } else if (res.data.wea_img == 'shachen') {
            this.imgSrc = require('../assets/img/brand/shachen.png');
          } else if (res.data.wea_img == 'lei') {
            this.imgSrc = require('../assets/img/brand/lei.png');
          } else {
            this.imgSrc = require('../assets/img/brand/qing.png');
          }
          this.weatcherData = res.data;
        }
      }).catch(err => {
        console.log(err)
      })
    },
    gohome() {
      this.$router.push({
        path: '/'
      })
    },
    goJvillage() {
      this.$router.push({
        path: '/jvillage'
      })
    },
    goBvillage() {
      this.$router.push({
        path: '/bvillage'
      })
    },
    goHoutai() {
      window.location.href = 'http://127.0.0.1:8000/index';
    },


  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
}
</script>

<style lang="scss" scoped>
.brand-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000;

  .wrap {
    background: url(../assets/img/brand/bg.jpg) no-repeat #000;
    background-size: cover;
    line-height: 1.15;

    header {
      position: relative;
      height: 1rem;
      background: url(../assets/img/brand/head_bg.png) no-repeat top center;
      background-size: 100% 100%;

      h2 {
        color: #7ef0ff;
        font-size: 0.475rem;
        text-align: center;
        line-height: 0.75rem;
        letter-spacing: 1px;
      }

      .weather {
        position: absolute;
        left: 1.375rem;
        top: 0.35rem;
        font-size: 0.25rem;
        color: rgba(126, 240, 255, .7);

        img {
          width: .45rem;
        }

        span {
          display: inline-block;
        }

        .tem {
          margin: 0 .1rem 0 .2rem;
        }
      }

      .showTime {
        position: absolute;
        right: 1.375rem;
        top: 0.5rem;
        color: rgba(126, 240, 255, .7);
        display: flex;

        .time {
          font-size: .28rem;
          margin-right: .18rem;
        }

        .date {
          span {
            display: block;

            &:nth-child(1) {
              font-size: .12rem;
              text-align: right;
            }

            &:nth-child(2) {
              font-size: .14rem;
            }
          }
        }
      }
    }

    .mainbox {
      min-width: 1024px;
      max-width: 1920px;
      padding: 0.125rem 0.125rem 0;
      display: flex;

      .item {
        flex: 3;

        &.center {
          flex: 5;
          margin: 0 0.125rem 0.1rem;
          overflow: hidden;

          .resume {
            background: rgba(101, 132, 226, 0.1);
            padding: 0.1875rem;

            .resume-hd {
              position: relative;
              border: 1px solid rgba(25, 186, 139, 0.17);

              ul {
                display: flex;

                %li-line {
                  content: "";
                  position: absolute;
                  height: 50%;
                  width: 1px;
                  background: rgba(255, 255, 255, 0.2);
                  top: 25%;
                }

                li {
                  position: relative;
                  flex: 1;
                  text-align: center;
                  height: 1.2rem;
                  line-height: 1.2rem;
                  font-size: 0.65rem;
                  color: #ffeb7b;
                  padding: 0.05rem 0;
                  font-family: 'DIGITALDREAMFAT';
                  font-weight: bold;

                  &:nth-child(2) {
                    &:after {
                      @extend %li-line;
                      right: 0;
                    }

                    &:before {
                      @extend %li-line;
                      left: 0;
                    }
                  }
                }
              }

              &:before {
                content: "";
                position: absolute;
                width: 30px;
                height: 10px;
                border-top: 2px solid #02a6b5;
                border-left: 2px solid #02a6b5;
                top: 0;
                left: 0;
              }

              &:after {
                content: "";
                position: absolute;
                width: 30px;
                height: 10px;
                border-bottom: 2px solid #02a6b5;
                border-right: 2px solid #02a6b5;
                right: 0;
                bottom: 0;
              }
            }

            .resume-bd {
              ul {
                display: flex;

                li {
                  flex: 1;
                  height: 0.5rem;
                  line-height: 0.5rem;
                  text-align: center;
                  font-size: 0.225rem;
                  color: rgba(255, 255, 255, 0.7);
                  padding-top: 0.125rem;
                }
              }
            }
          }
        }

        %map-style {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 6.475rem;
          height: 6.475rem;
          background: url(../assets/img/brand/map.png) no-repeat;
          background-size: 100% 100%;
          opacity: 0.3;
        }

        .map {
          position: relative;
          height: 10.125rem;

          .chart {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 5;
            height: 10.125rem;
            width: 100%;
          }

          .map1 {
            @extend %map-style;
          }

          .map2 {
            @extend %map-style;
            width: 8.0375rem;
            height: 8.0375rem;
            background-image: url(../assets/img/brand/lbx.png);
            opacity: 0.6;
            -webkit-animation: rotate 15s linear infinite;
            animation: rotate 15s linear infinite;
            z-index: 2;
          }

          .map3 {
            @extend %map-style;
            width: 7.075rem;
            height: 7.075rem;
            background-image: url(../assets/img/brand/jt.png);
            -webkit-animation: rotate1 10s linear infinite;
            animation: rotate1 10s linear infinite;
          }
        }

        .panel {
          position: relative;
          height: 3.875rem;
          border: 1px solid rgba(25, 186, 139, 0.17);
          background: rgba(255, 255, 255, 0.04) url(../assets/img/brand/line.png);
          padding: 0 0.1875rem 0;
          margin-bottom: 0.1875rem;

          &:before {
            position: absolute;
            top: 0;
            left: 0;
            content: "";
            width: 10px;
            height: 10px;
            border-top: 2px solid #02a6b5;
            border-left: 2px solid #02a6b5;
          }

          &:after {
            position: absolute;
            top: 0;
            right: 0;
            content: "";
            width: 10px;
            height: 10px;
            border-top: 2px solid #02a6b5;
            border-right: 2px solid #02a6b5;
          }

          .panel-footer {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;

            &:before {
              position: absolute;
              bottom: 0;
              left: 0;
              content: "";
              width: 10px;
              height: 10px;
              border-bottom: 2px solid #02a6b5;
              border-left: 2px solid #02a6b5;
            }

            &:after {
              position: absolute;
              bottom: 0;
              right: 0;
              content: "";
              width: 10px;
              height: 10px;
              border-bottom: 2px solid #02a6b5;
              border-right: 2px solid #02a6b5;
            }
          }

          h2 {
            height: 0.6rem;
            line-height: 0.6rem;
            text-align: center;
            color: #fff;
            font-size: 0.225rem;
            font-weight: 400;

            a {
              margin: 0 0.1875rem;
              color: #fff;
              text-decoration: none;
            }
          }

          .chart {
            height: 3rem;
          }
        }
      }
    }
  }
}

@-webkit-keyframes rotate {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes rotate {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@-webkit-keyframes rotate1 {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}

@keyframes rotate1 {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}

@media screen and (max-width: 1024px) {
  html {
    font-size: 42px !important;
  }
}

@media screen and (min-width: 1920) {
  html {
    font-size: 80px !important;
  }
}</style>