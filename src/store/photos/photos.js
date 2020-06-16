//photo section

import one from "@/assets/one.png";
import two from "@/assets/two.png";
import three from "@/assets/three.png";
import four from "@/assets/four.png";
import five from "@/assets/five.png";
import six from "@/assets/six.png";
import seven from "@/assets/seven.png";
import eight from "@/assets/eight.png";
import nine from "@/assets/nine.png";
import ten from "@/assets/ten.png";
import eleven from "@/assets/eleven.png";
import twelve from "@/assets/twelve.png";

const photos = [
  { image: one, desc: "Sunrise in Angkor Wat Temple, Cambodia" },
  { image: two, desc: "Sunset in Pai Canyon, North Thailand" },
  { image: three, desc: "Giant trees in Wat Pnom Temple, Cambodia" },
  { image: four, desc: "Tea terraces, Dalat, Vietnam" },
  { image: five, desc: "Pai Canyon, North Thailand" },
  { image: six, desc: "Ancient trees, Angkor Wat Temple, Cambodia" },
  { image: seven, desc: "Wonderful Yangshuo, China" },
  { image: eight, desc: "Cozy fall in Pai, North Thailand" },
  { image: nine, desc: "Another sunset on Railay Beach, Krabi, Thailand" },
  { image: ten, desc: "Traditional Korean outfit, Seoul, South Korea" },
  { image: eleven, desc: "Pai, landscapes, North Thailand" },
  {
    image: twelve,
    desc: "Another sunset on the top of Gia Lao mountain, Vietnam"
  },

  { image: one, desc: "Sunrise in Angkor Wat Temple, Cambodia" },
  { image: two, desc: "Sunset in Pai Canyon, North Thailand" },
  { image: three, desc: "Giant trees in Wat Pnom Temple, Cambodia" },
  { image: four, desc: "Tea terraces, Dalat, Vietnam" },
  { image: five, desc: "Pai Canyon, North Thailand" },
  { image: six, desc: "Ancient trees, Angkor Wat Temple, Cambodia" },
  { image: seven, desc: "Wonderful Yangshuo, China" },
  { image: eight, desc: "Cozy fall in Pai, North Thailand" },
  { image: nine, desc: "Another sunset on Railay Beach, Krabi, Thailand" },
  { image: ten, desc: "Traditional Korean outfit, Seoul, South Korea" },
  { image: eleven, desc: "Pai, landscapes, North Thailand" },
  {
    image: twelve,
    desc: "Another sunset on the top of Gia Lao mountain, Vietnam"
  }
];

// const photoStore = {
//   namespaced: true,
//   state: {
//     photos: photos,
//     photosPerPage: 12,
//     currentPage: 1
//   },
//   getters: {
//     slicedPhotos: ({ photos }) => (from, to) => photos.slice(from, to)
//   },
//   actions: {
//     paginatedPhotos() {
//       const from = currentPage * photosPerPage - photosPerPage;
//       const to = currentPage * photosPerPage;
//       const photosToDisplay = slicedPhotos(from, to);
//     }
//   }
// };

export default photos;
