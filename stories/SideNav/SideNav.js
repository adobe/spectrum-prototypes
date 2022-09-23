/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
import "@spectrum-css/sidenav/dist/index-vars.css";
import "./SideNav.css";
import Handlebars from "handlebars";

export const createSideNav = Handlebars.compile(`
<style>
  :root {
    --spectrum-SideNav-active-animation-ease: var(--spectrum-global-animation-{{ease}});
    --spectrum-SideNav-active-animation-duration: {{duration}}ms;
    --spectrum-SideNav-active-scale-multiplier: {{percentage scaleMultiplier}};
  }
</style>
<nav class="spectrum-Nav">
  <ul class="spectrum-SideNav">
    <li class="spectrum-SideNav-item is-selected">
      <a href="#" class="spectrum-SideNav-itemLink" aria-current="page" onclick="return false;">Section Title 1</a>
    </li>
    <li class="spectrum-SideNav-item is-disabled">
      <a class="spectrum-SideNav-itemLink" onclick="return false;">Section Title 2</a>
    </li>
    <li class="spectrum-SideNav-item">
      <a href="#" class="spectrum-SideNav-itemLink" onclick="return false;">Section Title 3</a>
    </li>
    <li class="spectrum-SideNav-item">
      <a href="#" class="spectrum-SideNav-itemLink" onclick="return false;">Section Title 4</a>
    </li>
  </ul>
</nav>
`);
