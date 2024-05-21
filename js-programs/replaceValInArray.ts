const ARRAY_OF_OBJECTS = [
  { id: 1, title: "Title 1" },
  { id: 2, title: "Title 2" },
  { id: 3, title: "Title 3" },
];

const someFunction = (arr: any) => {
  // You need to change title for 2nd element of `ARRAY_OF_OBJECTS` and use it only in this place.
  const updatedArray = arr.map((obj: any) =>
    obj.id === 2 ? { ...obj, title: "New Title 2" } : obj
  );

  console.log(updatedArray);
  console.log(ARRAY_OF_OBJECTS); //Make sure the original array is not modified
};

const anotherFunction = () => {
  // here we use original `ARRAY_OF_OBJECTS`
  //   console.log({ ARRAY_OF_OBJECTS });
};

someFunction(ARRAY_OF_OBJECTS);
// anotherFunction();
