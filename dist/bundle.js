(()=>{var t={246:t=>{t.exports={createPlayer:function(t){return{attack:function(r){t.receiveAttack(r)}}},createComputer:function(t){var r=[];return{attack:function(n){if(n){if(r.some((function(t){return t[0]===n[0]&&t[1]===n[1]})))return}else n=function(){var t,n;do{t=Math.floor(10*Math.random()),n=Math.floor(10*Math.random())}while(r.some((function(r){return r[0]===t&&r[1]===n})));return[t,n]}(),r.push(n);return t.receiveAttack(n),n}}}}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,n),i.exports}(()=>{"use strict";function t(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var e,o,i,a,c=[],l=!0,u=!1;try{if(i=(n=n.call(t)).next,0===r){if(Object(n)!==n)return;l=!1}else for(;!(l=(e=i.call(n)).done)&&(c.push(e.value),c.length!==r);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(t,n)||function(t,n){if(t){if("string"==typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}const e=function(r){var n=Array.from({length:10},(function(){return Array(10).fill(null)})),e=[],o=[],i=[],a=function(r,e,i){var a=t(e,2),c=a[0],l=a[1],u=r.length;if(!(c<0||c>=10||l<0||l>=10||"horizontal"===i&&l+u>10||"vertical"===i&&c+u>10)){if("horizontal"===i){for(var s=0;s<u;s++)if(null!==n[c][l+s])return;for(var f=0;f<u;f++)n[c][l+f]=r}else{for(var h=0;h<u;h++)if(null!==n[c+h][l])return;for(var d=0;d<u;d++)n[c+d][l]=r}o.push(r)}};return r.forEach((function(t){var r=t.ship,n=t.coords,e=t.orientation;a(r,n,e)})),{board:n,placeShip:a,missedAttacks:e,receiveAttack:function(r){var o=t(r,2),a=o[0],c=o[1],l=n[a][c];l?(l.hit(),i.push(r)):e.push(r)},allSunk:function(){return o.every((function(t){return t.isSunk()}))},attackedCells:i}};var o=n(246);const i=function(t){return{length:t,hits:0,hit:function(){this.hits++},isSunk:function(){return this.hits>=this.length}}};function a(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var e,o,i,a,c=[],l=!0,u=!1;try{if(i=(n=n.call(t)).next,0===r){if(Object(n)!==n)return;l=!1}else for(;!(l=(e=i.call(n)).done)&&(c.push(e.value),c.length!==r);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(t,r)||function(t,r){if(t){if("string"==typeof t)return c(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,r):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}var l=[{ship:i(5),coords:[0,0],orientation:"horizontal"},{ship:i(4),coords:[2,3],orientation:"vertical"},{ship:i(3),coords:[7,4],orientation:"horizontal"},{ship:i(3),coords:[4,1],orientation:"vertical"},{ship:i(2),coords:[6,6],orientation:"horizontal"}],u=[{ship:i(5),coords:[0,0],orientation:"horizontal"},{ship:i(4),coords:[2,3],orientation:"vertical"},{ship:i(3),coords:[6,6],orientation:"horizontal"},{ship:i(3),coords:[8,1],orientation:"horizontal"},{ship:i(2),coords:[7,4],orientation:"horizontal"}],s=e(l),f=e(u),h=(0,o.createPlayer)(f),d=(0,o.createComputer)(s),p=document.getElementById("player-board"),v=document.getElementById("computer-board"),y=function t(r,n){n.innerHTML="",r.board.forEach((function(e,o){e.forEach((function(e,i){var a=document.createElement("div");a.classList.add("cell"),e&&r!==f&&a.classList.add("ship"),a.addEventListener("click",(function(){r===f&&(h.attack([o,i]),t(f,v),f.allSunk()?alert("You win!"):m())})),n.appendChild(a)}))})),r.missedAttacks.forEach((function(t){var r=a(t,2),e=r[0],o=r[1];n.children[10*e+o].classList.add("missed")})),r.attackedCells.forEach((function(t){var r=a(t,2),e=r[0],o=r[1],i=n.children[10*e+o];i.classList.remove("ship"),i.classList.add("ship-hit")}))},m=function(){d.attack(),y(s,p),s.allSunk()&&alert("Computer wins!")};y(s,p),y(f,v)})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVQyxJQUFJLFdBQzVCLEdBQ0YsRUFFTUcsRUFBZSxXQUNKbEIsRUFBU25ELFNBQ3hCd0QsRUFBZ0JwRCxFQUFpQmdELEdBQzdCaEQsRUFBZ0JvQyxXQUNsQjRCLE1BQU0saUJBR1YsRUFHQVosRUFBZ0JwRCxFQUFpQmdELEdBQ2pDSSxFQUFnQlAsRUFBbUJNLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlUGxheWVyID0gKGVuZW15R2FtZWJvYXJkKSA9PiB7XG4gIGNvbnN0IGF0dGFjayA9IChjb29yZHMpID0+IHtcbiAgICBlbmVteUdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3Jkcyk7XG4gIH07XG5cbiAgcmV0dXJuIHsgYXR0YWNrIH07XG59O1xuXG5jb25zdCBjcmVhdGVDb21wdXRlciA9IChwbGF5ZXJHYW1lYm9hcmQpID0+IHtcbiAgY29uc3QgYXR0YWNrZWRDb29yZHMgPSBbXTtcblxuICBjb25zdCBnZXRSYW5kb21Db29yZHMgPSAoKSA9PiB7XG4gICAgbGV0IHJvdywgY29sO1xuICAgIGRvIHtcbiAgICAgIHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICB9IHdoaWxlIChcbiAgICAgIGF0dGFja2VkQ29vcmRzLnNvbWUoKGNvb3JkcykgPT4gY29vcmRzWzBdID09PSByb3cgJiYgY29vcmRzWzFdID09PSBjb2wpXG4gICAgKTtcbiAgICByZXR1cm4gW3JvdywgY29sXTtcbiAgfTtcblxuICBjb25zdCBhdHRhY2sgPSAoY29vcmRzKSA9PiB7XG4gICAgaWYgKCFjb29yZHMpIHtcbiAgICAgIGNvb3JkcyA9IGdldFJhbmRvbUNvb3JkcygpO1xuICAgICAgYXR0YWNrZWRDb29yZHMucHVzaChjb29yZHMpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBhdHRhY2tlZENvb3Jkcy5zb21lKChjKSA9PiBjWzBdID09PSBjb29yZHNbMF0gJiYgY1sxXSA9PT0gY29vcmRzWzFdKVxuICAgICkge1xuICAgICAgcmV0dXJuOyAvLyBEb24ndCBhdHRhY2sgdGhlIHNhbWUgY29vcmRpbmF0ZSB0d2ljZVxuICAgIH1cbiAgICBwbGF5ZXJHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZHMpO1xuICAgIHJldHVybiBjb29yZHM7XG4gIH07XG5cbiAgcmV0dXJuIHsgYXR0YWNrIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHsgY3JlYXRlUGxheWVyLCBjcmVhdGVDb21wdXRlciB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImNvbnN0IGNyZWF0ZUdhbWVib2FyZCA9IChzaGlwc0NvbmZpZykgPT4ge1xuICBjb25zdCBib2FyZCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDEwIH0sICgpID0+IEFycmF5KDEwKS5maWxsKG51bGwpKTtcbiAgY29uc3QgbWlzc2VkQXR0YWNrcyA9IFtdO1xuICBjb25zdCBzaGlwcyA9IFtdO1xuICBjb25zdCBhdHRhY2tlZENlbGxzID0gW107XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIGNvb3Jkcywgb3JpZW50YXRpb24pID0+IHtcbiAgICBjb25zdCBbcm93LCBjb2xdID0gY29vcmRzO1xuICAgIGNvbnN0IGxlbmd0aCA9IHNoaXAubGVuZ3RoO1xuXG4gICAgaWYgKFxuICAgICAgcm93IDwgMCB8fFxuICAgICAgcm93ID49IDEwIHx8XG4gICAgICBjb2wgPCAwIHx8XG4gICAgICBjb2wgPj0gMTAgfHxcbiAgICAgIChvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgJiYgY29sICsgbGVuZ3RoID4gMTApIHx8XG4gICAgICAob3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIiAmJiByb3cgKyBsZW5ndGggPiAxMClcbiAgICApIHtcbiAgICAgIC8vIEludmFsaWQgcGxhY2VtZW50LCBkbyBub3QgcGxhY2UgdGhlIHNoaXBcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAob3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChib2FyZFtyb3ddW2NvbCArIGldICE9PSBudWxsKSB7XG4gICAgICAgICAgLy8gVGhlcmUncyBhbHJlYWR5IGEgc2hpcCBpbiB0aGlzIHBvc2l0aW9uLCBkbyBub3QgcGxhY2UgdGhlIHNoaXBcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYm9hcmRbcm93XVtjb2wgKyBpXSA9IHNoaXA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW3JvdyArIGldW2NvbF0gIT09IG51bGwpIHtcbiAgICAgICAgICAvLyBUaGVyZSdzIGFscmVhZHkgYSBzaGlwIGluIHRoaXMgcG9zaXRpb24sIGRvIG5vdCBwbGFjZSB0aGUgc2hpcFxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBib2FyZFtyb3cgKyBpXVtjb2xdID0gc2hpcDtcbiAgICAgIH1cbiAgICB9XG4gICAgc2hpcHMucHVzaChzaGlwKTtcbiAgfTtcblxuICBzaGlwc0NvbmZpZy5mb3JFYWNoKCh7IHNoaXAsIGNvb3Jkcywgb3JpZW50YXRpb24gfSkgPT4ge1xuICAgIHBsYWNlU2hpcChzaGlwLCBjb29yZHMsIG9yaWVudGF0aW9uKTtcbiAgfSk7XG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRzKSA9PiB7XG4gICAgY29uc3QgW3JvdywgY29sXSA9IGNvb3JkcztcbiAgICBjb25zdCBzaGlwID0gYm9hcmRbcm93XVtjb2xdO1xuXG4gICAgaWYgKHNoaXApIHtcbiAgICAgIHNoaXAuaGl0KCk7XG4gICAgICBhdHRhY2tlZENlbGxzLnB1c2goY29vcmRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWlzc2VkQXR0YWNrcy5wdXNoKGNvb3Jkcyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFsbFN1bmsgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGJvYXJkLFxuICAgIHBsYWNlU2hpcCxcbiAgICBtaXNzZWRBdHRhY2tzLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgYWxsU3VuayxcbiAgICBhdHRhY2tlZENlbGxzLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlR2FtZWJvYXJkO1xuIiwiZnVuY3Rpb24gY3JlYXRlU2hpcChsZW5ndGgpIHtcbiAgcmV0dXJuIHtcbiAgICBsZW5ndGgsXG4gICAgaGl0czogMCxcbiAgICBoaXQoKSB7XG4gICAgICB0aGlzLmhpdHMrKztcbiAgICB9LFxuICAgIGlzU3VuaygpIHtcbiAgICAgIHJldHVybiB0aGlzLmhpdHMgPj0gdGhpcy5sZW5ndGg7XG4gICAgfSxcbiAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNoaXA7XG4iLCJpbXBvcnQgY3JlYXRlR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHsgY3JlYXRlUGxheWVyLCBjcmVhdGVDb21wdXRlciB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IGNyZWF0ZVNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuXG5jb25zdCBwbGF5ZXJTaGlwc0NvbmZpZyA9IFtcbiAgeyBzaGlwOiBjcmVhdGVTaGlwKDUpLCBjb29yZHM6IFswLCAwXSwgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiIH0sXG4gIHsgc2hpcDogY3JlYXRlU2hpcCg0KSwgY29vcmRzOiBbMiwgM10sIG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIgfSxcbiAgeyBzaGlwOiBjcmVhdGVTaGlwKDMpLCBjb29yZHM6IFs3LCA0XSwgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiIH0sXG4gIHsgc2hpcDogY3JlYXRlU2hpcCgzKSwgY29vcmRzOiBbNCwgMV0sIG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIgfSxcbiAgeyBzaGlwOiBjcmVhdGVTaGlwKDIpLCBjb29yZHM6IFs2LCA2XSwgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiIH0sXG5dO1xuXG5jb25zdCBjb21wdXRlclNoaXBzQ29uZmlnID0gW1xuICB7IHNoaXA6IGNyZWF0ZVNoaXAoNSksIGNvb3JkczogWzAsIDBdLCBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIgfSxcbiAgeyBzaGlwOiBjcmVhdGVTaGlwKDQpLCBjb29yZHM6IFsyLCAzXSwgb3JpZW50YXRpb246IFwidmVydGljYWxcIiB9LFxuICB7IHNoaXA6IGNyZWF0ZVNoaXAoMyksIGNvb3JkczogWzYsIDZdLCBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIgfSxcbiAgeyBzaGlwOiBjcmVhdGVTaGlwKDMpLCBjb29yZHM6IFs4LCAxXSwgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiIH0sXG4gIHsgc2hpcDogY3JlYXRlU2hpcCgyKSwgY29vcmRzOiBbNywgNF0sIG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIiB9LFxuXTtcblxuLy8gQ3JlYXRlIGdhbWVib2FyZHMgd2l0aCBwcmVkZXRlcm1pbmVkIHNoaXAgY29uZmlndXJhdGlvbnNcbmNvbnN0IHBsYXllckdhbWVib2FyZCA9IGNyZWF0ZUdhbWVib2FyZChwbGF5ZXJTaGlwc0NvbmZpZyk7XG5jb25zdCBjb21wdXRlckdhbWVib2FyZCA9IGNyZWF0ZUdhbWVib2FyZChjb21wdXRlclNoaXBzQ29uZmlnKTtcbmNvbnN0IHBsYXllciA9IGNyZWF0ZVBsYXllcihjb21wdXRlckdhbWVib2FyZCk7XG5jb25zdCBjb21wdXRlciA9IGNyZWF0ZUNvbXB1dGVyKHBsYXllckdhbWVib2FyZCk7XG5cbmNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXItYm9hcmRcIik7XG5jb25zdCBjb21wdXRlckJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21wdXRlci1ib2FyZFwiKTtcblxuY29uc3QgcmVuZGVyR2FtZWJvYXJkID0gKGdhbWVib2FyZCwgYm9hcmRFbGVtZW50KSA9PiB7XG4gIC8vIENsZWFyIHRoZSBib2FyZCBlbGVtZW50XG4gIGNvbnN0IGNoZWNrZXIgPSBib2FyZEVsZW1lbnQ7XG4gIGJvYXJkRWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAvLyBSZW5kZXIgdGhlIGdhbWVib2FyZCBvbiB0aGUgYm9hcmQgZWxlbWVudFxuICBnYW1lYm9hcmQuYm9hcmQuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgIHJvdy5mb3JFYWNoKChjZWxsLCBjb2xJbmRleCkgPT4ge1xuICAgICAgY29uc3QgY2VsbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY2VsbEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XG5cbiAgICAgIGlmIChjZWxsICYmIGdhbWVib2FyZCAhPT0gY29tcHV0ZXJHYW1lYm9hcmQpIHtcbiAgICAgICAgY2VsbEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICB9XG5cbiAgICAgIGNlbGxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChnYW1lYm9hcmQgPT09IGNvbXB1dGVyR2FtZWJvYXJkKSB7XG4gICAgICAgICAgcGxheWVyLmF0dGFjayhbcm93SW5kZXgsIGNvbEluZGV4XSk7XG4gICAgICAgICAgcmVuZGVyR2FtZWJvYXJkKGNvbXB1dGVyR2FtZWJvYXJkLCBjb21wdXRlckJvYXJkKTtcbiAgICAgICAgICBpZiAoY29tcHV0ZXJHYW1lYm9hcmQuYWxsU3VuaygpKSB7XG4gICAgICAgICAgICBhbGVydChcIllvdSB3aW4hXCIpO1xuICAgICAgICAgICAgLy8gUmVzZXQgdGhlIGdhbWUgb3IgZGlzcGxheSBhIHJlc3RhcnQgYnV0dG9uXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbXB1dGVyVHVybigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGJvYXJkRWxlbWVudC5hcHBlbmRDaGlsZChjZWxsRWxlbWVudCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIFJlbmRlciBtaXNzZWQgYXR0YWNrc1xuICBnYW1lYm9hcmQubWlzc2VkQXR0YWNrcy5mb3JFYWNoKChjb29yZHMpID0+IHtcbiAgICBjb25zdCBbcm93LCBjb2xdID0gY29vcmRzO1xuICAgIGNvbnN0IGNlbGxFbGVtZW50ID0gYm9hcmRFbGVtZW50LmNoaWxkcmVuW3JvdyAqIDEwICsgY29sXTtcbiAgICBjZWxsRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibWlzc2VkXCIpO1xuICB9KTtcbiAgZ2FtZWJvYXJkLmF0dGFja2VkQ2VsbHMuZm9yRWFjaCgoY29vcmRzKSA9PiB7XG4gICAgY29uc3QgW3JvdywgY29sXSA9IGNvb3JkcztcbiAgICBjb25zdCBjZWxsRWxlbWVudCA9IGJvYXJkRWxlbWVudC5jaGlsZHJlbltyb3cgKiAxMCArIGNvbF07XG4gICAgY2VsbEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNoaXBcIik7XG4gICAgY2VsbEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNoaXAtaGl0XCIpO1xuICB9KTtcbn07XG5cbmNvbnN0IGNvbXB1dGVyVHVybiA9ICgpID0+IHtcbiAgY29uc3QgY29vcmRzID0gY29tcHV0ZXIuYXR0YWNrKCk7XG4gIHJlbmRlckdhbWVib2FyZChwbGF5ZXJHYW1lYm9hcmQsIHBsYXllckJvYXJkKTtcbiAgaWYgKHBsYXllckdhbWVib2FyZC5hbGxTdW5rKCkpIHtcbiAgICBhbGVydChcIkNvbXB1dGVyIHdpbnMhXCIpO1xuICAgIC8vIFJlc2V0IHRoZSBnYW1lIG9yIGRpc3BsYXkgYSByZXN0YXJ0IGJ1dHRvblxuICB9XG59O1xuXG4vLyBSZW5kZXIgZ2FtZWJvYXJkc1xucmVuZGVyR2FtZWJvYXJkKHBsYXllckdhbWVib2FyZCwgcGxheWVyQm9hcmQpO1xucmVuZGVyR2FtZWJvYXJkKGNvbXB1dGVyR2FtZWJvYXJkLCBjb21wdXRlckJvYXJkKTtcbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlUGxheWVyIiwiZW5lbXlHYW1lYm9hcmQiLCJhdHRhY2siLCJjb29yZHMiLCJyZWNlaXZlQXR0YWNrIiwiY3JlYXRlQ29tcHV0ZXIiLCJwbGF5ZXJHYW1lYm9hcmQiLCJhdHRhY2tlZENvb3JkcyIsInNvbWUiLCJjIiwicm93IiwiY29sIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZ2V0UmFuZG9tQ29vcmRzIiwicHVzaCIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsIl9fd2VicGFja19tb2R1bGVzX18iLCJzaGlwc0NvbmZpZyIsImJvYXJkIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiZmlsbCIsIm1pc3NlZEF0dGFja3MiLCJzaGlwcyIsImF0dGFja2VkQ2VsbHMiLCJwbGFjZVNoaXAiLCJzaGlwIiwib3JpZW50YXRpb24iLCJfY29vcmRzIiwiX3NsaWNlZFRvQXJyYXkiLCJpIiwiZm9yRWFjaCIsIl9yZWYiLCJfY29vcmRzMiIsImhpdCIsImFsbFN1bmsiLCJldmVyeSIsImlzU3VuayIsImhpdHMiLCJ0aGlzIiwicGxheWVyU2hpcHNDb25maWciLCJjcmVhdGVTaGlwIiwiY29tcHV0ZXJTaGlwc0NvbmZpZyIsImNyZWF0ZUdhbWVib2FyZCIsImNvbXB1dGVyR2FtZWJvYXJkIiwicGxheWVyIiwiY29tcHV0ZXIiLCJwbGF5ZXJCb2FyZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb21wdXRlckJvYXJkIiwicmVuZGVyR2FtZWJvYXJkIiwiZ2FtZWJvYXJkIiwiYm9hcmRFbGVtZW50IiwiaW5uZXJIVE1MIiwicm93SW5kZXgiLCJjZWxsIiwiY29sSW5kZXgiLCJjZWxsRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwiYWxlcnQiLCJjb21wdXRlclR1cm4iLCJhcHBlbmRDaGlsZCIsImNoaWxkcmVuIiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==