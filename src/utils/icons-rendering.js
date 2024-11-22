export function renderCloseModalBtn(node){

  const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const iconPath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );
  iconSvg.classList.add('close-modal-btn');
  iconSvg.setAttribute("x", "0px");
  iconSvg.setAttribute("y", "0px");
  iconSvg.setAttribute("width", "24");
  iconSvg.setAttribute("height", "24");
  iconSvg.setAttribute("viewBox", "0 0 26 26");


  iconPath.setAttribute(
    "d",
    "M 21.734375 19.640625 L 19.636719 21.734375 C 19.253906 22.121094 18.628906 22.121094 18.242188 21.734375 L 13 16.496094 L 7.761719 21.734375 C 7.375 22.121094 6.746094 22.121094 6.363281 21.734375 L 4.265625 19.640625 C 3.878906 19.253906 3.878906 18.628906 4.265625 18.242188 L 9.503906 13 L 4.265625 7.761719 C 3.882813 7.371094 3.882813 6.742188 4.265625 6.363281 L 6.363281 4.265625 C 6.746094 3.878906 7.375 3.878906 7.761719 4.265625 L 13 9.507813 L 18.242188 4.265625 C 18.628906 3.878906 19.257813 3.878906 19.636719 4.265625 L 21.734375 6.359375 C 22.121094 6.746094 22.121094 7.375 21.738281 7.761719 L 16.496094 13 L 21.734375 18.242188 C 22.121094 18.628906 22.121094 19.253906 21.734375 19.640625 Z"
  );

  iconSvg.appendChild(iconPath);

  node.appendChild(iconSvg);

  return iconSvg;
}

export function renderDeleteTaskBtn(node) {

  const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');


  iconSvg.classList.add('delete-task-btn');
  iconSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  iconSvg.setAttribute("x", "0px");
  iconSvg.setAttribute("y", "0px");
  iconSvg.setAttribute("width", "24");
  iconSvg.setAttribute("height", "24");
  iconSvg.setAttribute("viewBox", "0 0 26 26");


  const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path1.setAttribute("fill", "#b39ddb");
  path1.setAttribute("d", "M30.6,44H17.4c-2,0-3.7-1.4-4-3.4L9,11h30l-4.5,29.6C34.2,42.6,32.5,44,30.6,44z");
  iconSvg.appendChild(path1);


  const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path2.setAttribute("fill", "#9575cd");
  path2.setAttribute("d", "M28 6L20 6 14 12 34 12z");
  iconSvg.appendChild(path2);


  const path3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path3.setAttribute("fill", "#7e57c2");
  path3.setAttribute("d", "M10,8h28c1.1,0,2,0.9,2,2v2H8v-2C8,8.9,8.9,8,10,8z");
  iconSvg.appendChild(path3);


  node.appendChild(iconSvg);

  return iconSvg;
}

