export default function sortHealths(items) {
  if (items == null) {
    return items;
  }
  items.sort((item1, item2) => {
    if (item1 == null || item1.health == null || Number.isNaN(+item1.health)) {
      throw Error('illegal argument');
    }
    if (item2 == null || item2.health == null || Number.isNaN(+item2.health)) {
      throw Error('illegal argument');
    }
    return item2.health - item1.health;
  });
  return items;
}
