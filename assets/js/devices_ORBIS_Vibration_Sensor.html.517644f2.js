"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[17127],{90300:(e,i,t)=>{t.r(i),t.d(i,{comp:()=>p,data:()=>v});var n=t(37711);const o=(0,n.Lk)("h1",{id:"niceboy-orbis-vibration-sensor",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#niceboy-orbis-vibration-sensor"},[(0,n.Lk)("span",null,"Niceboy ORBIS Vibration Sensor")])],-1),a=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1),s=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"ORBIS Vibration Sensor")],-1),l=(0,n.Lk)("td",null,"Vendor",-1),r=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"Vibration sensor")],-1),c=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"battery, voltage, vibration, sensitivity, linkquality")],-1),d=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ORBIS-Vibration-Sensor.png",alt:"Niceboy ORBIS Vibration Sensor"})])],-1),u=(0,n.Lk)("h2",{id:"options",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#options"},[(0,n.Lk)("span",null,"Options")])],-1),h=(0,n.Fv)('<ul><li><code>vibration_timeout</code>: Time in seconds after which vibration is cleared after detecting it (default 90 seconds). The value must be a number with a minimum value of <code>0</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="vibration-binary" tabindex="-1"><a class="header-anchor" href="#vibration-binary"><span>Vibration (binary)</span></a></h3><p>Indicates whether the device detected vibration. Value can be found in the published state on the <code>vibration</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> vibration is ON, if <code>false</code> OFF.</p><h3 id="sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#sensitivity-numeric"><span>Sensitivity (numeric)</span></a></h3><p>Sensitivty of the sensor (0 = highest sensitivity, 50 = lowest sensitivity). Press button on the device right before changing this. Value can be found in the published state on the <code>sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>50</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',12),b={},p=(0,t(3790).A)(b,[["render",function(e,i){const t=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[o,(0,n.Lk)("table",null,[a,(0,n.Lk)("tbody",null,[s,(0,n.Lk)("tr",null,[l,(0,n.Lk)("td",null,[(0,n.bF)(t,{to:"/supported-devices/#v=Niceboy"},{default:(0,n.k6)((()=>[(0,n.eW)("Niceboy")])),_:1})])]),r,c,d])]),u,(0,n.Lk)("p",null,[(0,n.Lk)("em",null,[(0,n.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.k6)((()=>[(0,n.eW)("How to use device type specific configuration")])),_:1})])]),h])}]]),v=JSON.parse('{"path":"/devices/ORBIS_Vibration_Sensor.html","title":"Niceboy ORBIS Vibration Sensor control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Niceboy ORBIS Vibration Sensor control via MQTT","description":"Integrate your Niceboy ORBIS Vibration Sensor via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-08-01T15:13:29.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Vibration (binary)","slug":"vibration-binary","link":"#vibration-binary","children":[]},{"level":3,"title":"Sensitivity (numeric)","slug":"sensitivity-numeric","link":"#sensitivity-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1723882055000},"filePathRelative":"devices/ORBIS_Vibration_Sensor.md"}')}}]);