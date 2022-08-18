import GetTitle from "../Title";
import { onMount } from "solid-js";

export default function Settings () {
  onMount(() => {
    document.title = GetTitle();
  });

  return (
    <div class="bg-gray-900 text-gray-100">
      <h1 class="text-2xl p-10 text-center">Settings</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10 px-5 sm:px-30 md:px-64">
        <div>
          <h2 class="text-xl py-2">Tab Cloak</h2>
          <select id="tab-cloak" class="bg-gray-900 w-full p-2 rounded-md border-solid border-2 border-gray-800 focus:outline-none">
            <option value="true">Enabled</option>
            <option value="false">Disabled</option>
          </select>
        </div>
        <div>
          <h2 class="text-xl py-2">Analytics Tracking</h2>
          <select id="analytics" class="bg-gray-900 w-full p-2 rounded-md border-solid border-2 border-gray-800 focus:outline-none">
            <option value="true">Enabled</option>
            <option value="false">Disabled</option>
          </select>
        </div>
        <div>
          <h2 class="text-xl py-2">Tab Cloak Text</h2>
          <input id="tab-cloak-text" class="bg-gray-900 w-full p-2 rounded-md border-solid border-2 border-gray-800 focus:outline-none"></input>
        </div>
        <div>
          <h2 class="text-xl py-2">Tab Cloak Icon</h2>
          <input id="tab-cloak-icon" class="bg-gray-900 w-full p-2 rounded-md border-solid border-2 border-gray-800 focus:outline-none"></input>
        </div>
        <div>
          <h2 class="text-xl py-2">Tab Cloak Mode</h2>
          <select id="tab-cloak-mode" class="bg-gray-900 w-full p-2 rounded-md border-solid border-2 border-gray-800 focus:outline-none">
            <option value="hidden">On Tab Hide</option>
            <option value="always">Always On</option>
          </select>
        </div>
        <div>
          <h2 class="text-xl py-2">URL Cloaking</h2>
          <select id="url-cloak" class="bg-gray-900 w-full p-2 rounded-md border-solid border-2 border-gray-800 focus:outline-none">
            <option value="disabled">Disabled</option>
            <option value="blank">About Blank</option>
            <option value="data">Data URL</option>
            <option value="blob">Blob URL</option>
          </select>
        </div>
      </div>
      <script src="/settings.js"></script>
    </div>
  );
}
