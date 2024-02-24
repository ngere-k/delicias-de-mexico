import React from "react";

const EventBlog = ({ foodId }) => {
  const text1 =
    "What if you could have a soup that tasted like nachos? Well now you can. Full of vibrant Mexican flavours, this vegetarian soup is topped with tortilla chips and ready in a flash.";

  const text2 =
    "We’ve doubled the quantities of this sensational smoky sausage chilli so you can eat half now and freeze the other half for another meal.";

  const text3 =
    "Make this comforting vegetarian chilli, serve half now and freeze the rest for later. You can use the leftovers in our mash potato-topped gardener’s pie.";

  if (foodId === "64") {
    return text1.slice(0, 137) + "...";
  }

  if (foodId === "65") {
    return text2.slice(0, 137) + "...";
  }
  if (foodId === "66") {
    return text3.slice(0, 137) + "...";
  }
  return <div>EventBlog</div>;
};

export default EventBlog;
