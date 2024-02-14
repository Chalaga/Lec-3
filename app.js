// დაწერეთ ფუნქცია რომლის მიხედვითაც პარამეტრად უნდა მივიღოთ productId, და ახალი category მაგალითად Electronics რომლის მიხედვითაც განვაახლებთ იმ product რომლის id მოგვივა.გამოიყენეთ map და if else.

const products = [
  {
    id: 1,
    title: "Product A",
    price: 9.99,
    category: "Clothing",
  },
  {
    id: 2,
    title: "Product B",
    price: 19.99,
    category: "Books",
  },
  {
    id: 3,
    title: "Product C",
    price: 29.99,
    category: "Clothing",
  },
  {
    id: 4,
    title: "Product C",
    price: 29.99,
    category: "Books",
  },
];

function Changecategory(productId, category) {
  return products.map((item) => {
    if (item.id === productId) {
      return { ...products, category: category };
    } else {
      return item;
    }
  });
}

const ChangecategoryID = Changecategory(2, "electronics");
console.log(ChangecategoryID);
