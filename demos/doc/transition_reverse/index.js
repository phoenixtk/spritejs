const {Scene, Sprite, Label} = spritejs;
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
});
const layer = scene.layer();

const label = new Label('试试将鼠标移动到左右两个方块上：');
label.attr({
  anchor: 0.5,
  pos: [400, 50],
  fontSize: '2rem',
});
layer.append(label);

const left = new Sprite();
left.attr({
  anchor: 0.5,
  pos: [300, 300],
  size: [200, 200],
  bgcolor: 'red',
});
layer.append(left);

const right = left.cloneNode();
right.attr({
  pos: [700, 300],
  bgcolor: 'green',
});
layer.append(right);

let leftTrans = null;
left.addEventListener('mouseenter', (evt) => {
  if(leftTrans) leftTrans.cancel();
  leftTrans = left.transition(1.0);
  leftTrans.attr({
    rotate: 180,
    bgcolor: 'green',
  });
});
left.addEventListener('mouseleave', (evt) => {
  leftTrans.attr({
    rotate: 0,
    bgcolor: 'red',
  });
});

let rightTrans = null;
right.addEventListener('mouseenter', (evt) => {
  if(rightTrans) rightTrans.cancel();
  rightTrans = right.transition(3.0);
  rightTrans.attr({
    rotate: 720,
    bgcolor: 'red',
  });
});
right.addEventListener('mouseleave', (evt) => {
  rightTrans.reverse();
});