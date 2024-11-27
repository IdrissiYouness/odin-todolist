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
  iconSvg.setAttribute("viewBox", "0 0 24 24");


  const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path1.setAttribute("d", "M15.352,22H8.648c-1.513,0-2.789-1.127-2.977-2.628L4,6h16l-1.672,13.372	C18.141,20.873,16.865,22,15.352,22z");
  path1.setAttribute("opacity", ".35");
  iconSvg.appendChild(path1);


  const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path2.setAttribute("d", "M16,4H8V3c0-0.552,0.448-1,1-1h6c0.552,0,1,0.448,1,1V4z");
  iconSvg.appendChild(path2);


  const path3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path3.setAttribute("d", "M19,3C18.399,3,5.601,3,5,3C3.895,3,3,3.895,3,5c0,1.105,0.895,2,2,2c0.601,0,13.399,0,14,0c1.105,0,2-0.895,2-2	C21,3.895,20.105,3,19,3z");
  iconSvg.appendChild(path3);


  node.appendChild(iconSvg);

  return iconSvg;

}

export function renderAddIcon(node) {
  const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');


  iconSvg.classList.add('add-icon');
  iconSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  iconSvg.setAttribute("x", "0px");
  iconSvg.setAttribute("y", "0px");
  iconSvg.setAttribute("width", "24");
  iconSvg.setAttribute("height", "24");
  iconSvg.setAttribute("viewBox", "0 0 24 24");


  const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path1.setAttribute(
    "d",
    "M19,10c-0.278,0-2.447,0-5,0c0-2.553,0-4.722,0-5c0-1.105-0.895-2-2-2s-2,0.895-2,2	c0,0.278,0,2.447,0,5c-2.553,0-4.722,0-5,0c-1.105,0-2,0.895-2,2c0,1.105,0.895,2,2,2c0.2,0,13.8,0,14,0c1.105,0,2-0.895,2-2	C21,10.895,20.105,10,19,10z"
  );
  path1.setAttribute("opacity", ".35");
  iconSvg.appendChild(path1);


  const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path2.setAttribute(
    "d",
    "M12,21c1.105,0,2-0.895,2-2c0-0.278,0-2.447,0-5h-4c0,2.553,0,4.722,0,5C10,20.105,10.895,21,12,21z"
  );
  iconSvg.appendChild(path2);

  node.appendChild(iconSvg);

  return iconSvg;
}

