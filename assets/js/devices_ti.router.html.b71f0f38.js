"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[67308],{85438:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>m,data:()=>p});var r=i(37711);const a=(0,r.Lk)("h1",{id:"custom-devices-diy-ti-router",tabindex:"-1"},[(0,r.Lk)("a",{class:"header-anchor",href:"#custom-devices-diy-ti-router"},[(0,r.Lk)("span",null,"Custom devices (DiY) ti.router")])],-1),o=(0,r.Lk)("thead",null,[(0,r.Lk)("tr",null,[(0,r.Lk)("th"),(0,r.Lk)("th")])],-1),s=(0,r.Lk)("tr",null,[(0,r.Lk)("td",null,"Model"),(0,r.Lk)("td",null,"ti.router")],-1),n=(0,r.Lk)("td",null,"Vendor",-1),l=(0,r.Lk)("tr",null,[(0,r.Lk)("td",null,"Description"),(0,r.Lk)("td",null,"Texas Instruments router")],-1),d=(0,r.Lk)("tr",null,[(0,r.Lk)("td",null,"Exposes"),(0,r.Lk)("td",null,"transmit_power, linkquality")],-1),u=(0,r.Lk)("tr",null,[(0,r.Lk)("td",null,"Picture"),(0,r.Lk)("td",null,[(0,r.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ti.router.png",alt:"Custom devices (DiY) ti.router"})])],-1),c=(0,r.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="firmware" tabindex="-1"><a class="header-anchor" href="#firmware"><span>Firmware</span></a></h3><p>This is a Texas Instruments CC1352P-2, CC2652RB or CC2652R flashed with the following firmware: https://github.com/Koenkk/Z-Stack-firmware/tree/master/router/Z-Stack_3.x.0/bin</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="transmit-power-numeric" tabindex="-1"><a class="header-anchor" href="#transmit-power-numeric"><span>Transmit power (numeric)</span></a></h3><p>Transmit power, supported from firmware 20221102. The max for CC1352 is 20 dBm and 5 dBm for CC2652 (any higher value is converted to 5dBm). Value can be found in the published state on the <code>transmit_power</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;transmit_power&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;transmit_power&quot;: NEW_VALUE}</code>. The minimal value is <code>-20</code> and the maximum value is <code>20</code>. The unit of this value is <code>dBm</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',8),h={},m=(0,i(3790).A)(h,[["render",function(e,t){const i=(0,r.g2)("RouteLink");return(0,r.uX)(),(0,r.CE)("div",null,[a,(0,r.Lk)("table",null,[o,(0,r.Lk)("tbody",null,[s,(0,r.Lk)("tr",null,[n,(0,r.Lk)("td",null,[(0,r.bF)(i,{to:"/supported-devices/#v=Custom%20devices%20(DiY)"},{default:(0,r.k6)((()=>[(0,r.eW)("Custom devices (DiY)")])),_:1})])]),l,d,u])]),c])}]]),p=JSON.parse('{"path":"/devices/ti.router.html","title":"Custom devices (DiY) ti.router control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Custom devices (DiY) ti.router control via MQTT","description":"Integrate your Custom devices (DiY) ti.router via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-01-31T22:24:43.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Firmware","slug":"firmware","link":"#firmware","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Transmit power (numeric)","slug":"transmit-power-numeric","link":"#transmit-power-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1723882055000},"filePathRelative":"devices/ti.router.md"}')}}]);