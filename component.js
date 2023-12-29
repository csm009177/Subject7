
const stateData = [
  { hash: '#Kimwoojin',       text: '김우진'  },
  { hash: '#Kimhyun',         text: '김현'    },
  { hash: '#Bangseunhee',     text: '방승희'  },
  { hash: '#Byunhonyung',     text: '변호녕'  },
  { hash: '#Sosamuel',        text: '소사무엘'},
  { hash: '#Songyoungjun',    text: '송영준'  },
  { hash: '#Sindonghyun',     text: '신동현'  },
  { hash: '#Ohseungmin',      text: '오승민'  },
  { hash: '#Yuseungmin',      text: '유승민'  },
  { hash: '#Yunjunhyun',      text: '윤준현'  },
  { hash: '#Leemingu',        text: '이민구'  },
  { hash: '#Leeyuan',         text: '이유안'  },
  { hash: '#Leechayee',       text: '이채이'  },
  { hash: '#Junngyoungsick',  text: '정영식'  },
  { hash: '#Choisungmin',     text: '최성민'  },
  { hash: '#Choieunchul',     text: '최은철'  },
  { hash: '#Hongmoongi',      text: '홍문기'  },
];
const strData = [{
  str1 : `Lorem ipsum dolor sit amet consectetur. Mauris vitae nullam suspendisse ut amet quis nibh pellentesque. Non ut neque pellentesque nisl imperdiet turpis nulla ut. Ut id massa eu eu rhoncus elementum adipiscing metus. Mi risus nulla phasellus nisl molestie dignissim risus arcu elementum. Habitasse tortor tempus sed enim lectus duis volutpat. Pellentesque lacinia suspendisse sit malesuada sit a faucibus sed mattis. Egestas mauris id mattis id pulvinar nunc euismod id diam. Amet amet aliquet pharetra sed nam ipsum aenean dis tempor. Nisl in egestas cursus sagittis sed in integer. Sed sed cursus tempor porttitor. Cras viverra arcu sed laoreet volutpat enim sem sapien. Est nibh velit eu ipsum praesent vitae vestibulum aliquam.
  Sagittis nisi faucibus libero luctus tincidunt. Porttitor laoreet tellus maecenas tempor. Vehicula ut vulputate lorem congue. Eget dignissim aliquam integer tincidunt massa nulla duis mauris. Pellentesque aenean sit mauris morbi.
  Dolor non aliquam elit risus elementum dictumst. Eu egestas turpis diam dictum. Dictumst leo senectus velit porta. Pretium tortor velit nulla sit ipsum vel sagittis. Eget elit donec sed amet vel in mattis aenean nibh. Fermentum et ac purus diam sit erat in vitae tellus. In at sit ornare fermentum. Risus blandit amet eget id.`,
  str2 : `Lorem ipsum dolor sit amet consectetur. Consectetur morbi fames in id sit turpis eget lectus ut. Neque orci hendrerit scelerisque nam ac ac eu dui urna. Aliquet vulputate tortor odio ut. Turpis nam sagittis non iaculis. Eu purus mollis cursus sagittis sit. Tempor tempor tincidunt ac in. Ullamcorper eros ullamcorper tincidunt sagittis. Libero massa nec gravida libero. Volutpat orci bibendum morbi porta mauris pellentesque. Natoque gravida at penatibus vestibulum purus tristique mollis imperdiet amet. Sed magna dignissim luctus cras nulla. Ultrices sapien sed quis consectetur turpis fusce sem facilisis eget.`
}]

export function createElement(type, props, ...children) {
  return { type, props, children };
}

export function component(stateData, direction) {
  const menuItems = [];
  for (let i = 0; i < stateData.length; i++) {
    const item = stateData[i];
    const menuItem = createElement("li", {id:`LiTag${i}`, 
      style: `list-style: none; `},
      createElement("a", { class:"stateDataCalss", href: item.hash }, item.text ) );
    menuItems.push(menuItem);
  }
  return createElement("div", {id:"stateCont" }, ...menuItems );
}

export function render(virtualDom) {
  if (typeof virtualDom === "string") {
    return document.createTextNode(virtualDom);
  }
  const element = document.createElement(virtualDom.type);
  if (virtualDom.props) {
    for (const [key, value] of Object.entries(virtualDom.props)) {
      element.setAttribute(key, value);
    }
  }
  for (let i = 0; i < virtualDom.children.length; i++) {
    const child = virtualDom.children[i];
    element.appendChild(render(child));
  }
  return element;
}

export function hashCompo(index){
  const middle = document.getElementById('middle')
    const middlebody =
      createElement("div", { id: stateData[index].text, class: "middleCont" },
        createElement("div", { class: "top" },
          createElement("h1", {}, stateData[index].text),
          createElement("p", {}, strData[0].str1),
        ),
        createElement("div", { class: "middle" },
          createElement("h1", {}, stateData[index].text + "장정"),
          createElement("p", {}, strData[0].str2),
        ),
        createElement("div", { class: "bottom" },
          createElement("input", { id: "inputTag", placeholder: "write your name" },),
          createElement("div", {}, "")
        ),
      )
    middle.appendChild(render(middlebody));
}