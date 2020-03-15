import _ from 'lodash';

let dragons = [
    {name: 'yoyo', element: 'lightning'},
    {name: 'noomi', element: 'lightning'},
    {name: 'karo', element: 'fire'},
    {name: 'doomer', element: 'timewarp'}
];

let hasElement = function (element, obj) {
    return obj.element === element;
};
// 这里，x & obj 其实是一类参数
let lightningDragons = dragons.filter((x) => {
    return hasElement('lightning',x);
});

//curring

let hasElement2 = _curring((element, obj) => {return obj.element === element;});

let lightningDragons2 = dragons.filter(hasElement2('lightning'));


console.log(lightningDragons2);
console.log(lightningDragons);


